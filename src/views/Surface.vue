<template>
	<div>
		<Header :title="title" :dw="dw" />
<!-- 				<input type="file" onchange="importf(this)" /> -->
		<Eltable :ths="ths" :tableData="dbs" />
	</div>
</template>
<script>
	import Header from "../components/Header";
	import Eltable from "../components/Eltable";
	import "../js/lgxexcel.js"
	import '../js/xlsxjs.js'
	
	export default {
		data() {
			return {
				title: "地表水分析",
				// tableData,
				dw: '单位:粪大肠菌群:个/L、水温:℃、pH:无量纲、其它:mg/L',
				dbs: [],
				dxsdb:"",
				ths: [{
						"prop": "水温",
						"label": "水温"
					},
					{
						"prop": "pH",
						"label": "pH"
					},
					{
						"prop": "溶解氧",
						"label": "溶解氧"
					},
					{
						"prop": "高锰酸盐指数",
						"label": "高锰酸盐指数"
					},
					{
						"prop": "化学需氧量（CODcr）",
						"label": "化学需氧量（CODcr）"
					},
					{
						"prop": "生化需氧量（BOD5）",
						"label": "生化需氧量（BOD6）"
					},
					{
						"prop": "氨氮",
						"label": "氨氮"
					},
					{
						"prop": "总磷（以P计）",
						"label": "总磷（以P计）"
					},
					{
						"prop": "总氮",
						"label": "总氮"
					},
					{
						"prop": "铜",
						"label": "铜"
					},
					{
						"prop": "锌",
						"label": "锌"
					},
					{
						"prop": "氟化物（以F-计）",
						"label": "氟化物（以F-计）"
					},
					{
						"prop": "硒（四价）",
						"label": "硒（四价）"
					},
					{
						"prop": "砷",
						"label": "砷"
					},
					{
						"prop": "汞",
						"label": "汞"
					},
					{
						"prop": "镉",
						"label": "镉"
					},
					{
						"prop": "铬（六价）",
						"label": "铬（六价）"
					},
					{
						"prop": "铅",
						"label": "铅"
					},
					{
						"prop": "氰化物",
						"label": "氰化物"
					},
					{
						"prop": "挥发酚",
						"label": "挥发酚"
					},
					{
						"prop": "石油类（石油醚萃取）",
						"label": "石油类（石油醚萃取）"
					},
					{
						"prop": "阴离子表面活性剂",
						"label": "阴离子表面活性剂"
					},
					{
						"prop": "硫化物",
						"label": "硫化物"
					},
					{
						"prop": "粪大肠菌群",
						"label": "粪大肠菌群"
					},
					{
						"prop": "硫酸盐（以SO4-2计）",
						"label": "硫酸盐（以SO4-3计）"
					},
					{
						"prop": "氯化物（以Cl-计）",
						"label": "氯化物（以Cl-计）"
					},
					{
						"prop": "硝酸盐（以N计）",
						"label": "硝酸盐（以N计）"
					},
					{
						"prop": "铁",
						"label": "铁"
					},
					{
						"prop": "锰",
						"label": "锰"
					}
				]
			};
		},
		components: {
			Header,
			Eltable
		}
	};
	
</script>
