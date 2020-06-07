<template>
    <div class="home d-flex justify-content-center">
        <div class="jumbotron">
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
