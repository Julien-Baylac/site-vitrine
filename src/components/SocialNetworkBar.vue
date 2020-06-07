<template>
    <div>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
        <div class="social-buttons">
            <a href="#" class="social-button linkedin"><i class="fa fa-linkedin"></i></a>
            <a href="#" class="social-button twitter"><i class="fa fa-twitter"></i></a>
            <a href="#" class="social-button vk"><i class="fa fa-vk"></i></a>
            <a href="#" class="social-button github"><i class="fa fa-github"></i></a>
        </div>
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

<style lang="scss" scoped>
.social-button {
    display: inline-block;
    background-color: #fff;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 0 !important;
    margin-right: 14px !important;
    text-align: center;
    position: relative;
    overflow: hidden;
    opacity: .99;
    border-radius: 50%;
    box-shadow: 0 0 30px 0 rgba(0,0,0,0.06);
    -webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
    transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
}

.social-button:before {
    content: '';
    background-color: #000;
    width: 120%;
    height: 120%;
    position: absolute;
    top: 40%;
    left: -120%;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.79);
    transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.79);
}

.social-button .fa {
    font-size: 26px;
    vertical-align: middle;
    -webkit-transform: scale(0.75);
    -ms-transform: scale(0.75);
    transform: scale(0.75);
    -webkit-transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
    transition: all .35s cubic-bezier(0.31,-0.105,0.43,1.59);
}

.social-button.linkedin:before {
    background-color: #3B5998;
}

.social-button.linkedin .fa {
    color: #3B5998;
}

.social-button.twitter:before {
    background-color: #3CF;
}

.social-button.twitter .fa {
    color: #3CF;
}

.social-button.vk:before {
    background-color: #DC4A38;
}

.social-button.vk .fa {
    color: #DC4A38;
}

.social-button.github:before {
    background-color: #F26798;
}

.social-button.github .fa {
    color: #F26798;
}


.social-button:hover:before {
    top: -10%;
    left: -10%;
}

.social-button:hover .fa {
    color: #fff;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
}

.social-button:focus {
    opacity: .85;
}

* {
    margin: 0;
    padding: 0;
    color: inherit;
    box-sizing: inherit;
}

:focus {
    outline: none;
}
</style>