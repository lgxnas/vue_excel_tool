<template>
  <div>
    <Header :title="title" :dw="dw" @transferJson="getJson"/>
    {{dxsjson}}
    <el-table :data="result" style="width: 100%" border stripe>
      <el-table-column type="index" align="center"></el-table-column>
      <el-table-column prop="add" label="断面所在乡镇" header-align="center"></el-table-column>
      <!-- <el-table-column prop="ser" label="服务乡镇" header-align="center"></el-table-column> -->
      <el-table-column prop="name" label="断面名称" header-align="center"></el-table-column>
      <!-- <el-table-column prop="cate" label="水源地性质" header-align="center"></el-table-column> -->
      <el-table-column label="综合评价（《地下水质量标准文件》-GB/T14848-2017中所有指标均参与评价）" header-align="center">
        <!-- <el-table-column label="规定类别" header-align="center"></el-table-column> -->
        <el-table-column prop="leve" label="实测类别" header-align="center"></el-table-column>
        <el-table-column prop="des" label="超标项目（达到类别，超标倍数）" header-align="center"></el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Header from "../components/Header";
import { analyse_dxs } from "../lgxjs/lgx.js";
export default {
  data() {
    return {
      title: "地下水分析",
      dxsjson: '',
      result: [],
      dw: "单位:总大肠菌群:MPN/100mL、水温:℃、pH:无量纲、其它:mg/L"
    };
  },
  components: { Header },
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