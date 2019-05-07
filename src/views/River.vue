<template>
  <div id="river">
    <el-table :data="dm" border stripe>
      <template v-for="(th,index) in ths">
        <el-table-column :prop="th.prop" :label="th.label" :key="index">
          <template scope="scope">
            <div @dblclick="dbc(scope.$index,th.prop)" style="min-width:100%;min-height:100%;">
              <div v-show="!scope.row.is_edit[th.prop]">
                <!-- <span> -->
                {{scope.row[th.prop]}}
                <!-- </span> -->
              </div>
              <el-input
                v-show="scope.row.is_edit[th.prop]"
                v-model="scope.row[th.prop]"
                @blur="update(scope.$index,th.prop)"
                autofocus="true"
                clearable
                size="mini"
                minlength="1"
              ></el-input>
            </div>
          </template>
        </el-table-column>
      </template>
    </el-table>
    {{dm}}
  </div>
</template>

<script>
import { constants } from "crypto";
export default {
  data() {
    return {
      ths: [
        { prop: "col1", label: "列1" },
        { prop: "col2", label: "列2" },
        { prop: "col3", label: "列3" },
        { prop: "col4", label: "列4" }
      ],
      dm: [
        {
          col1: "r1c1",
          col2: "r1c2",
          col3: "r1c3",
          col4: "r1c4",
          is_edit: { col1: false, col2: false, col3: false, col4: false }
        },
        {
          col1: "r2c1",
          col2: "r2c2",
          col3: "r2c3",
          col4: "r2c4",
          is_edit: { col1: false, col2: false, col3: false, col4: false }
        }
      ]
    };
  },
  methods: {
    dbc(index, p) {
      console.log(this.dm[index].is_edit);
      console.log(p);
      this.dm[index].is_edit[p] = true;
    },
    update(index, p) {
      //   console.log(this.dm[index].is_edit[p]);
      if (this.dm[index][p].replace(/\s/, "").length > 0) {
        this.dm[index].is_edit[p] = false;
      } else {
        this.dm[index][p] = -1;
        this.dm[index].is_edit[p] = false;
      }
    }
  }
};
</script>
