<template>
      <form>
        <fieldset class="uk-fieldset">
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" type="text" :placeholder="$t('form.firstname')">
                </div>
                <div class="uk-inline left-space">
                    <input class="uk-input" type="text" :placeholder="$t('form.lastname')">
                </div>
                <div class="uk-inline left-space">
                <span class="uk-form-icon" uk-icon="icon: mail"></span>
                <input class="uk-input uk-input uk-form-width-large" type="text" :placeholder="$t('form.mail')" >
                </div>
            </div>
            <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" :placeholder="$t('form.yourMessage')"></textarea>
            </div>
        </fieldset>
        <vk-button size="small">{{ $t('form.send') }}</vk-button>
    </form>
</template>

<script>
export default {
    name: 'form-component'
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