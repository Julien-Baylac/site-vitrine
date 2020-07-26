<template>
    <transition name="fade">
        <button type="button" id="scroll-top" class="btn btn-dark " v-show="visible" v-scroll-to="`#home`">
            <b-icon icon="arrow-up"></b-icon>
        </button>
    </transition>
</template>

<script>
export default {
    name: 'ScrollTop',
    data() {
    return {
            visible: false
        }
    },
  methods: {
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener(e) {
      this.visible = window.scrollY > 150
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollListener)
  }
}
</script>

<style lang='scss' scoped>
.btn {
    width: 50px;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
