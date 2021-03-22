<template>
    <div class="home d-flex justify-content-center container">
        <div class="d-flex justify-content-center align-middle">
          <div>
            <!-- Title -->  
            <div class="title">
              <div class="first-title">Artist <br> website <br> developer</div>
              <div class="second-title">Help in the creation <br> of digital artwork</div>
            </div>
            <div class="spacer">
              <div class="d-flex">
                <p>About</p>
                <div class="line"><hr></div> 
              </div>
                <p>Utque aegrum corpus quassari etiam levibus solet offensis, ita animus eius angustus et tener, 
                  quicquid increpuisset, ad salutis suae dispendium existimans factum aut cogitatum, insontium caedibus
                  fecit victoriam luctuosam.
                </p>
                  <ArrowButton 
                      title='azeazeazea '
                      path='aze'
                      class="project-link">
                  </ArrowButton>
                  <ArrowButton 
                      title='eaz'
                      path='aze'
                      class="project-link m-3">
                  </ArrowButton>
            </div>
          </div>
            <!-- Scroll down -->
            <ScrollDownButton class="position-absolute" style="bottom: 5%;" href='#projects'/>
        </div>
    </div>
</template>

<script>
import ScrollDownButton from '@/components/buttons/ScrollDownButton'
import ArrowButton from '@/components/buttons/ArrowButton'

export default {
    name: 'home',
    components: {
        ScrollDownButton,
        ArrowButton
    }
}
</script>

<style lang="scss" scoped>
@import '@/utils/scss/_colors.scss';

$total-height: calc(100vh - 45px);
.home {
  height: $total-height;
  .title {
    color: $black;
    font-size: 3em;
    line-height: 90%;
    margin-bottom: 40px;
    .first-title {
      margin-top:  calc((100vh - 45px) / 7);
    }
    .second-title {
      padding-left: 150px;
      margin-top: 20px;
    }
  }
  .spacer {
    padding-left: 150px;
  }
  .line {
    border-top: 1px solid $black;
    width : 100%; 
    margin-top: 11px;
    margin-left: 20px;
  }
}

</style>
