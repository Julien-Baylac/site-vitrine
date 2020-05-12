<template>
    <div class="">
        <div class="names d-flex justify-content-between">
            <NameInput class='firstname-input'/>
            <NameInput class='lastname-input'/>
        </div>
        <TextAreaInput class="text-area-input"/>
    </div>
</template>

<script>
import NameInput from '@/components/inputs/NameInput'
import TextAreaInput from '@/components/inputs/TextAreaInput'

export default {
    name: 'form-component',
    components: {
        NameInput,
        TextAreaInput
    }
}   
</script>

<style lang='scss' scoped>
.names {
    margin-bottom: 1em;
}
.firstname-input, .lastname-input {
    width: 49%;
}
</style>