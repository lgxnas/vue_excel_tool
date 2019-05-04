<template>
   <div>
   <Header :title="title" :dw="dw"/>
   {{t}}
   <button @click="lgx">test</button>
   </div>
</template>
<script>
import Header from "../components/Header"
import {test} from './lgx.js'
export default {
   data(){
      return {title:"地表水分析",
      dw:'单位:粪大肠菌群:个/L、水温:℃、pH:无量纲、其它:mg/L',
      t:0
      }
   },
   components:{Header},
   methods:{
      lgx(){
         this.t=test(1,2)

      }
   }
   
}
</script>