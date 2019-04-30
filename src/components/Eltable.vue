<template>
  <div class="eltable">
    <el-table :data="tableData" border stripe :height="clientHeight" size="mini">
      <el-table-column type="index" align="center" ></el-table-column>
      <template v-for="(title,index) in ths">
        <el-table-column :prop="title.prop" :label="title.label" :key="index" header-align="center"></el-table-column>
      </template>
    </el-table>
  </div>
</template>
 <script>
import { constants } from "crypto";
export default {
  data() {
    let allHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    let clientHeight = String(allHeight - 91);
    return { clientHeight };
  },
  props: ["ths", "tableData"]
};
</script>
 
 <style>
/*使用scoped未成功*/
.el-table td,
.el-table th {
  padding: 2px !important;
  min-width: 0 !important;
}
.cell {
  font-size: 10px;
  line-height: 15px !important;
  padding: 0 !important;
  /* text-align: center; */
  min-width: 0 !important;
}
.eltable {
  margin: 5px;
}
</style>