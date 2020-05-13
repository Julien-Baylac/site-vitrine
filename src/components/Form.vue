<template>
    <b-form class="form">
        <div class="names justify-content-between">
            <NameInput 
            class='firstname-input'
            :input_title="$t('form.name_input.firstname')"/>
            <NameInput class='lastname-input'
            :input_title="$t('form.name_input.lastname')"/>
        </div>
        <TextAreaInput class="text-area-input"/>
        <SubmitButton class="submit-button"/>
    </b-form>
</template>

<script>
import NameInput from '@/components/inputs/NameInput'
import TextAreaInput from '@/components/inputs/TextAreaInput'
import SubmitButton from '@/components/buttons/SubmitButton'

export default {
    name: 'form-component',
    components: {
        NameInput,
        TextAreaInput,
        SubmitButton
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
    .names {
        display: flex;
    }
    .firstname-input, .lastname-input {
        width: 49.5%;
        margin-top: 0;
    }
    .text-area-input {
        margin-top: 0;
    }   
 }
</style>