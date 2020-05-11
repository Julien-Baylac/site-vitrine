<template>
    <div>
        <form>
            <fieldset class="uk-fieldset">
                <div class="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input class="uk-input" type="text" :placeholder="$t('form.firstname')" v-model.trim="$v.firstname.$model">
                    </div>
                    <div class="uk-inline left-space">
                        <input class="uk-input" type="text" :placeholder="$t('form.lastname')" v-model.trim="$v.lastname.$model">
                    </div>
                    <div class="uk-inline left-space">
                        <span class="uk-form-icon" uk-icon="icon: mail"></span>
                        <input class="uk-input uk-input uk-form-width-large" type="email" :placeholder="$t('form.mail')" v-model.trim="$v.mail.$model">
                    </div>
                </div>
                <div class="uk-margin">
                    <textarea class="uk-textarea" rows="7" :placeholder="$t('form.yourMessage')" v-model.trim="$v.message.$model"></textarea>
                </div>
            </fieldset>

            <div>
                <vk-button
                    class="uk-align-right"
                    value="Submit"
                    size="small"
                    :disabled='check_disable'>
                    {{ $t('form.send') }}
                </vk-button>
                <ul class="uk-dotnav">
                    <li :class="{ 'uk-active': !check_firstname }" :uk-tooltip="$t('form.firstname')"><a></a></li>
                    <li :class="{ 'uk-active': !check_lastname }" :uk-tooltip="$t('form.lastname')"><a></a></li>
                    <li :class="{ 'uk-active': !check_mail }" :uk-tooltip="$t('form.mail')"><a></a></li>
                    <li :class="{ 'uk-active': !check_message }" :uk-tooltip="$t('form.yourMessage')"><a></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
    name: 'form-component',
    data() {
        return {
            firstname: null,
            lastname: null,
            mail: null,
            message: null,
            validate_array: [],
            messages: ['wow']
        }
    },
    validations: {
        firstname: {
            required,
            minLength: minLength(2)
        },
        lastname: {
            required,
            minLength: minLength(2)
        },
        mail: {
            email,
            required,
            minLength: minLength(4)
        },
        message: {
            required,
            minLength: minLength(1)
        }
    },
    methods: {
        send_email() {
            this.reset_modeles()
            this.messages.push('Message')
        },
        reset_modeles() {
            this.firstname = null,
            this.lastname = null,
            this.mail = null,
            this.message = null
        }
    },
    computed: {
        check_firstname() {
            return this.$v.firstname.$error || 
            this.$v.firstname.$model === null
        },
        check_lastname() {
            return this.$v.lastname.$error || 
            this.$v.lastname.$model === null
        },
        check_mail() {
            return this.$v.mail.$error || 
            this.$v.mail.$model === null
        },
        check_message() {
            return this.$v.message.$error || 
            this.$v.message.$model === null
        },
        check_disable() {
            return this.check_firstname || this.check_lastname || this.check_mail || this.check_message ? true : false
        }
    }
}   
</script>

<style scoped>
.left-space {
    margin-left: 15px
}
.uk-button {
    text-transform: capitalize
}
</style>