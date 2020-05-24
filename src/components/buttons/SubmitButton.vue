<template>
    <b-button type="submit" variant="dark" class="submit-button">{{ $t('form.send') }}</b-button>
</template>

<script>
export default {
    name: 'submit-button'
}
</script>

<style lang="scss" scoped>
button{
  padding: 10px 40px;
  background: #343a40;
  border:0;
  color: #fff;
  text-transform: uppercase;
  font-family: helvetica;
  font-size: 10px;
  letter-spacing: 3px;
  position: relative;
  transition:         all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  display: block;
}

button::after,
button::before{
  content: "";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
    opacity: 0;
  transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

button::after{
    width: 30px;
    height: 1px;
    background: white;
    transform: translateX(-3px);
    margin-top: -0,8px;
}

button::before{
    content: "";
    transform: rotate(-135deg) translateX(50%);
    width: 9.4px;
    height: 9.4px;
    background: transparent;
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    margin-top: -1px;
}


button:hover{
  padding: 10px 60px 10px 20px;
}

button:hover::after,
button:hover::before{
  opacity: 1;
  right: 15px;
}
</style>