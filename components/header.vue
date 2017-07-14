<template>
  <header class="header">
  	<img src="/images/header.gif" alt="" style="width:40%;">
    <div v-html="msg"></div>
    <nuxt-link to="/">主页</nuxt-link>
    <nuxt-link to="/about">about</nuxt-link>
  </header>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      msg: 'front-end<br>工作分配'
    }
  }
}
</script>

<style lang="scss">
.header{
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
}
</style>
