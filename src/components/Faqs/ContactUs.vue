<script setup>
import { reactive, ref } from 'vue'

const RECIPIENT_EMAIL = 'cerratohouses@gmail.com'

const formData = reactive({
    name: '',
    email: '',
    message: '',
})

const statusMessage = ref('')

function handleFormSubmit() {
    statusMessage.value = 'Preparing email...'

    const subject = `Contact Form Submission from ${formData.name}`

    const body = `
      You received a message via the Cerrato Houses website contact form:

      ------------------------------------

      Sender Name: ${formData.name}
      Sender Email: ${formData.email}

      ------------------------------------

      Message:
      ${formData.message}
    `

    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body.trim()).replace(
        /%0A/g,
        '%0D%0A',
    )

    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${encodedSubject}&body=${encodedBody}`

    try {
        statusMessage.value =
            "Opening your email client. Please click 'Send' there to complete."
        window.location.href = mailtoLink
    } catch (error) {
        console.error('Failed to trigger mailto link:', error)
        statusMessage.value =
            'Could not open email client. Please copy the details manually.'
    }
}
</script>

<template>
    <section class="contactUs">
        <div class="contactUsContainer">
            <Transition appear name="header">
                <div class="header">
                    <h2 class="title">Contact us</h2>
                    <p class="description">
                        It is very important for us to keep touch with you,
                        so we are always ready to answer any question that
                        interests you.
                    </p>
                </div>
            </Transition>
            <Transition appear name="form">
                <form class="form" @submit.prevent="handleFormSubmit">
                    <input
                        type="text"
                        placeholder="Name"
                        v-model="formData.name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        v-model="formData.email"
                        required
                    />
                    <textarea
                        placeholder="Message"
                        v-model="formData.message"
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                    <p v-if="statusMessage" class="status-message">
                        {{ statusMessage }}
                    </p>
                </form>
            </Transition>
        </div>
    </section>
</template>

<style scoped>
.contactUs {
    padding-block: 4.5rem;
    padding-inline: var(--mobile-padding-inline);
    background-color: var(--secondary-color);
}

.contactUsContainer {
    display: grid;
    row-gap: 3rem;
}

.header {
    display: grid;
    row-gap: 0.5rem;
    color: var(--tertiary-color);
}

.description {
    opacity: 70%;
}

.form {
    display: grid;
    row-gap: 1rem;
}

.form input,
.form textarea {
    background-color: transparent;
    border: unset;
    border-bottom: 1px solid var(--primary-color);
    padding-bottom: 1rem;
    color: var(--tertiary-color);
    outline: unset;
    caret-color: var(--tertiary-color);
}

.form input::placeholder,
.form textarea::placeholder {
    color: var(--tertiary-color);
    font-size: var(--fs-md);
    opacity: 70%;
}

.form textarea {
    resize: none;
    min-height: 80px;
}

button {
    max-width: fit-content;
    background-color: var(--primary-color);
    border: unset;
    text-transform: uppercase;
    color: var(--tertiary-color);
    padding: 12px 28px;
    border-radius: 2rem;
    font-size: var(--fs-md);
    font-weight: bold;
    margin-top: 1rem;
}

.status-message {
    margin-top: 1rem;
    color: var(--tertiary-color);
    font-size: var(--fs-sm);
    opacity: 0.9;
}

@media screen and (min-width: 1024px) {
    .contactUs {
        padding-block: 5rem;
        padding-inline: var(--desktop-padding-inline);
        display: flex;
        justify-content: center;
    }

    .contactUsContainer {
        width: 100%;
        max-width: var(--max-w);
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        column-gap: 4rem;
    }

    .header {
        place-content: start;
        flex: 1;
    }

    .title {
        font-size: var(--fs-xxl);
    }

    .description {
        max-width: 30rem;
        font-size: var(--fs-lg);
    }

    .form {
        flex: 0.75;
        width: 100%;
        max-width: 450px;
    }

    /* Animation */
    .header-enter-from {
        transform: translateX(-100%);
        opacity: 0;
    }

    .header-enter-active {
        transition:
            transform 1s ease-in-out,
            opacity 1s ease-in-out;
    }

    .header-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    .form-enter-from {
        transform: translateX(100%);
        opacity: 0;
    }

    .form-enter-active {
        transition:
            transform 1s ease-in-out,
            opacity 1s ease-in-out;
    }

    .form-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    button {
        transition:
            background-color 0.2s ease-in-out,
            color 0.2s ease-in-out;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--tertiary-color);
        color: var(--primary-color);
    }
}
</style>
