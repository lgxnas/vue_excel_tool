<template>
  <div id="under">
    <el-container >
      <el-aside width="130px" class="noPrint">
        <Aside_lgx/>
      </el-aside>

    <el-container>
    <el-main>
    <Header :title="title" :dw="dw" @transferJson="getJson" url="https://gitee.com/suplxc/vue_excel_tool/raw/djpad/xlsx/地下水模版.xlsx"/>
    <el-row style="text-align:left;color:red;font-weight: bold;">
    <!-- <span style="text-align:left;width:100%;"> -->
          未加入pH分析，3类水标准：6.5-8.5
      <!-- </span> -->
    </el-row>
    <!-- {{dxsjson}} -->
    <el-table :data="result" style="width: 100%" border stripe>
      <el-table-column type="index" align="center"></el-table-column>
      <el-table-column prop="add" label="断面所在乡镇" align="center" width="120"></el-table-column>
      <!-- <el-table-column prop="ser" label="服务乡镇" header-align="center"></el-table-column> -->
      <el-table-column prop="name" label="断面名称" header-align="center" width="150"></el-table-column>
      <!-- <el-table-column prop="cate" label="水源地性质" header-align="center"></el-table-column> -->
      <el-table-column label="综合评价（《地下水质量标准文件》-GB/T14848-2017中所有指标均参与评价）" header-align="center">
        <!-- <el-table-column label="规定类别" header-align="center"></el-table-column> -->
        <el-table-column prop="level" label="实测类别" align="center" width="100"></el-table-column>
        <el-table-column prop="des" label="超标项目（达到类别，超标倍数）" header-align="center"></el-table-column>
      </el-table-column>
    </el-table>
        </el-main>
    </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "../components/Header";
import Aside_lgx from "../components/Aside.vue"
import { analyse_dxs } from "../lgxjs/lgx.js";
export default {
  data() {
    return {
      title: "地下水分析",
      // dxsjson: '',
      result: [],
      dw: "单位:总大肠菌群:MPN/100mL、水温:℃、pH:无量纲、其它:mg/L"
    };
  },
  components: { Header,Aside_lgx },
  methods: {
    getJson(msg) {
      // this.dxsjson = msg;
      this.result = analyse_dxs(msg);

			// this.dxsjson=msg[0][xm[0]]
      // console.log(xm);
			
    }
  }
};
</script>
<style>

</style>
