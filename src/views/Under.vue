<template>
  <div>
    <Header :title="title" :dw="dw" @transferJson="getJson"/>
    {{dxsjson}}
  </div>
</template>
<script>
import Header from "../components/Header";

export default {
  data() {
    return { title: "地下水分析",
    dxsjson:'',
    dw: "单位:总大肠菌群:MPN/100mL、水温:℃、pH:无量纲、其它:mg/L",
    };
  },
  components: { Header },
  methods: {
     getJson(msg){
      this.dxsjson=msg;
      console.log(this.dxsjson)
   }
  }
};
</script>