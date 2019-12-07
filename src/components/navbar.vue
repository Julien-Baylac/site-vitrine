<template>
  <vk-navbar-dropbar mode='push'>
    <vk-navbar transparent>
      <vk-navbar-nav>
        <vk-navbar-nav-dropdown title="Home">
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item title="Home" active></vk-nav-item>
            <router-link to="/"><vk-nav-item title="home" class="link"></vk-nav-item></router-link>
            <vk-nav-item-divider></vk-nav-item-divider>
            <vk-nav-item href='#' title="Mention légale"></vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        <vk-navbar-nav-dropdown title="About">
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item title="About" active></vk-nav-item>
            <router-link to="/about"><vk-nav-item title="about"></vk-nav-item></router-link>
            <vk-nav-item-header title="Header"></vk-nav-item-header>
            <vk-nav-item title="Item"></vk-nav-item>
            <vk-nav-item title="Item"></vk-nav-item>
            <vk-nav-item-divider></vk-nav-item-divider>
            <vk-nav-item title="Item"></vk-nav-item>
          </vk-navbar-nav-dropdown-nav>
          <vk-navbar-nav-dropdown-nav>
            <vk-nav-item title="Contact" active></vk-nav-item>
            <router-link to="/contact"><vk-nav-item title="contact"></vk-nav-item></router-link>
          </vk-navbar-nav-dropdown-nav>
        </vk-navbar-nav-dropdown>
        </vk-navbar-nav>
    </vk-navbar>
  </vk-navbar-dropbar>
</template>

<script>
export default {
  name: 'navbar',
  components : {
  }
}
</script>

<style lang="scss" scoped>
a {
  :hover {
    color: black;
  }
  color: grey;
  text-decoration: none !important;
}
.transparent {
  background-color: transparent
}
</style>