<template>
  <section class="container">
    <div>
      <aHead/>
      <h1 class="title">
        NUXT
      </h1>
      <h2 class="subtitle">
        这是一个基于NUXT的SSR项目
      </h2>
    </div>
  </section>
</template>

<script>
import aHead from '~components/header.vue'

export default {
  components: {
    aHead
  }
}
</script>

<style lang="scss" scope>
body,html{
  width: 100%;
  height: 100%;
  overflow:hidden;
  overflow-y:visible;
}
.container{
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
