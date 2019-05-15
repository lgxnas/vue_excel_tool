<template>
   <div>
          <el-container >
      <el-aside width="130px" class="noPrint">
        <Aside_lgx/>
      </el-aside>

    <el-container>
    <el-main>
   <Header :title="title" :dw="dw"/>
   {{t}}
   <button @click="lgx">test</button>
   <el-input></el-input>
       </el-main>
    </el-container>
    </el-container>
   </div>
</template>
<script>
import Header from "../components/Header"
import Aside_lgx from "../components/Aside.vue"
// import {test} from './lgx.js'
export default {
   data(){
      return {title:"地表水分析",
      dw:'单位:粪大肠菌群:个/L、水温:℃、pH:无量纲、其它:mg/L',
      t:0
      }
   },
   components:{Header,Aside_lgx},
   methods:{
      lgx(){
         // this.t=test(1,2)

      }
   }
   
}
</script>