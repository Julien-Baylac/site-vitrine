<template>
    <b-button 
      type="submit" 
      variant="dark" 
      class="submit-button"
      @click="$emit('type', type)">
      {{ $t(`projects_types.${this.title}`) }}
    </b-button>
</template>

<script>
export default {
    name: 'basic-button',
    props: {
      title: String,
      type: String
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
  font-size: 11px;
  position: relative;
  transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  display: block;
}
</style>