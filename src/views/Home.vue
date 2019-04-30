<template>
  <Header :title="title" />
  
</template>

<script>
import Header from "../components/Header";
export default {
  name: "HelloWorld",
  data() {
    return { title: "个人扩展应用，未经测试，不保证质量" };
  },
  components: { Header }
  // props: {
  //   msg: String
  //  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
