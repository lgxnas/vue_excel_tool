<template>
   <Header :title="title" :dw="dw"/>
</template>
<script>
import Header from "../components/Header"
export default {
   data(){
      return {title:"地表水分析",
      dw:'单位:粪大肠菌群:个/L、水温:℃、pH:无量纲、其它:mg/L'}
   },
   components:{Header}
}
</script>