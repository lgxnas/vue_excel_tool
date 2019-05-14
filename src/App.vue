<template>
  <div id="app">
    <el-container>
      <!-- <el-aside> -->
              <!-- <el-aside width="130px">
        <Aside_lgx/>
      </el-aside> -->
      <el-container id="cright">
        
        <el-main>
          <router-view/>
        </el-main>
        <!-- <el-footer height="40px">Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside_lgx from "./components/Aside.vue"

export default {
  name: "app",
  components: {
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
body,
.el-main {
  margin: 0;
  padding: 0 !important;
}
.el-main{
  max-height: 100%;
}
#cright{
  max-height: 100vh;
}

</style>
