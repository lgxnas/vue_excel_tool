<template>
<div class="aside">
    <span class="title">Xlsx Extend</span>
    <el-menu :default-openeds="['1', '2']">
      <el-submenu index="1">
        <template slot="title">标准查询</template>
        <el-menu-item-group>
          <el-menu-item index="1-1">地表水</el-menu-item>
          <el-menu-item index="1-2">地下水</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">数据分析</template>
        <el-menu-item-group>
          <el-menu-item index="2-1">地表水</el-menu-item>
          <el-menu-item index="2-2">地下水</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</div>
</template>

<style>
span{
    line-height: 60px;
}

</style>
