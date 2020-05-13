<template>
  <div>
    <div class='demo'>
    <div class='circle'>
        <div class='inner'></div>
    </div>
    <div class='circle'>
        <div class='inner'></div>
    </div>
    <div class='circle'>
        <div class='inner'></div>
    </div>
    <div class='circle'>
        <div class='inner'></div>
    </div>
    <div class='circle'>
        <div class='inner'></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>

$ncirc: 2
$color: #0fa
$font-stack: 'Lato', sans-serif

a
  position: fixed
  bottom: 2%
  display: block
  text-align: center
  color: $color
  font-family: $font-stack
  text-decoration: none !important
  width: 100%

darken($color, 8%))
  box-shadow: inset 0px 0px 90px rgba(0, 0, 0, 0.5)
  margin: 0px
  padding: 0px

.demo
  width: 100px
  height: 102px
  border-radius: 100%
  position: absolute
  top: 45%
  left: calc(50% - 50px)
    
.circle
  width: 100%
  height: 100%
  position: absolute
  .inner
    width: 100%
    height: 100%
    border-radius: 100%
    border: 5px solid transparentize($color, 0.3)
    border-right: none
    border-top: none
    backgroudn-clip: padding
    box-shadow: inset 0px 0px 10px transparentize($color, 0.85)
    
@keyframes spin
  from
    transform: rotate(0deg)
  to
    transform: rotate(360deg)
      
@for $i from 0 through $ncirc  
  .circle:nth-of-type(#{$i})
    transform: rotate($i * 70deg)
    .inner
      animation: spin 2s infinite linear
        
.demo
  animation: spin 5s infinite linear
</style>