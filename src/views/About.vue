<template>
    <div class="about container mx-auto">
        <h1>{{ $t('tabs.about') | capitalize }}</h1>
        <div class="row cv">
            <p class="col-12">{{ $t('about.presentation') }}</p>
            <div class="formation col-8 row cv-icons">
                <div class="justify-content-center text-center">
                    <img src="../assets/images/graphisme.png" alt="" class="icon-about">
                    <p class="title">{{ $t('about.cv.graphism') }}</p>
                    <p>Studio M</p>
                    <p>Montpellier</p>
                </div>
                <div class="justify-content-center text-center">
                    <img src="../assets/images/art.png" alt="" class="icon-about">
                    <p class="title">{{ $t('about.cv.dnap') }}</p>
                    <p>Beaux Arts</p>
                    <p>Avignon</p>
                </div>
                <div class="justify-content-center text-center">
                    <img src="../assets/images/design.png" alt="" class="icon-about">
                    <p class="title">{{ $t('about.cv.fines_arts_design') }}</p>
                    <p>{{ $t('about.cv.hight_school') }} <br>{{ $t('about.cv.of_art_and_design') }}</p>
                    <p>Marseille</p>
                </div>
                <div class="justify-content-center text-center">
                    <img src="../assets/images/developement.png" alt="" class="icon-about">
                    <p class="title">{{ $t('about.cv.certification') }}</p>
                    <p>{{ $t('about.cv.web_dev') }}</p>
                    <p>{{ $t('about.cv.code_ad') }}</p>
                    <p>Rennes</p>
                </div>
                <div class="justify-content-center text-center">
                    <img src="../assets/images/vue.png" alt="" class="icon-about">
                    <p class="title">{{ $t('about.cv.vue') }}</p>
                    <p>{{ $t('about.cv.plb') }}</p>
                    <p>Paris</p>
                </div>
            </div>
            <div class="row col-4">
                <div class="links col-12 d-flex justify-content-center align-items-center">
                    <div>
                    <p>{{ $t('about.download_text') }}</p>
                    <DownloadButton
                        class="button"
                        title='about.download'
                        icon='download'
                        url_download='../assets/files/cv-julien-baylac.pdf'>
                    </DownloadButton>
                    <p class="linkedin">{{ $t('about.linkedin_text') }}</p>
                    <BasicButton
                        class="button"
                        title='about.linked'
                        icon='linkedin'
                        url_href='https://www.linkedin.com/in/julien-baylac/'>
                    </BasicButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BasicButton from '@/components/buttons/BasicButton'
import DownloadButton from '@/components/buttons/DownloadButton'

export default {
    name: 'about',
    components: {
        BasicButton,
        DownloadButton
    }
}
</script>

<style lang='scss' scoped>
h1 {
    margin-top: 20px;
}
p {
    margin: 0;

}
.title {
    margin-top: 10px;
    font-weight: bold;
}
.formation {
    padding-left: 30px;
}
.icon-about {
    height: 100px;
}
.photo {
    justify-content: end;
    height: 300px;
}
.cv {
    justify-content: space-between;
    .cv-icons {
        margin-top: 20px;
        justify-content: space-between;
    }
}
.links {
    .button {
        margin-top: 3px;
    }
    .linkedin {
        margin-top: 15px;
    }
}
</style>