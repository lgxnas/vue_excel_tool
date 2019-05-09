//dxsjson格式
//[ { "乡镇名称": "安福镇", "监测断面名称": "安福镇安福村5社", "pH": "7.60", "总硬度 ": 250, "硫酸盐 ": 158, "氯化物 ": 46.2, "铁 ": "0.0045L", "锰 ": 0.0006, "铜 ": "0.009L", "锌 ": 0.001, "挥发酚 ": "0.0003L", "阴离子表面活性剂 ": 0.087, "耗氧量": 2.5, "硝酸盐 ": 11.4, "亚硝酸盐 ": "0.016L", "氨氮 ": 0.053, "氟化物 ": 0.281, "氰化物 ": "0.002L", "汞 ": "0.00004L", "砷 ": "0.0003L", "硒 ": "0.0004L", "镉 ": "0.004L", "六价铬 ": "0.004L", "铅 ": "0.008L", "总大肠菌群 ": "＜2" }, { "乡镇名称": "白家乡", "监测断面名称": "白家乡1村7社", "pH": 7.71, "总硬度 ": 214, "硫酸盐 ": 78.4, "氯化物 ": 16.5, "铁 ": "0.0045L", "锰 ": 0.0766, "铜 ": "0.009L", "锌 ": "0.001L", "挥发酚 ": "0.0003L", "阴离子表面活性剂 ": 0.053, "耗氧量": "2.0", "硝酸盐 ": 1.18, "亚硝酸盐 ": "0.016L", "氨氮 ": 0.058, "氟化物 ": 0.354, "氰化物 ": "0.002L", "汞 ": 0.0002, "砷 ": 0.0051, "硒 ": "0.0004L", "镉 ": "0.004L", "六价铬 ": 0.005, "铅 ": "0.008L", "总大肠菌群 ": 2 }, { "乡镇名称": "大观乡", "监测断面名称": "大观乡灵吉苑社区", "pH": 7.47, "总硬度 ": 222, "硫酸盐 ": 83.4, "氯化物 ": 13.6, "铁 ": "0.0045L", "锰 ": 0.0012, "铜 ": "0.009L", "锌 ": "0.001L", "挥发酚 ": 0.0007, "阴离子表面活性剂 ": "0.050", "耗氧量": 1.7, "硝酸盐 ": 1.11, "亚硝酸盐 ": "0.016L", "氨氮 ": 0.095, "氟化物 ": 0.25, "氰化物 ": "0.002L", "汞 ": 0.00004, "砷 ": 0.0011, "硒 ": "0.0004L", "镉 ": "0.004L", "六价铬 ": 0.005, "铅 ": "0.008L", "总大肠菌群 ": "＜2" }, { "乡镇名称": "大通镇", "监测断面名称": "大通镇黄莲嘴", "pH": 7.73, "总硬度 ": 193, "硫酸盐 ": 142, "氯化物 ": 11.9, "铁 ": "0.114", "锰 ": 0.0096, "铜 ": "0.009L", "锌 ": 0.001, "挥发酚 ": "0.0003L", "阴离子表面活性剂 ": "0.05L", "耗氧量": 4.1, "硝酸盐 ": 0.474, "亚硝酸盐 ": "0.016L", "氨氮 ": 0.078, "氟化物 ": 0.259, "氰化物 ": "0.002L", "汞 ": 0.00006, "砷 ": 0.0008, "硒 ": "0.0004L", "镉 ": "0.004L", "六价铬 ": 0.005, "铅 ": "0.008L", "总大肠菌群 ": "≥2400" } ]
//result格式
//[{add:"安福镇",name:"安福镇安福村5社",level:"Ⅳ",des:"耗氧量(Ⅳ,超标0.37倍);总大肠菌群超标(Ⅴ,超标799.00倍);"}]
//地下水2-4类标准值
const dxs = [{
    "总硬度 ": "300",
    "硫酸盐 ": "150",
    "氯化物 ": "150",
    "铁 ": "0.2",
    "锰 ": "0.05",
    "铜 ": "0.05",
    "锌 ": "0.5",
    "挥发酚 ": "0.001",
    "阴离子表面活性剂 ": "0.1",
    "耗氧量": "2",
    "硝酸盐 ": "5",
    "亚硝酸盐 ": "0.1",
    "氨氮 ": "0.1",
    "氟化物 ": "1",
    "氰化物 ": "0.01",
    "汞 ": "0.0001",
    "砷 ": "0.001",
    "硒 ": "0.01",
    "镉 ": "0.001",
    "六价铬 ": "0.01",
    "铅 ": "0.005",
    "总大肠菌群 ": "3"
},
{
    "总硬度 ": "450",
    "硫酸盐 ": "250",
    "氯化物 ": "250",
    "铁 ": "0.3",
    "锰 ": "0.1",
    "铜 ": "1",
    "锌 ": "1",
    "挥发酚 ": "0.002",
    "阴离子表面活性剂 ": "0.3",
    "耗氧量": "3",
    "硝酸盐 ": "20",
    "亚硝酸盐 ": "1",
    "氨氮 ": "0.5",
    "氟化物 ": "1",
    "氰化物 ": "0.05",
    "汞 ": "0.001",
    "砷 ": "0.01",
    "硒 ": "0.01",
    "镉 ": "0.005",
    "六价铬 ": "0.05",
    "铅 ": "0.01",
    "总大肠菌群 ": "3"
},
{
    "总硬度 ": "650",
    "硫酸盐 ": "350",
    "氯化物 ": "350",
    "铁 ": "2",
    "锰 ": "1.5",
    "铜 ": "1.5",
    "锌 ": "5",
    "挥发酚 ": "0.01",
    "阴离子表面活性剂 ": "0.3",
    "耗氧量": "10",
    "硝酸盐 ": "30",
    "亚硝酸盐 ": "4.8",
    "氨氮 ": "1.5",
    "氟化物 ": "2",
    "氰化物 ": "0.1",
    "汞 ": "0.002",
    "砷 ": "0.05",
    "硒 ": "0.1",
    "镉 ": "0.01",
    "六价铬 ": "0.1",
    "铅 ": "0.1",
    "总大肠菌群 ": "100"
}
]; //2 3 4 类
const dbs = [{
    "高锰酸盐指数": "2",
    "化学需氧量": "15",
    "五日生化需氧量": "3",
    "氨氮": "0.15",
    "总磷河流": "0.02",
    "总磷湖库": "0.01",
    "总氮": "0.2",
    "铜": "0.01",
    "锌": "0.05",
    "氟化物": "1",
    "硒": "0.01",
    "砷": "0.05",
    "汞": "0.00005",
    "镉": "0.001",
    "六价铬": "0.01",
    "铅": "0.01",
    "氰化物": "0.005",
    "挥发酚": "0.002",
    "石油类": "0.05",
    "阴离子表面活性剂": "0.2",
    "硫化物": "0.05",
    "粪大肠菌群": "200",
    "硫酸盐": "250",
    "氯化物": "250",
    "硝酸盐": "10",
    "铁": "0.3",
    "锰": "0.1"
},
{
    "高锰酸盐指数": "4",
    "化学需氧量": "15",
    "五日生化需氧量": "3",
    "氨氮": "0.5",
    "总磷河流": "0.1",
    "总磷湖库": "0.025",
    "总氮": "0.5",
    "铜": "1",
    "锌": "1",
    "氟化物": "1",
    "硒": "0.01",
    "砷": "0.05",
    "汞": "0.00005",
    "镉": "0.005",
    "六价铬": "0.05",
    "铅": "0.01",
    "氰化物": "0.05",
    "挥发酚": "0.002",
    "石油类": "0.05",
    "阴离子表面活性剂": "0.2",
    "硫化物": "0.1",
    "粪大肠菌群": "2000",
    "硫酸盐": "250",
    "氯化物": "250",
    "硝酸盐": "10",
    "铁": "0.3",
    "锰": "0.1"
},
{
    "高锰酸盐指数": "6",
    "化学需氧量": "20",
    "五日生化需氧量": "4",
    "氨氮": "1",
    "总磷河流": "0.2",
    "总磷湖库": "0.05",
    "总氮": "1",
    "铜": "1",
    "锌": "1",
    "氟化物": "1",
    "硒": "0.01",
    "砷": "0.05",
    "汞": "0.0001",
    "镉": "0.005",
    "六价铬": "0.05",
    "铅": "0.05",
    "氰化物": "0.2",
    "挥发酚": "0.005",
    "石油类": "0.05",
    "阴离子表面活性剂": "0.2",
    "硫化物": "0.2",
    "粪大肠菌群": "10000",
    "硫酸盐": "250",
    "氯化物": "250",
    "硝酸盐": "10",
    "铁": "0.3",
    "锰": "0.1"
},
{
    "高锰酸盐指数": "10",
    "化学需氧量": "30",
    "五日生化需氧量": "6",
    "氨氮": "1.5",
    "总磷河流": "0.3",
    "总磷湖库": "0.1",
    "总氮": "1.5",
    "铜": "1",
    "锌": "2",
    "氟化物": "1.5",
    "硒": "0.02",
    "砷": "0.1",
    "汞": "0.001",
    "镉": "0.005",
    "六价铬": "0.05",
    "铅": "0.05",
    "氰化物": "0.2",
    "挥发酚": "0.01",
    "石油类": "0.5",
    "阴离子表面活性剂": "0.3",
    "硫化物": "0.5",
    "粪大肠菌群": "20000",
    "硫酸盐": "250",
    "氯化物": "250",
    "硝酸盐": "10",
    "铁": "0.3",
    "锰": "0.1"
},
{
    "高锰酸盐指数": "15",
    "化学需氧量": "40",
    "五日生化需氧量": "10",
    "氨氮": "2",
    "总磷河流": "0.4",
    "总磷湖库": "0.2",
    "总氮": "2",
    "铜": "1",
    "锌": "2",
    "氟化物": "1.5",
    "硒": "0.02",
    "砷": "0.1",
    "汞": "0.001",
    "镉": "0.01",
    "六价铬": "0.1",
    "铅": "0.1",
    "氰化物": "0.2",
    "挥发酚": "0.1",
    "石油类": "1",
    "阴离子表面活性剂": "0.3",
    "硫化物": "1",
    "粪大肠菌群": "40000",
    "硫酸盐": "250",
    "氯化物": "250",
    "硝酸盐": "10",
    "铁": "0.3",
    "锰": "0.1"
}
];
const dbs_o = ["7.5", "6", "5", "3", "2"]
const _level = {
    "1": "Ⅰ",
    "2": "Ⅱ",
    "3": "Ⅲ",
    "4": "Ⅳ",
    "5": "Ⅴ",
    "6": "劣Ⅴ"
}
//dbs_ph 6-9
//单项目评价 返回等级和超标倍数
function analyse_value(key, value) { //value：测量值 v3：3类标准值 number float bs:返回超标倍数 lva:等级
    let v3 = dxs[1][key]; //3类标准值
    // console.log(key,value,v3)
    let bs = 0;
    let level = "";
    if (value > v3) {
        let tmpbs = Math.abs(value - v3) / v3;
        bs = tmpbs.toFixed(2); //toFixed 4舍6入
        // console.log(key, value, v3, bs)
        if (value > dxs[2][key]) {
            level = "Ⅴ";
        } else {
            level = "Ⅳ";
        }
    }
    return {
        lva: level,
        bs: bs
    };
}
//规范取值 转Float
function toFloat(value) {
    let valFloat = 0;
    if (typeof (value) == "string") { //测量值 
        valFloat = parseFloat(value.replace(/[L|\<|≥|\s]/g, "")); //转float
        // console.log(obj[arrKey[i]],valFloat)
    } else {
        valFloat = value;
    }
    return valFloat;
}
//计算均值
function _average(s, x, countFloat=0) { //val_s,val_x string 0.05L 或 数字 ,countFloat 小数位数 为规范数据准备 暂时没用
    let tps = typeof (s);
    let tpx = typeof (x); //下游类型
    let av; //返回结果
    // let countFloat=0; //小数位数
    if (tps == "string" && tpx != "string" && s.indexOf("L") != -1) {
        s = parseFloat(s.replace(/L|\s/g, ""));
        countFloat = s.toString().split(".").length;
        av = ((s + x) / 2).toFixed(countFloat);
    } else if (tpx == "string" && tps != "string" && x.indexOf("L") != -1) {
        x = parseFloat(x.replace(/L|\s/g, ""));
        countFloat = x.toString().split(".").length;
        av = ((s + x) / 2).toFixed(countFloat);
    } else if (tps == "string" && tpx == "string" && s.indexOf("L") != -1 && x.indexOf("L") != -1) {
        av = tpx;
    } else if(s==-1&&x!=-1){
        av=x;
    }else if(x==-1&&s!=-1){
        av=s;
    }else{
        s = parseFloat(s.replace(/L|\s/g, ""));
        x = parseFloat(x.replace(/L|\s/g, ""));
        if(x.toString().indexOf(".")!=-1){
        countFloat = x.toString().split(".")[1].length;}
        console.log(x,x.toString(),countFloat)
        av = ((s + x) / 2).toFixed(countFloat);
    }
    return av;
}
//地表水单指标 返回 key,bs,level ，不为项目时返回 key,0,-1
function checkdbsValue(key, value, islake = false) {
    let bs = 0;
    let lv = 0;
    let v3 = 0;
    if (key == "PH") {
        if (value < 6 || value > 9) {
            lv = 6;
            return {
                key: key,
                bs: bs,
                level: lv
            }
        } else { return { key: key, bs: bs, level: 1 } }
    } else if (key == "溶解氧") {
        for (let i = 0; i < dbs_o.length; i++) {
            if (value >= dbs_o[i]) {
                lv = i + 1;
                if (i > 2) { //i=3 >3类水
                    let tmpbs = Math.abs(value - dbs_o[2]) / dbs_o[2];
                    bs = tmpbs.toFixed(2); //toFixed 4舍6入
                }
                return {
                    key: key,
                    bs: bs,
                    level: lv
                }
            }
        }
    } else if (key == "总磷") {
        let dbs_tp = [];
        if (islake) { //是湖库
            dbs_tp = [0.01, 0.025, 0.05, 0.1, 0.2];
        } else {
            dbs_tp = [0.02, 0.1, 0.2, 0.3, 0.4];
        }
        for (let i = 0; i < dbs_tp.length; i++) {
            if (value <= dbs_tp[i]) {
                lv = i + 1;
                if (i > 2) {
                    let tmpbs = Math.abs(value - dbs_tp[2]) / dbs_tp[2];
                    bs = tmpbs.toFixed(2); //toFixed 4舍6入
                }
                return {
                    key: key,
                    bs: bs,
                    level: lv
                }
            }
        }
        let tmpbs = Math.abs(value - dbs_tp[2]) / dbs_tp[2];
        bs = tmpbs.toFixed(2); //toFixed 4舍6入
        return {
            key: key,
            bs: bs,
            level: 6
        }
    } else if (key == "总氮" && !islake) {
        return {
            key: key,
            bs: bs,
            level: 1
        }
    } else {
        let arrKey = [];
        for (let k in dbs[0]) {
            arrKey.push(k);
        }
        // console.log(arrKey, key)
        if (arrKey.indexOf(key) != -1) {
            v3 = dbs[2][key];
            for (let i = 0; i < dbs.length; i++) {
                if (value <= dbs[i][key]) {
                    lv = i + 1;
                    if (i > 2) {
                        let tmpbs = Math.abs(value - v3) / v3;
                        bs = tmpbs.toFixed(2); //toFixed 4舍6入
                    }
                    return {
                        key: key,
                        bs: bs,
                        level: lv
                    }
                }
            }
            let tmpbs = Math.abs(value - v3) / v3;
            bs = tmpbs.toFixed(2); //toFixed 4舍6入
            return {
                key: key,
                bs: bs,
                level: 6
            }
        }
        return {key:key,bs:bs,level:-1}//不是项目，返回 -1
    }
}

