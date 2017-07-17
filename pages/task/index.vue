<template>
  <div class="add">
    <aHead/>
    <h1 v-html="msg"></h1>
    <div>
      <span>选择员工：</span>
      <select v-model="userName">
          <option disabled value="">请选择</option>
          <option v-for="(v,k) in userInfo" v-bind:value="userInfo[k].id">{{userInfo[k].name}}</option>
      </select>
    </div>
    <div>
      <span>选择工作：</span>
      <select v-model="userWork">
          <option disabled value="">请选择</option>
          <option v-for="(v,k) in workInfo" v-bind:value="workInfo[k].id">{{workInfo[k].work}}</option>
      </select>
    </div>
    <div class="submint" @click="addUsers">提交</div>
  </div>
</template>

<script>
import aHead from '~components/header.vue'
import $axios from 'axios'
export default {
  name: 'add',
  data () {
    return {
      msg: 'front-end<br>工作分配',
      userInfo: false,
      workInfo: false,
      userName: '',
      userWork: ''
    }
  },
  created () {
    $axios({
      method: 'post',
      url: '/api',
      data: {
        'action': 'find_work'
      }
    })
    .then((res) => {
      let result = res.data
      this.workInfo = result.data
      // console.log(this.workInfo)
    })

    $axios({
      method: 'post',
      url: '/api',
      data: {
        'action': 'find_name'
      }
    })
    .then((res) => {
      let result = res.data
      this.userInfo = result.data
      // console.log(this.workInfo)
      // this.userInfo = result.data
    })
  },
  methods: {
    addUsers () {
      // console.log(this.userName)
      // console.log(this.userWork)
      $axios({
        method: 'post',
        url: '/api',
        data: {
          'action': 'set_task',
          'name': parseInt(this.userName),
          'work': parseInt(this.userWork)
        }
      })
      .then((res) => {
        // let result = res.data
        if (parseInt(res.data.result) === 1) {
          alert('分配成功')
        } else {
          console.log(res.data)
        }
      }).catch(e => {
        console.log(e)
      })
    }
  },
  components: {
    aHead
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
body,html{
  width: 100%;
  height: 100%;
  overflow:hidden;
  overflow-y:visible;
}
.add{
  width: 100%;
  padding-top: 26%;
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.add{
  .submint{
    margin:0 auto;
    padding:10px;
    border:1px solid #ddd;
    width:100px;
    margin-top :30px;
    cursor:pointer;
  }
}
</style>
