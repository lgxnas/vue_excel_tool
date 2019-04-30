<template>
   <Header :title="title" />
</template>
<script>
import Header from "../components/Header"
export default {
   data(){
      return {title:"地下水分析"}
   },
   components:{Header}
}
</script>
