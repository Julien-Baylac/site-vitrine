<template>
    <div class="home d-flex justify-content-center">
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <br/>
            <div class="d-flex justify-content-center">
                <ScrollDownButton class="position-absolute" style="bottom: 5%;" href='#projects'/>
            </div>
        </div>
    </div>
</template>

<script>
import ScrollDownButton from '@/components/buttons/ScrollDownButton'
export default {
    name: 'home',
    components: {
        ScrollDownButton
    }
}
</script>

<style lang="scss" scoped>
@import '@/utils/scss/_colors.scss';

.home {
  background-color: #fafafa;
  height: calc(100vh - 45px);
  .jumbotron {
      background-color: transparent;;
  }
}
</style>
