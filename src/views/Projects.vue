<template>
  <div class="">
<div class="page">
  <div class="cards-holder">
    <div class="card">
      <header class="card_header" data-background="https://images.unsplash.com/photo-1437422061949-f6efbde0a471?q=80&fm=jpg&w=1080&fit=max&s=b7a6c4b3f13802ca90978b676117aa09">
        <h2>Something cool</h2>
      </header>
      <section class="card_content">
        <h2>Some motivational sentence</h2>
        <p>Some Lorem ipsum dolor sit amet, tempore. Minus minima provident magnam nihil commodi explicabo doloribus accusantium earum.</p>
      </section>
    </div>

    <div class="card">
      <header class="card_header" data-background="https://images.unsplash.com/photo-1429734160945-4f85244d6a5a?dpr=2&fit=crop&fm=jpg&h=625&q=80&w=950">
        <h2>Something cool</h2>
      </header>
      <section class="card_content">
        <h2>Some motivational sentence</h2>
        <p>Some Lorem ipsum dolor sit amet, consectetur adipisicin tempore. Minus minima provident magnam nihil commodi explicabo doloribus accusantium earum.</p>
      </section>
    </div>

    <div class="card">
      <header class="card_header" data-background="https://images.unsplash.com/photo-1438109491414-7198515b166b?dpr=2&fit=crop&fm=jpg&h=650&q=80&w=950">
        <h2>Something cool</h2>
      </header>
      <section class="card_content">
        <h2>Some motivational sentence</h2>
        <p>Some Lorem ipsum dolor sit amet, consectetur adipisicing elit.magnam nihil commodi explicabo doloribus accusantium earum.</p>
      </section>
    </div>

    <div class="card">
      <header class="card_header" data-background="https://images.unsplash.com/photo-1434828927397-62ea053f7a35?dpr=2&fit=crop&fm=jpg&h=650&q=80&w=950">
        <h2>Something cool</h2>
      </header>
      <section class="card_content">
        <h2>Some motivational sentence</h2>
        <p>Some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim explicabo sint quas iste quaerat iusto quibusdam accusantium </p>
      </section>
    </div>

    <div class="card">
      <header class="card_header" data-background="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?dpr=2&fit=crop&fm=jpg&h=650&q=80&w=950">
        <h2>Something cool</h2>
      </header>
      <section class="card_content">
        <h2>Some motivational sentence</h2>
        <p>Some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem enim explicabo sint quas iste quaerat</p>
      </section>
    </div>
  </div>
</div>
  </div>
</template>

<script>
var cardLength = document.querySelectorAll('.card').length;
var cardHeader = document.querySelectorAll('.card_header');
for (var i = 0; i < cardLength; i++) {
  var cardHeaderUrl = cardHeader[i].getAttribute('data-background');
  cardHeader[i].style.background = 'url('+cardHeaderUrl+')no-repeat center center / cover';
}

import ProjectCard from '@/components/ProjectCard'

export default {
  name: 'projects',
  components: {
    ProjectCard
  }
}
</script>

<style lang='scss' scoped>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro);

$header-bg: #000;

:root {
  font:{
    size: 16px;
    weight: 300;
  }
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: greyscale;
  box-sizing: border-box;
}

html, body {
  float: left;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  background: #000;
  font-family: 'Source Sans Pro', helvetica Neue, sans-serif;
  font-variant-ligatures: common-ligatures; 
  font-weight: 300;
}
.page {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .cards-holder {
    display: flex;
    flex-direction: row;
    background: #181818;
    color: #fff;  
    position: relative;
    z-index: 3;
    height: 100%;
    float: left;
    padding: 1em 0;
    flex-wrap: wrap;


    .card {
      margin: 0 8px;
      background: #282828;
      padding: 8px;
      overflow: hidden;
      border-radius: 2px;
      cursor: pointer;
      flex-basis: calc(20% - 16px);

      @media all and (max-width: 680px) {
        flex-basis: calc(50% - 16px);
        margin-top: 8px;
      }


      header {
        background: lime;
        min-height: 20vw;
        position: relative;
        top: -20px;
        left: -8px;
        width: calc(100% + 16px);

        &:after,
        &:before{
          content: '';
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          background: #000;
          top: 0;
          left: 0;
          z-index: 0;
          opacity: 0.3;
        }

        &:before {
          content: 'Something cooler';
          font-size: 1rem;
          line-height: 20vw;
          z-index:2;
          display: none;
          background: rgba(#000, 0.6);
          opacity: 1;
          font-weight: bold;
        }

        text-align: center;

        h2 {
          font-size: 1rem;
          line-height: 20vw;
          position: relative;
          z-index: 1;
        }
      }
    
       transition: box-shadow .2s ease;
      &:hover {
        box-shadow: 0 0 0 1px rgba(darken(#2ED565, 5%), 0.4); 

        header:before {
          display: block !important;
          z-index: 3 !important;
        }
        header:after {
          display: none !important;
        }
        header h2 {
          visibility: hidden;
        }
      }

      &_content {
        max-height: 240px;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        top: -16px;

        h2 {
          font-size: 1rem;
          position: relative;
          z-index: 1;
          padding: 0;
          padding-bottom: .5rem;
          margin: 0;
        }

        p {
          color: #A0A0A0;
          font-weight: 400;
          font-size: 0.9rem;

          padding: 0;
          margin: .4rem 0;
        }
      }
    }
  } 
}
</style>