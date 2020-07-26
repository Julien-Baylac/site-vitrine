<template>
<div>
    <b-button 
      type="download" 
      variant="dark" 
      class="download-button"
      @click="downloadFile">
      {{ $t(`${this.title}`) }} 
      <i :class='icon_url'></i>
    </b-button>
</div>

</template>

<script>
import axios from 'axios'

export default {
    name: 'basic-button',
    props: {
      title: String,
      icon: String,
      url_download: String
    },
    computed: {
      icon_url() {
        return `fa fa-${this.icon} icon`
      }
    },
    methods: {
      downloadFile(){
        axios({
          method: 'get',
          url: './files/cv-julien-baylac.pdf',
          responseType: 'arraybuffer'
        })
        .then(response => {
          this.forceFileDownload(response)
          this.$store.commit('display_alert', {type: 'success', message: 'Le CV a bien été téléchargé'})
        })
        .catch(() => {
            this.$store.commit('display_alert', {type: 'danger', message: 'Le CV n\'a pas pu être téléchargé'})
          }
        )
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