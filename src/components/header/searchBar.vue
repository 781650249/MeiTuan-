<template>
    <div class="search-Bar">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>   

            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur"  @input="input"></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in hotPlaceList" :key="index" >
                            <router-link :to="{name:'goods',params:{name:item}}">{{ item }}</router-link>
                        </dd>
                    </dl>
                      <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item,index) in searchList" :key="index">
                            <router-link :to="{name:'goods',params:{name:item}}">{{ item }}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item,index) in hotPlaceList" :key="index">{{ item }}</a>
                   
                </p>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index.js';
export default {
    data(){
        return {
            searchWord:'',
            isFocus:false,
            hotPlaceList:[],
            searchList:[],
        }
    },

    created(){
        api.searchHotWords().then(res=>{
            console.log(res);
            this.hotPlaceList =  res.data.data;
            this.suggestList = res.data.data
        })
    },
    computed:{
      isHotPlace:function(){
          return this.isFocus && !this.searchWord //聚焦时显示搜索热门，不聚焦不显示
      },
      isSearchList:function(){
            return this.isFocus && this.searchWord  //有搜索内容并且在聚焦时显现搜索内容
      }
    },
    methods:{
        focus(){
            this.isFocus = true;
        },
        blur(){ 
           setTimeout(()=>{
                this.isFocus = false
           },1000)  //此处有个问题，输入内容点击跳转时，会先失焦，此时搜索框内容就不存在，这时需要让它慢几秒失焦
        },
        input(){
            console.log(this.searchWord);
            let  val = this.searchWord
            api.getSearchList().then(res =>{
                this.searchList = res.data.data.list.filter((item,index)=>{
                    return item.indexOf(val) > -1;
                })
            })
        }
    }

}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/search.scss'
</style>