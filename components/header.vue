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
    <button class="nav" @click="haslogin = !haslogin">登陆</button>
    <section class="login" v-if="haslogin">
      <div class="loginContainer">
        <p>
          登陆
        </p>
        <input type="text" name="name" value="" placeholder="账号" v-model="account">
        <input type="text" name="name" value="" placeholder="密码" v-model="pwd">
        <button type="button" name="button" @click="sendUserInfo">确认</button>
      </div>
    </section>
  </header>
</template>

<script>
import $axios from 'axios'
export default {
  name: 'header',
  data () {
    return {
      msg: 'Nuxt-ssr',
      haslogin: false,
      account: '',
      pwd: ''
    }
  },
  methods: {
    sendUserInfo () {
      $axios({
        method: 'post',
        // url: '/login',
        url: 'http://10.146.66.46:3001/login',
        data: {
          'account': this.account,
          'password': this.pwd
        }
      })
      .then((res) => {
        if (parseInt(res.data.result) === 1) {
          alert('添加成功')
        } else {
          console.log(res.data)
        }
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
	width: 100%;
	position: absolute;
	left: 0;
	top: 0;
  .nav{
    margin-left: 10px;
  }
}
.login{
	position: absolute;
	top: 0;
  right: 7%;
  bottom: 0;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  text-align: center;
  .loginContainer{
    position: absolute;
    right: 0;
    // width: 400px;
    // height: 300px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
