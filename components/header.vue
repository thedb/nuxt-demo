<template>
  <header class="header">
  	<img src="/images/header.gif" alt="" style="width:40%;">
    <div v-html="msg"></div>
    <nuxt-link class="nav" to="/about">主页</nuxt-link>
    <nuxt-link class="nav" to="/">工作任务</nuxt-link>
    <nuxt-link class="nav" to="/users">人员信息</nuxt-link>
    <nuxt-link class="nav" to="/works">工作信息</nuxt-link>
    <nuxt-link class="nav" to="/task">工作分配</nuxt-link>
    <nuxt-link class="nav" to="/upload">头像上传</nuxt-link>
  </header>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      msg: 'Nuxt-ssr'
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
  .nav{
    margin-left: 10px;
  }
}
</style>
