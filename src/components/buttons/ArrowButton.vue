<template>
    <a href="" class="underline">
        <span>{{ $t('see_more') | capitalize }}</span>
        <svg viewBox="0 0 13 20"><polyline points="0.5 19.5 3 19.5 12.5 10 3 0.5" /></svg>
    </a>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.underline {
    --line: #646B8C;
    --color: #2B3044;
    text-decoration: none;
    color: var(--color);
    position: relative;
    span {
        background-image: linear-gradient(0deg, var(--line) 0%, var(--line) 100%);
        background-position: 100% 100%;
        background-repeat: no-repeat;
        background-size: var(--background-size, 100%) 1px;
        transition: background-size .2s linear var(--background-delay, .15s);
        font-size: 16px;
        line-height: 20px;
        transform: translateZ(0);
    }
    svg {
        vertical-align: top;
        display: inline;
        line-height: 1;
        width: 13px;
        height: 23px;
        position: relative;
        left: -2px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1px;
        stroke: var(--line);
        stroke-dasharray: 7.95 30;
        stroke-dashoffset: var(--stroke-dashoffset, 46);
        transition: stroke-dashoffset var(--stroke-duration, .15s) var(--stroke-easing, linear) var(--stroke-delay, 0s);
    }
    &:hover {
        --background-size: 0%;
        --background-delay: 0s;
        --stroke-dashoffset: 26;
        --stroke-duration: .3s;
        --stroke-easing: cubic-bezier(.3, 1.5, .5, 1);
        --stroke-delay: .195s;
    }
}

html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

* {
    box-sizing: inherit;
    &:before,
    &:after {
        box-sizing: inherit;
    }
}

// Center & dribbble
body {
    min-height: 100vh;
    display: flex;
    font-family: 'Inter', Arial;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #F6F8FF;
    .underline {
        width: 140px;
        margin: 16px 0;
    }
    .dribbble {
        position: fixed;
        display: block;
        right: 20px;
        bottom: 20px;
        img {
            display: block;
            height: 28px;
        }
    }
    .twitter {
        position: fixed;
        display: block;
        right: 64px;
        bottom: 14px;
        svg {
            width: 32px;
            height: 32px;
            fill: #1da1f2;
        }
    }
}
</style>