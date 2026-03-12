import { defineStore } from "pinia"
import emailjs from '@emailjs/browser'
import { ref } from "vue";

export const useSmtpStore = defineStore('smtpStore', () => {

    const isLoading = ref(false);
    const formSuccess = ref(false)

    const sendSmtp = async (form) => {
        isLoading.value = true
        try {
            await emailjs.send(
                'service_61obfmt',    // de emailjs.com
                'template_u87ztrn',   // template que creas en emailjs.com
                {
                    from_name: form.name,
                    from_email: form.email,
                    phone: form.phone,
                    reason: form.reason,
                },
                'C6s09IlM0-dk0-pJJ'     // de emailjs.com
            )
            formSuccess.value = true
        } catch (err) {
            formError.value = 'Error al enviar. Intenta de nuevo.'
        } finally {
            isLoading.value = false
        }

    }


    return {
        sendSmtp,
        isLoading,
        formSuccess,
    }

});
