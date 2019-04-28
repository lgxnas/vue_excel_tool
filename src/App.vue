<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="200px">
        <Aside_lgx/>
      </el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import Header_lgx from "./components/Header.vue";
import Aside_lgx from "./components/Aside.vue";

export default {
  name: "app",
  components: {
    // Header_lgx,
    Aside_lgx
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html,
body {
  margin: 0;
  padding: 0;
}
/* .el-header,.el-aside{
  background-color: rgba(47, 53, 66,1.0);
  color:white;
  font-weight: bold;
} */
.el-container{

}
</style>
