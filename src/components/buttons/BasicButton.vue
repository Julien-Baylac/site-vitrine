<template>
<div>
    <b-button 
      variant="dark" 
      class="submit-button"
      :href='url_href'
      target="_blank">
      {{ $t(`${this.title}`) }} 
      <i :class='icon_url'></i>
    </b-button>
</div>

</template>

<script>
export default {
    name: 'basic-button',
    props: {
      title: String,
      icon: String,
      url_href: String
    },
    computed: {
      icon_url() {
        return `fa fa-${this.icon} icon`
      }
    }
}
</script>

<style lang="scss" scoped>
button{
  margin-right: 5px;
  padding: 10px 20px;
  background: #343a40;
  border: 0;
  color: #fff;
  text-transform: capitalize;
  font-family: helvetica;
  font-size: 12px;
  position: relative;
  transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  display: block;
  .icon {
    margin-left: 8px;
  }
}
</style>