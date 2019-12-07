<template>
      <form>
        <fieldset class="uk-fieldset">
            <div class="uk-margin">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input class="uk-input" type="text" placeholder="Prénom">
                </div>
                <div class="uk-inline left-space">
                    <span class="uk-form-icon"></span>
                    <input class="uk-input" type="text" placeholder="Nom">
                </div>
                <div class="uk-inline left-space">
                <span class="uk-form-icon" uk-icon="icon: mail"></span>
                <input class="uk-input uk-input uk-form-width-large" type="text" placeholder="Mail" >
                </div>
            </div>
            <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" placeholder="Votre messsage..."></textarea>
            </div>
        </fieldset>
        <vk-button size="small">Envoyer</vk-button>
    </form>
</template>

<script>
export default {
    name: 'form'
}
</script>

<style>
.left-space {
    margin-left: 15px
}
.uk-button {
    text-transform: capitalize
}
</style>