//地表水格式
//河流名称: "龙滩河",断面名称: "晏家乡入境断面（中）",交界县名称: "西充→嘉陵",测站名称: "西充县监测站",
// 年: "2019",月: "1",日: "1",水温: "-1",PH: "-1",溶解氧: "-1",高锰酸盐指数: "-1",
//地表水 返回 等级、超标详情、单独指标、均值
function analyse_dbs(obj) {

}
//地下水tmp
function analyse_dxsobj(obj) {
    let arrKey = [];
    let strDes = "";
    let lvobj = "";
    for (let key in obj) {
        arrKey.push(key);
    }
    //pH
    // let ph=obj[arrKey[2]];
    //pH之后
    for (let i = 3; i < arrKey.length; i++) { //未分析pH
        let v = obj[arrKey[i]]; //测量值 字符串和数字
        let va = toFloat(v); //规范测值 转Float
        let objV = analyse_value(arrKey[i], va);
        if (objV.bs > 0) {
            strDes = strDes + arrKey[i] + "(" + objV.lva + ",超标" + objV.bs + "倍);" //设置超标信息
        }
    }
    // console.log(strDes)
    if (strDes.length > 0) {
        if (strDes.indexOf("Ⅴ") != -1) { //找到5类水标志
            lvobj = "Ⅴ";
        } else {
            lvobj = "Ⅳ";
        }
        return {
            add: obj[arrKey[0]],
            name: obj[arrKey[1]],
            level: lvobj,
            des: strDes
        }
    }
};

function analyse_dxs(dxsjson) {
    let result = [];
    for (let i = 0; i < dxsjson.length; i++) {
        let obj = analyse_dxsobj(dxsjson[i]);
        // console.log(obj)
        if (!obj) {
            // console.log(obj);
        } else {
            result.push(obj);
        }
    }
    return result;
};
export {
    analyse_dxs,
    analyse_dbs,
    checkdbsValue,
    _average
};