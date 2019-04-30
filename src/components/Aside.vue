<template>
  <div class="aside">
    <router-link to='/home'>
      <span class="title">Mr.Li</span>
    </router-link>
    <el-menu
      :default-openeds="['s']"
      default-active="ssurface"
      background-color="#130f40"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="ml in menulist">
        <el-submenu v-if="ml.children" :index="ml.path" :key="ml.path">
          <template slot="title">{{ml.name}}</template>
          <router-link v-for="(cml,cindex) in ml.children" :to="cml.path" :key="cindex">
            <el-menu-item :index="cml.path">{{cml.name}}</el-menu-item>
          </router-link>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menulist: [
        {
          name: "标准限值",
          path: "s",
          children: [
            { name: "地表水", path: "ssurface" },
            { name: "地下水", path: "sunder" }
          ]
        },
        {
          name: "数据分析",
          path: "a",
          children: [
            { name: "地表水", path: "surface" },
            { name: "地下水", path: "under" }
          ]
        }
      ]
    };
  }
};
</script>


<style scoped>
span {
  line-height: 60px;
  color: white;
  font-weight: bold;
}
a {
  text-decoration-line: none;
}
.aside {
  background-color: #130f40;
  height: 100vh;
  /* border-right: solid 1px #e6e6e6; */
}
/* .el-submenu,.el-menu-item,ul,li,.el-submenu__title{
  border: 0 !important;
  min-width: 0 !important;
  padding:0 !important;
  padding-inline-start: 0 !important;
  margin: 0 !important;
} */
ul {
  border: 0 !important;
  /* width :100px; */
}
div .el-submenu__title,
li .el-menu-item {
  margin: 0;
  padding: 0 !important;
  min-width: 0 !important;
  /* border-right: 0 !important; */
  /* height: 25px; */
  /* line-height: 25px; */
}
</style>
