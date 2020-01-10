<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li v-for="(item,index) in NavList" :key="index">
          <router-link to="/" class>{{item}}</router-link>
        </li>
      </ul>
    </el-row>
    <router-link to="/">
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          </h4>
          <p class="m-life-login-name">Hi! 您好</p>
          <p>
            <router-link :to="{name:'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link :to="{name:'login'}">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </router-link>
    <el-row>
      <el-col :span="7">
          <div class="m-life-hotel"></div>
      </el-col>
      <el-col :span="7">
          <div class="m-life-music"></div>
      </el-col>
      <el-col :span="4">
            <div class="m-life-coop"></div>
      </el-col>
      <el-col :span="6">
          <div class="m-life-downapp">
              <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
              <p>美团App手机版</p>
              <p class="last-p">
                  <span class="red">
                      1元起 吃喝玩乐
                  </span>
              </p>
          </div>
      </el-col>
    </el-row>
  </div>
</template> 

<script>
import Slider from "./slider.vue";
export default {
  components: {
    Slider
  },
  data() {
    return {
      NavList: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿公寓",
        "商家入住",
        "美团公益"
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/life.scss";
</style>