<template>
    <div class="page-product">

       <el-row class="m-crumbs">
           <crumb/>
       </el-row>

       <el-row>
           <el-col :span ='19'>
              <el-row>
                   <categroy/>
              </el-row>
               <el-row>
                   <list/>
               </el-row>
           </el-col>
           <el-col :span="5">
                map+fav
           </el-col>
       </el-row>
    </div>  
</template>

<script>

import crumb from '@/components/products/crumb.vue'
import categroy  from '@/components/products/categroy.vue'
import  list from  '@/components/products/list.vue'
export default {
    components:{
        crumb,
        categroy,
        list
    }
}
</script>

<style lang='scss'>
  @import '@/assets/css/products/index.scss';
</style>