<template>
    <b-form class="form">
        <div class="first-inputs">
            <div class="names justify-content-between">
                <NameInput 
                class='firstname-input'
                :input_title="$t('form.name_input.firstname')"/>
                <NameInput class='lastname-input'
                :input_title="$t('form.name_input.lastname')"/>
            </div>
            <EmailInput class="email-input"/>
        </div>
        <TextAreaInput class="text-area-input"/>
        <SubmitButton class="submit-button"/>
    </b-form>
</template>

<script>
import NameInput from '@/components/inputs/NameInput'
import EmailInput from '@/components/inputs/EmailInput'
import TextAreaInput from '@/components/inputs/TextAreaInput'
import SubmitButton from '@/components/buttons/SubmitButton'

export default {
    name: 'form-component',
    components: {
        NameInput,
        TextAreaInput,
        SubmitButton,
        EmailInput
    }
}   
</script>

<style lang='scss' scoped>
.names {
    margin-bottom: 1em;
}
.firstname-input, .lastname-input, .submit-button {
    margin-top: 10px;
}
.text-area-input {
    margin-top: 20px;
}
@media (min-width: 768px) {
    .first-inputs {
        display: flex;
        justify-content: space-between;
    }
    .names {
        display: flex;
        width: 49.5%;
    }
    .email-input {
        width: 49.5%;
    }
    .firstname-input, .lastname-input {
        width: 49%;
        margin-top: 0;
    }
    .text-area-input {
        margin-top: 0.1em;
    }   
 }
</style>