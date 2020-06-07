<template>
    <div class="project-card">
        <a :href="link" target="_blank" rel="dofollow">
        <div class="card-cover" v-bind:style="project_card_style">
          <div class="card">
        </div>
        <p>{{ $t(project_name) | capitalize }}</p>
        </div>
        </a>
    </div>
</template>

<script>
export default {
  name: 'project-card',
  props: {
    link: String,
    title: String,
    type: String,
    url_image: String
  },
  computed: {
    project_card_style() {
      return 'background-image: url(\'../assets/images/' + `${this.title}` + '.png\')'
    },
    project_name() {
      return `projects.${this.title}.name`
    }
  } 
} 
</script>

<style lang='scss' scoped>
$card-height: 250px;
$text-color: white;
$background-color: rgba(0,0,0,0.50);
$font: raleway;

.card-cover{
  // background: url('../assets/images/cao.png');
  height: $card-height;
  background-size:cover;
  position:relative;
  transition:0.4s;
  transition-timing-function:ease-out;
  backface-visibility:hidden;
  .card{
    height: $card-height;
    background: $background-color;
  }
  .card + p{
    color: $text-color;
    text-decoration:none !important;
    position:absolute;
    bottom:0px;
    right:15px;
    z-index:6;
    font-family: $font;
    font-size:20px;
    letter-spacing:0.8px;
    font-variant:small-caps;
    transition:0.4s;
    transition-timing-function:ease-out;
    backface-visibility:hidden;
  }
}
.card-cover:after{
  content:"";
  width:0px;
  height:1px;
  background: $text-color;
  position:absolute;
  bottom:15px;
  right:15px;
  opacity:0.8;
  transition:0.4s;
  transition-timing-function:ease-out;
  backface-visibility:hidden;
}
.card-cover:hover:after{
  width:100px;
  bottom:30px;
  opacity:1;
  transition:0.4s;
  transition-timing-function:ease-out;
  backface-visibility:hidden;
}
.card-cover:hover{
  background-position:-25px;
  transition:0.4s;
  transition-timing-function:ease-out;
  backface-visibility:hidden;
}
.card-cover:hover p{
  bottom:15px;
  transition:0.4s;
  transition-timing-function:ease-out;
  backface-visibility:hidden;
}
</style>