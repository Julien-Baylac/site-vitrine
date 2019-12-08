<template>
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
                <textarea class="uk-textarea" rows="5" :placeholder="$t('form.yourMessage')" v-model.trim="$v.message.$model"></textarea>
            </div>
        </fieldset>

        <vk-button
            value="Submit"
            size="small"
            :disabled='check_disable'>
            {{ $t('form.send') }}
        </vk-button>

    </form>
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
            message: null
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
    computed: {
        check_disable() {
            return this.$v.firstname.$error || 
            this.$v.firstname.$model === null || 
            this.$v.lastname.$error || 
            this.$v.lastname.$model === null || 
            this.$v.mail.$error || 
            this.$v.mail.$model === null || 
            this.$v.message.$error || 
            this.$v.message.$model === null
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