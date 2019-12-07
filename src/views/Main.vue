<template>
    <div class="main-view">
        <Navbar class="navbar"></Navbar>
        <router-view class="router-view"></router-view>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
    name:'main-view',
    components: {
        Navbar
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    padding-top: 5px;
    padding-left: 20px;
}
.router-view {
    padding: 20px;
}
</style>