<template>
  <el-row>
    <el-col :span="8">{{title}}</el-col>
    <el-col :span="10">{{dw}}</el-col>
    <el-col :span="6" :style="dspy">
      <el-upload
        ref="upload"
        action="/"
        :show-file-list="false"
        :on-change="readExcel"
        :auto-upload="false"
      >
        <el-button slot="trigger" icon="el-icon-upload" size="small" type="primary">导入excel</el-button>
      </el-upload>
    </el-col>
  </el-row>
</template>
<script>
import XLSX from "xlsx";
// import { constants } from 'crypto';
export default {
  data() {
    return {
      dbjson: []
    };
  },
  methods: {
    // setjson() {
    //   this.$emit('transferJson', this.dbjson);
    // },
    readExcel(file) {
      const fileReader = new FileReader();
      fileReader.onload = ev => {
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: "binary"
          });
          //  for (let sheet in workbook.Sheets) {
          //    const sheetArray = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
          //  }
          this.dbjson = XLSX.utils.sheet_to_json(
            workbook.Sheets[workbook.SheetNames[0]]
          );
          console.log(this.dbjson);
          this.$emit("transferJson", this.dbjson);
        } catch (e) {
          this.$message.warning("文件类型不正确！");
          return false;
        }
      };
      fileReader.readAsBinaryString(file.raw);
    }
  },
  props: ["title", "dw", "dspy"]
};
</script>

<style scoped>
.el-row {
  line-height: 40px;
  font-weight: bold;
  border-bottom: 1px solid #cccccc;
}
.el-col {
  text-align: left;
  padding-inline-start: 20px;
}
.el-col:nth-child(2) {
  text-align: right;
  font-size: 10px !important;
  /* padding-inline-end: 50px; */
}
el-col:last-child {
  text-align: right;
}
</style>

