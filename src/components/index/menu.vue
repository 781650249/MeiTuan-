<template>
  <div class="m-menu">
    <dl class="nav"  @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="mouseEnter(item)">
        <i  :class="item.icon"></i>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div v-if="curDetail" class="detail" @mouseenter="detailEnter"  @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.children"> 
       <h4 :key="index">{{item.title}}</h4>
       <span v-for="(v,i) in  item.children" :key="v +'_'+ i">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data(){
    return {
      curDetail:null,
      menuList:[
        {
        title:'美食',
        icon:'food',
        children:[{ 
          title:'美食',
          children:['代金券','甜点饮品','火锅自 助餐','小吃快餐','日韩料理','聚餐宴请','烧烤烤肉','西餐']
        }]
      },{
        title:'外卖',
        icon:'takeout',
        children:[{ 
          title:'外卖',
          children:['美团外卖']
        }]
      },{
        title:'酒店',
        icon:'hotel',
        children:[{ 
          title:'酒店星级',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
        {
        title:'榛果民宿',
        icon:'homestay',
        children:[{ 
          title:'榛果民宿',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'猫眼电影',
        icon:'movie',
        children:[{ 
          title:'猫眼电影',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'机票/火车票',
        icon:'airport',
        children:[{ 
          title:'机票/火车票',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }] },
      {
        title:'休闲娱乐/ktv',
        icon:'ktv',
        children:[{ 
          title:'休闲娱乐/ktv',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'生活服务',
        icon:'life',
        children:[{ 
          title:'生活服务',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
        {
        title:'丽人/美发/医学美容',
        icon:'hair',
        children:[{ 
          title:'酒店星级',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
        {
        title:'结婚/婚纱/摄影',
        icon:'marry',
        children:[{ 
          title:'酒店星级',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'亲子/儿童乐园/幼教',
        icon:'offspring',
        children:[{ 
          title:'亲子/儿童乐园/幼教',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'运动健身/健身中心',
        icon:'sport',
        children:[{ 
          title:'运动健身/健身中心',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'家装/建材/家居',
        icon:'furniture',
        children:[{ 
          title:'家装/建材/家居',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'学习培训/音乐培训',
        icon:'study',
        children:[{ 
          title:'学习培训/音乐培训',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'医疗健康/宠物/爱车',
        icon:'health',
        children:[{ 
          title:'医疗健康/宠物/爱车',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      {
        title:'酒吧/密室逃脱',
        icon:'bar',
        children:[{ 
          title:'酒吧/密室逃脱',
          children:['经济型','舒适/三星','高档/四星','豪华/五星']
        }]},
      ]
    }
  },
  created(){
    // api.getMenuList().then(res=>{
    //    this.menuList = res.data.data  //children 都改成items，title都改成name
    // })
  },
  methods:{
  mouseEnter(item){
    this.curDetail = item; //此处获取到了所有的数据
  },
  menuLeave(){
       this.timer=setTimeout(()=>{
        this.curDetail = null; //移不到二级导航里去
    },200)
  
  },
  detailEnter(){
    clearTimeout(this.timer) //清楚定时器来让鼠标移除一级导航时，二级导航不会消失
  },
  detailLeave(){
     this.curDetail = null
  }
  }
};
</script>
 
<style>
</style>