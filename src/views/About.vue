<template>
    <div class="about container mx-auto">
        <h1>{{ $t('tabs.about') | capitalize }}</h1>
        <div class="row cv">
            <p class="presentation">{{ $t('about.presentation') }}</p>

            <div class="formations cv-icons">
                <div class="formation row">
                    <img src="../assets/images/graphisme.png" alt="" class="icon-about">
                    <div class="formation-details">
                        <p class="title">{{ $t('about.cv.graphism') }}</p>
                        <p>Studio M</p>
                        <p>Montpellier</p>
                    </div>
                </div>
                <div class="formation row">
                    <img src="../assets/images/design.png" alt="" class="icon-about">
                    <div class="formation-details">
                        <p class="title">{{ $t('about.cv.fines_arts_design') }}</p>
                        <p>{{ $t('about.cv.hight_school') }} <br>{{ $t('about.cv.of_art_and_design') }}</p>
                        <p>Marseille</p>
                    </div>
                </div>
                <div class="formation row">
                    <img src="../assets/images/art.png" alt="" class="icon-about">
                    <div class="formation-details">
                        <p class="title">{{ $t('about.cv.dnap') }}</p>
                        <p>Beaux Arts</p>
                        <p>Avignon</p>
                    </div>
                </div>
            </div>

            <div class="cv-icons">
                <div class="formation row">
                    <img src="../assets/images/developement.png" alt="" class="icon-about">
                    <div class="formation-details">
                        <p class="title">{{ $t('about.cv.certification') }}</p>
                        <p>{{ $t('about.cv.web_dev') }}</p>
                        <p>{{ $t('about.cv.code_ad') }}</p>
                        <p>Rennes</p>
                    </div>
                </div>
                <div class="formation row">
                    <img src="../assets/images/vue.png" alt="" class="icon-about">
                    <div class="formation-details">
                        <p class="title">{{ $t('about.cv.vue') }}</p>
                        <p>{{ $t('about.cv.plb') }}</p>
                        <p>Paris</p>
                    </div>
                </div>
                <div class="formation row">
                    <img src="../assets/images/istqb.png" alt="" class="icon-about">
                    <div class="formation-details">
                        <p class="title">{{ $t('about.cv.istqb') }}</p>
                        <p>Testeur Logiciel</p>
                        <p class="istqb-text">
                          (
                          <a href="https://www.istqb.org/certification-path-root/why-istqb-certification.html" target="_blank">International Software Testing Qualifications Board</a>
                          )
                        </p>
                        <p>{{ $t('about.cv.m2i') }}</p>
                    </div>
                </div>
            </div>
            <div class="about-right-div">
                <div class="links">
                      <div>
                          <p>{{ $t('about.download_text') }}</p>
                          <DownloadButton
                              class="button"
                              title='about.download'
                              icon='download'
                              url_download='../assets/files/cv-julien-baylac.pdf'>
                          </DownloadButton>
                      </div>
                      <div>
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
.presentation {
  margin: 20px;
}
.title {
    margin-top: 10px;
    font-weight: bold;
}
.icon-about {
    height: 100px;
}
.photo {
    justify-content: end;
    height: 300px;
}
.cv {
    .formation {
        min-width: 320px;
        margin-top: 5px;
    }
    .cv-icons {
        margin-left: 30px;
        margin-top: 20px;
        .formation-details {
          margin-left: 7px;
        }
    }
    .istqb-text {
        font-size: 12px;
        a {
            color: grey !important;
        }
    }
}
.links {
    margin-top: 95px;
    margin-left: 100px;
    .button {
        margin-top: 3px;
    }
    .linkedin {
        margin-top: 15px;
    }
}
@media screen and (max-width: 1024px) {
    .about-right-div {
      display: none;
    }
}

</style>