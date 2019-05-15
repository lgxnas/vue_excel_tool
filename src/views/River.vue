<template>
  <div id="river">
    <el-container >
      <el-aside width="130px" class="noPrint">
        <Aside_lgx/>
      </el-aside>

    <el-container>
    <el-main>
    <Header :title="title" :dw="dw" @transferJson="getJson"/>
    <el-row class="noPrint">
      <el-col :span="3">
        <el-button
          icon="el-icon-s-data"
          size="small"
          type="primary"
          style="margin:10px;"
          @click="showFour"
        >{{showButton?'显示常规四项':'显示全部项目'}}</el-button>
      </el-col>
      <el-col :span="4">
        <!-- <el-select
    multiple
    collapse-tags
    style="margin: 10px;"
    placeholder="请选择"
    size="small"
    >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select> -->
      </el-col>
    </el-row>
    <div id="tbRiver">
    <el-table :data="dm" border stripe @cell-dblclick="dbck" :span-method="objectSpanMethod">
      <template v-for="(th,index) in ths">
        <el-table-column
          :prop="th.prop"
          :label="th.label"
          :key="index"
          align="center"
          :width="index<ths.length-2?'65':'200'"
        >
          <template slot-scope="scope">
            <div class="isEdit"> {{scope.row[th.prop]}}</div>
            <el-input
              type="textarea"
              @focus="onfocus"
              v-model="scope.row[th.prop]"
              @blur="update(scope.$index,th.prop)"
              size="mini"
              autosize
              :disabled="scope.$index%3!=2?inputDisable:true"
              style="display:none;"
            ></el-input>
          </template>
        </el-table-column>
      </template>
    </el-table>
    </div>
    <p>{{bz}}</p>
    </el-main>
    </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside_lgx from "../components/Aside.vue"
