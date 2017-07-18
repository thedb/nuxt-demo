<template>
  <section class="login">
    <div class="loginContainer">
      <p>
        登陆
      </p>
      <input type="text" name="name" value="" placeholder="账号" v-model="account">
      <input type="text" name="name" value="" placeholder="密码" v-model="pwd">
      <button type="button" name="button">确认</button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      account: '',
      pwd: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.login{
  position: fixed;
	width: 100%;
  height: 100%;
	position: absolute;
	left: 0;
	top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  text-align: center;
  .loginContainer{
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
