<template>
    <div class="social-network-bar">
        <vk-icon-button 
            v-for="(button, key) in socials" :key="key"
            :href="button.ref" 
            target="_blank" 
            class="uk-margin-small-right" 
            :icon="button.icon" 
            :uk-tooltip="button.tooltip"
        >
        </vk-icon-button>
    </div>
</template>

<script>
export default {
    name: 'social-network-bar',
    data() {
        return {
            socials: {
                mail: {
                    icon: 'mail',
                    ref: 'mailto:julien.baylac@protonmail.com',
                    tooltip: 'julien.baylac@protonmail.com'
                },
                linkedin: {
                    icon: 'linkedin',
                    ref: 'https://www.linkedin.com/in/julien-baylac-041600172/',
                    tooltip: 'julien-baylac-041600172'
                },
                twitter: {
                    icon: 'twitter',
                    ref: 'https://twitter.com/julien_baylac',
                    tooltip: '@julien_baylac'
                },
                pinterest: {
                    icon: 'pinterest',
                    ref: 'https://www.pinterest.fr/oowpinterest',
                    tooltip: 'oowpinterest'
                },
                github: {
                    icon: 'github',
                    ref: 'https://github.com/Julien-Baylac',
                    tooltip: 'Julien-Baylac'
                }
            }
        }
    }
}
</script>