import Header from "../components/Header";
import { constants } from "crypto";
import { checkdbsValue, _average} from "../lgxjs/lgx";
import { isString } from "util";
export default {
  data() {
    return {
      inputDisable: false,
      title: "附件3：南充市县域交界河流监测数据及综合评价结果",
      // tableData,
      dw: "单位:粪大肠菌群:个/L、水温:℃、pH:无量纲、其它:mg/L",
      bz:
        '备注：①河流评价参照《地表水环境质量标准》（GB3838-2002)、环办[2011]22号文件；②未开展监测填报“-1”；项目未检出填报“检出限+L"；③若项目未检出，计算平均值时取检出限的一半进行计算；④若上下游均未检出，计算“双方均值”那一栏请填报“下游监测站的检出限”。⑤该表格经上下游监测站确认盖章后，由下游监测站负责数据上报，要求同时上报“EXCEl表格”和“双方盖章后的扫描图片”电子版，不接收纸质版报告。⑥数据上报在发送离线文件同时，请同时发送邮件，以便留档备查。',
      //table title
      ths0: [
        { prop: "河流名称", label: "河流名称" },
        { prop: "断面名称", label: "断面名称" },
        { prop: "交界县名称", label: "交界县名称" },
        { prop: "测站名称", label: "测站名称" },
        { prop: "年", label: "年" },
        { prop: "月", label: "月" },
        { prop: "日", label: "日" }
      ],
      thsxm: [
        { prop: "水温", label: "水温" },
        { prop: "PH", label: "PH" },
        { prop: "溶解氧", label: "溶解氧" },
        { prop: "高锰酸盐指数", label: "高锰酸盐指数" },
        { prop: "五日生化需氧量", label: "五日生化需氧量" },
        { prop: "氨氮", label: "氨氮" },
        { prop: "化学需氧量", label: "化学需氧量" },
        { prop: "挥发酚", label: "挥发酚" },
        { prop: "氰化物", label: "氰化物" },
        { prop: "砷", label: "砷" },
        { prop: "汞", label: "汞" },
        { prop: "六价铬", label: "六价铬" },
        { prop: "铅", label: "铅" },
        { prop: "镉", label: "镉" },
        { prop: "石油类", label: "石油类" },
        { prop: "总磷", label: "总磷" },
        { prop: "总氮", label: "总氮" },
        { prop: "铜", label: "铜" },
        { prop: "锌", label: "锌" },
        { prop: "氟化物", label: "氟化物" },
        { prop: "硒", label: "硒" },
        { prop: "阴离子表面活性剂", label: "阴离子表面活性剂" },
        { prop: "硫化物", label: "硫化物" },
        { prop: "粪大肠菌群", label: "粪大肠杆菌群" }
      ],
      thspj: [
        { prop: "规定类别", label: "规定类别" },
        { prop: "实测类别", label: "实测类别" },
        {
          prop: "21项参评指标中超标项目（达到类别,超标倍数）",
          label: "21项参评指标中超标项目（达到类别,超标倍数）"
        },
        {
          prop: "单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）",
          label: "单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）"
        }
      ],
      //tableData
      filterArr0: [
        "水温",
        "PH",
        "溶解氧",
        "高锰酸盐指数",
        "五日生化需氧量",
        "氨氮",
        "化学需氧量",
        "挥发酚",
        "氰化物",
        "砷",
        "汞",
        "六价铬",
        "铅",
        "镉",
        "石油类",
        "总磷",
        "总氮",
        "铜",
        "锌",
        "氟化物",
        "硒",
        "阴离子表面活性剂",
        "硫化物",
        "粪大肠菌群"
      ],
      filterArr:[],
      showButton: true,
      dm: [
        {
          河流名称: "龙滩河",
          断面名称: "晏家乡入境断面（中）",
          交界县名称: "西充→嘉陵",
          测站名称: "西充县监测站",
          年: "2019",
          月: "1",
          日: "1",
          水温: "-1",
          PH: "-1",
          溶解氧: "-1",
          高锰酸盐指数: "-1",
          五日生化需氧量: "-1",
          氨氮: "-1",
          化学需氧量: "-1",
          挥发酚: "-1",
          氰化物: "-1",
          砷: "-1",
          汞: "-1",
          六价铬: "-1",
          铅: "-1",
          镉: "-1",
          石油类: "-1",
          总磷: "-1",
          总氮: "-1",
          铜: "-1",
          锌: "-1",
          氟化物: "-1",
          硒: "-1",
          阴离子表面活性剂: "-1",
          硫化物: "-1",
          粪大肠菌群: "-1",
          规定类别: "Ⅲ",
          实测类别: "-1",
          "21项参评指标中超标项目（达到类别,超标倍数）": "/",
          "单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）": "/"
        },
        {
          河流名称: "龙滩河",
          断面名称: "晏家乡入境断面（中）",
          交界县名称: "西充→嘉陵",
          测站名称: "嘉陵区监测站",
          年: "2019",
          月: "1",
          日: "1",
          水温: "-1",
          PH: "-1",
          溶解氧: "-1",
          高锰酸盐指数: "-1",
          五日生化需氧量: "-1",
          氨氮: "-1",
          化学需氧量: "-1",
          挥发酚: "-1",
          氰化物: "-1",
          砷: "-1",
          汞: "-1",
          六价铬: "-1",
          铅: "-1",
          镉: "-1",
          石油类: "-1",
          总磷: "-1",
          总氮: "-1",
          铜: "-1",
          锌: "-1",
          氟化物: "-1",
          硒: "-1",
          阴离子表面活性剂: "-1",
          硫化物: "-1",
          粪大肠菌群: "-1",
          规定类别: "Ⅲ",
          实测类别: "-1",
          "21项参评指标中超标项目（达到类别,超标倍数）": "/",
          "单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）": "/"
        },
        {
          河流名称: "龙滩河",
          断面名称: "晏家乡入境断面（中）",
          交界县名称: "西充→嘉陵",
          测站名称: "嘉陵站、西充站监测数据均值",
          年: "2019",
          月: "1",
          日: "1",
          水温: "-1",
          PH: "-1",
          溶解氧: "-1",
          高锰酸盐指数: "-1",
          五日生化需氧量: "-1",
          氨氮: "-1",
          化学需氧量: "-1",
          挥发酚: "-1",
          氰化物: "-1",
          砷: "-1",
          汞: "-1",
          六价铬: "-1",
          铅: "-1",
          镉: "-1",
          石油类: "-1",
          总磷: "-1",
          总氮: "-1",
          铜: "-1",
          锌: "-1",
          氟化物: "-1",
          硒: "-1",
          阴离子表面活性剂: "-1",
          硫化物: "-1",
          粪大肠菌群: "-1",
          规定类别: "Ⅲ",
          实测类别: "-1",
          "21项参评指标中超标项目（达到类别,超标倍数）": "/",
          "单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）": "/"
        },
        {
          河流名称: "虹溪河",
          断面名称: "莲池乡出境断面（中）",
          交界县名称: "西充→嘉陵",
          测站名称: "西充县监测站",
          年: "2019",
          月: "1",
          日: "1",
          水温: "-1",
          PH: "-1",
          溶解氧: "-1",
          高锰酸盐指数: "-1",
          五日生化需氧量: "-1",
          氨氮: "-1",
          化学需氧量: "-1",
          挥发酚: "-1",
          氰化物: "-1",
          砷: "-1",
          汞: "-1",
          六价铬: "-1",
          铅: "-1",
          镉: "-1",
          石油类: "-1",
          总磷: "-1",
          总氮: "-1",
          铜: "-1",
          锌: "-1",
          氟化物: "-1",
          硒: "-1",
          阴离子表面活性剂: "-1",
          硫化物: "-1",
          粪大肠菌群: "-1",
          规定类别: "Ⅲ",
          实测类别: "-1",
          "21项参评指标中超标项目（达到类别,超标倍数）": "/",
          "单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）": "/"
        },
        {
          河流名称: "虹溪河",
          断面名称: "莲池乡出境断面（中）",
          交界县名称: "西充→嘉陵",
          测站名称: "嘉陵区监测站",
          年: "2019",
          月: "1",
          日: "1",
          水温: "-1",
          PH: "-1",
          溶解氧: "-1",
          高锰酸盐指数: "-1",
          五日生化需氧量: "-1",
          氨氮: "-1",
          化学需氧量: "-1",
          挥发酚: "-1",
          氰化物: "-1",
          砷: "-1",
          汞: "-1",
          六价铬: "-1",
          铅: "-1",
          镉: "-1",
          石油类: "-1",
          总磷: "-1",
          总氮: "-1",
          铜: "-1",
          锌: "-1",
          氟化物: "-1",
          硒: "-1",
          阴离子表面活性剂: "-1",
          硫化物: "-1",
          粪大肠菌群: "-1",
          规定类别: "Ⅲ",
          实测类别: "-1",
          "21项参评指标中超标项目（达到类别,超标倍数）": "/",
          "单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）": "/"
        },
        {
          河流名称: "虹溪河",
          断面名称: "莲池乡出境断面（中）",
          交界县名称: "西充→嘉陵",
          测站名称: "嘉陵站、西充站监测数据均值",
          年: "2019",
          月: "1",
          日: "1",
          水温: "-1",
          PH: "-1",
          溶解氧: "-1",
          高锰酸盐指数: "-1",
          五日生化需氧量: "-1",
          氨氮: "-1",
          化学需氧量: "-1",
          挥发酚: "-1",
          氰化物: "-1",
          砷: "-1",
          汞: "-1",
          六价铬: "-1",
          铅: "-1",
          镉: "-1",
          石油类: "-1",
          总磷: "-1",
          总氮: "-1",
          铜: "-1",
          锌: "-1",
          氟化物: "-1",
          硒: "-1",
          阴离子表面活性剂: "-1",
          硫化物: "-1",
          粪大肠菌群: "-1",
          规定类别: "Ⅲ",
          实测类别: "-1",
          "21项参评指标中超标项目（达到类别,超标倍数）": "/",
          "单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）": "/"
        }
      ],
      dataCate: {},
      isEdit:false
      // noPrint:""
    };
  },
  methods: {
    showFour() {
      this.showButton = !this.showButton;
      if (!this.showButton) {
        this.filterArr = ["PH", "氨氮", "总磷", "化学需氧量"];
      } else {
        this.filterArr = [
          "水温",
          "PH",
          "溶解氧",
          "高锰酸盐指数",
          "五日生化需氧量",
          "氨氮",
          "化学需氧量",
          "挥发酚",
          "氰化物",
          "砷",
          "汞",
          "六价铬",
          "铅",
          "镉",
          "石油类",
          "总磷",
          "总氮",
          "铜",
          "锌",
          "氟化物",
          "硒",
          "阴离子表面活性剂",
          "硫化物",
          "粪大肠菌群"
        ];
      }
    },
    update(index, p) {
      //失去焦点
      // console.log(typeof(this.dm[index][p]));//string
      // this.reSetData(index, p); //Debug
      let value = this.dm[index][p];
      if (!value || value == "0") {
        this.dm[index][p] = "-1";
        // console.log(this.dm[index][p])
      } else {
        if (this.dm[index][p].toString().replace(/\s/g, "").length == 0) {
          this.dm[index][p] = "-1";
        } else {
          //正常修改
          let tmpDes = checkdbsValue(p, this.dm[index][p]);
          // console.log("1tmpDes:", tmpDes);
          if (index % 3 != 2) {
            //更新的不是均值栏
            if (tmpDes.level != -1) {
              //为项目修改值
              // console.log("2正常");
              this.reSetData(index, p);
              // console.log("3正常 ");
              if (index % 3 == 0) {
                //上游
                this.dm[index + 2][p] = _average(
                  this.dm[index][p],
                  this.dm[index + 1][p]
                );
                this.reSetData(index + 2, p);
              } else {
                //下游
                this.dm[index + 1][p] = _average(
                  this.dm[index - 1][p],
                  this.dm[index][p]
                );
                this.reSetData(index + 1, p);
                // console.log(this.dm[index][p]);
              }
            }
          }
          // this.bz =tmpDes.key + "类别：" + tmpDes.level + "超标倍数" + tmpDes.bs; //Debug
        }
      }
    },
    onfocus(e) {
      e.currentTarget.select(); //全选 文字
    },
    dbck(row, column, cell, event) {
      //双击事件
      console.log(row, column, cell, event);
      cell.children[0].children[1].style.display="block"
    },
    getJson(msg) {
      this.dm = msg;
      this.inputDisable = true;
      const dmxm = this.filterArr;
      for (let i = 0; i < msg.length; i += 3) {
        // if(i%3!=2){ //不为均值行
        // if(i%3==0){ //上游
        // console.log(i)
        // for(let th=0; th<this.ths.length;th++){
        //   for(let excel=0;excel<msg.length;excel++){
        //   if(!this.dm[excel][this.ths[th].prop]){
        //     this.dm[excel][this.ths[th].prop]="-1";
        //   }}
        // }

        for (let p of dmxm) {
          if(!this.dm[i][p]){this.dm[i][p]="-1"}
          if(!this.dm[i+1][p]){this.dm[i+1][p]="-1"}
          this.dm[i + 2][p] = _average(this.dm[i][p], this.dm[i+1][p]);
          this.reSetData(i, p, false);
          this.reSetData(i + 1, p, false);
          this.reSetData(i + 2, p, false);
        }

        //   }
        // }
      }
    },

    reSetData(i, p, isSingle = true) {
      //设置 等级 超标信息
      // let arrCate=["PH","溶解氧","高锰酸盐指数","五日生化需氧量","氨氮","化学需氧量","挥发酚","氰化物","砷","汞","六价铬","铅","镉","石油类","总磷","总氮","铜","锌","氟化物","硒","阴离子表面活性剂","硫化物","粪大肠菌群"];
      // let arrCate = [];
      //各行数据的等级 和评价 [3:{level:5,des:""}]
      // const dataCate = {}; //{"index":[{"PH":{level:5,des:""}],total:{max:"Ⅳ",des:"超标信息汇总"}}
      const _level = {
        "1": "Ⅰ",
        "2": "Ⅱ",
        "3": "Ⅲ",
        "4": "Ⅳ",
        "5": "Ⅴ",
        "6": "劣Ⅴ",
        "-1": 0,
        Ⅰ: "1",
        Ⅱ: "2",
        Ⅲ: "3",
        Ⅳ: "4",
        Ⅳ: "5",
        劣Ⅴ: "6"
      };
      // console.log("i:",i,".i:",this.dataCate.i,"[i]:",this.dataCate[i])
      let tmpObj = checkdbsValue(p, this.dm[i][p]); //{key:,bs:,level:}
      // console.log("tmpObj:", tmpObj);
      // if(p=="水温"){"tmpObj:",console.log(tmpObj)}
      if (p != "粪大肠菌群") {
        if (!this.dataCate[i]) {
          //未分析此行
          // if(p=="水温"){console.log(this.dataCate[i]);} //undifined
          this.dataCate[i] = {}; //创建
          // this.dataCate[i]["total"]={};
          this.dataCate[i][p] = {
            level: tmpObj.level,
            des:
              tmpObj.key +
              "(" +
              _level[tmpObj.level] +
              "," +
              "超标" +
              tmpObj.bs +
              "倍);"
          };
          // if(p=="水温"){console.log(this.dataCate[i][p]);}
          // this.dataCate[i]["total"] = { level: "Ⅰ", des: "/" }; //创建total
          this.dataCate[i]["total"] = { level: 1, des: "/" }; //创建total
          // if (p != "粪大肠菌群") {
          this.dataCate[i].total.level = tmpObj.level; //
          //  this.dataCate[i].total.level = _level[tmpObj.level]; //罗马数
          if (tmpObj.level > 3) {
            this.dataCate[i].total.des = this.dataCate[i][p].des;
          }
          // }
          // console.log("4datacatetotal:",this.dataCate[i])
        } else {
          //已分析过 该行
          // let oldCate=this.dataCate[i][p];
          this.dataCate[i][p] = {
            level: tmpObj.level,
            des:
              tmpObj.key +
              "(" +
              _level[tmpObj.level] +
              "," +
              "超标" +
              tmpObj.bs +
              "倍);"
          };
          // console.log("1:",isSingle);
          // if (isSingle) {
          //改单指标
          let arrLevel = [];
          this.dataCate[i].total.des = "";

          for (let k in this.dataCate[i]) {
            if (k != "total") {
              arrLevel.push(this.dataCate[i][k].level);
              if (this.dataCate[i][k].level > 3) {
                this.dataCate[i].total.des += this.dataCate[i][k].des;
              }
            }
          }
          // this.dataCate[i].total.level = _level[Math.max.apply(null, arrLevel)];
          this.dataCate[i].total.level = Math.max.apply(null, arrLevel);
          // if (Math.max.apply(null, arrLevel) < 4) {
          if (this.dataCate[i].total.level < 4) {
            this.dataCate[i].total.des = "/";
          }
          // } else {
          //批量分析导入excel
          // console.log("2:",isSingle);
          //   if (tmpObj.level > 3) {
          //     // console.log(key, tmpObj.level, this.dataCate[i][p].des);
          //     this.dataCate[i].total.des += this.dataCate[i][p].des;
          //   }
          //   if (tmpObj.level > this.dataCate[i].total.level) {
          //     this.dataCate[i].total.level = tmpObj.level;
          //   }
          // }
        }
        this.dm[i]["实测类别"] = _level[this.dataCate[i].total.level];
        this.dm[i][
          "21项参评指标中超标项目（达到类别,超标倍数）"
        ] = this.dataCate[i].total.des;
      }
      // if (p == "粪大肠菌群") {
      //粪大 直接设置
      else {
        // console.log(tmpObj.level)
        if (tmpObj.level > 3) {
          this.dm[i]["单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）"] =
            tmpObj.key +
            "(" +
            _level[tmpObj.level] +
            "," +
            "超标" +
            tmpObj.bs +
            "倍);";
          // this.$set(this.dm,i)
          // this.dm.reverse();
          // console.log(i)
        } else {
          this.dm[i]["单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）"] =
            "/";
        }
        // console.log(this.dm[i]["单独评价指标（粪大肠菌群）超标情况(类别，超标倍数）"])
      }
      // console.log(this.dataCate[i]);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex < 3) {
        if (rowIndex % 3 === 0) {
          return {
            rowspan: 3,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    printContent(){
    // let wpt = document.getElementsByClassName('el-table')[0];
    // let newContent = wpt.innerHTML;
    // let oldContent = document.body.innerHTML;
    
    // document.body.innerHTML = newContent;
    // window.print(); //打印方法
    // window.localtion.reload();
    // document.body.innerHTML = oldContent;
    // this.noPrint="noPrint"

}
    // initData() {
    //   for (let i = 0; i < this.dm.length; i++) {
    //     for (let p = 0; p < this.ths.length; p++) {
    //       if (typeof this.dm[i][p] === "undefined") {
    //         this.dm[i][this.ths[p].prop] = "-1";
    //         console.log(typeof this.dm[i][p]);
    //       }
    //     }
    //   }
    // }
  },

  components: {
    Header,
    Aside_lgx
  },
  computed: {
    ths: function() {
      let arr = [];
      arr.push(...this.ths0);
      // for(let i=0;i<this.filterArr.length;i++){
      arr.push(
        ...this.thsxm.filter(value => this.filterArr.includes(value.prop))
      ); //==this.filterArr[i]));
      // }
      arr.push(...this.thspj);
      // return this.ths0.filter(value=>value.prop!="PH")
      return arr;
    }
  },
  mounted:function(){
    this.filterArr=this.filterArr0
  }
};
</script>

<style>
.el-table thead {
  color: #000000;
}
#river #tbRiver .el-textarea__inner {
  border: none;
  background: none;
  /* height: auto; */
  color: #000000;
  padding: 0;
  text-align: center;
  resize: none;
  overflow: hidden;
  word-break: break-all;
}
#river #tbRiver .el-textarea__inner:focus {
  background-color: rgba(255, 159, 243, 0.2);
  border: 1px dashed #cccccc;
}
#river p {
  text-align: left;
  max-width: 1700px;
}
.isEdit{
  display:"";
}
@media print {
  .noPrint{
    display: none;
  }
    /* td,th,.el-table--border th, .el-table__body-wrapper .el-table--border.is-scrolling-left~.el-table__fixed{ */
    th,td,td:nth-last-of-type(1),th:nth-last-of-type(2){
    border-right:1px solid #000;
    border-left:1px solid #000;
    border-top:1px solid #000; 
  }
  .el-table{
    /* border-right: 1px solid #000; */
    max-width: 1754px;
    border-bottom: 1px solid #000 !important;
  }
}
</style>