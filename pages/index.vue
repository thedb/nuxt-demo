<template>
  <section class="container">
    <aHead/>
    <button type="button" name="button" @click="changeLanguage">中英文切换</button>
    <p v-show="hasNoWork">
      {{use.about.about}}:{{hasNoWork.length == 0 ? '无' : hasNoWork}}
    </p>
    <div class="Container">
      <div class="listHead">
        <!-- <span class="headImage">头像</span> -->
        <!-- <span>姓名</span> -->
        <span>{{use.about.name}}</span>
        <span v-for="(v,k) in workInfo" v-html="workInfo[k].work"></span>
      </div>
      <div class="listContainer">
        <div class="listContent" v-for="(v,k) in userInfo">
          <!-- <span class="headImage"><img style="width:100%" :src="userInfo[k].head_img" alt="" /></span> -->
          <span v-html="userInfo[k].name"></span>
          <span v-for="(val,key) in showLiST(v.work,workInfo)" :class="{hasWork:val}" >{{ }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aHead from '~components/header.vue'
import language from '~assets/js/language.js'
import $axios from 'axios'

export default {
  data () {
    return {
      userInfo: false,
      workInfo: false,
      hasNoWork: false,
      langChina: true
    };
  },
  computed: {
    use () {
      return this.langChina === true ? language.chinese : language.english
    }
  },
  created () {
    $axios({
      method: 'post',
      url: '/api',
      data: {
        'action': 'find_all'
      }
    })
    .then((res) => {
      let result = res.data;
      this.userInfo = result.data;
      this.hasNoWork = result.other;
    });

    $axios({
      method: 'post',
      url: '/api',
      data: {
        'action': 'find_work'
      }
    })
    .then((res) => {
      let result = res.data;
      // console.log(result)
      this.workInfo = result.data;
    });
  },
  methods: {
    changeLanguage () {
      this.langChina = !this.langChina;
    },
    showLiST (work, workInfo) {
      var arr = [].slice.call(workInfo);
      var _work = [].slice.call(work);
      return arr.map((val, i) => {
        for (let i = 0; i < _work.length; i++) {
          if (val.work === _work[i]) {
            return true;
          }
        }
      });
    }
  },
  components: {
    aHead
  }
}
</script>

<style lang="scss" scoped>
body,html{
  width: 100%;
  height: 100%;
  overflow:hidden;
  overflow-y:visible;
}
.container{
  width: 100%;
  padding-top: 26%;
  position: relative;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.Container{
  width:100%;
  display: flex;
  flex-direction:row;
  justify-content:center;
  margin-bottom: 50px;
  overflow: hidden;
  overflow-x: visible;
  span{
    display:inline-block;
    width:120px;
    height:40px;
    font-size: 20px;
    line-height: 40px;
    border:1px solid #ddd;
  }
  .headImage{
    height: 120px;
    line-height: 120px;
  }
}
.listHead{
  display: flex;
  flex-direction:column;
}
.listContainer{
  display: flex;
  flex-direction:row;
  .listContent{
    display: flex;
    flex-direction:column;
  }
}
.hasWork{
  background:red;
}
</style>
