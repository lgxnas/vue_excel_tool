<template>
	<div>
		<Header :title="title" :dw="dw" />

		<Eltable :ths="ths" :tableData="dxs" />
	</div>
</template>
<script>
	import Header from "../components/Header";
	import Eltable from "../components/Eltable";
	export default {
		data() {
			return {
				title: "地下水分析",
				// tableData,
				dw: '单位:总大肠菌群:MPN/100mL、水温:℃、pH:无量纲、其它:mg/L',
				dxs: [],
				dxsdb:[],
				ths: [{
						"prop": "pH",
						"label": "pH"
					},
					{
						"prop": "总硬度 ",
						"label": "总硬度 "
					},
					{
						"prop": "硫酸盐 ",
						"label": "硫酸盐 "
					},
					{
						"prop": "氯化物 ",
						"label": "氯化物 "
					},
					{
						"prop": "铁 ",
						"label": "铁 "
					},
					{
						"prop": "锰 ",
						"label": "锰 "
					},
					{
						"prop": "铜 ",
						"label": "铜 "
					},
					{
						"prop": "锌 ",
						"label": "锌 "
					},
					{
						"prop": "挥发酚 ",
						"label": "挥发酚 "
					},
					{
						"prop": "阴离子表面活性剂 ",
						"label": "阴离子表面活性剂 "
					},
					{
						"prop": "耗氧量",
						"label": "耗氧量"
					},
					{
						"prop": "硝酸盐 ",
						"label": "硝酸盐 "
					},
					{
						"prop": "亚硝酸盐 ",
						"label": "亚硝酸盐 "
					},
					{
						"prop": "氨氮 ",
						"label": "氨氮 "
					},
					{
						"prop": "氟化物 ",
						"label": "氟化物 "
					},
					{
						"prop": "氰化物 ",
						"label": "氰化物 "
					},
					{
						"prop": "汞 ",
						"label": "汞 "
					},
					{
						"prop": "砷 ",
						"label": "砷 "
					},
					{
						"prop": "硒 ",
						"label": "硒 "
					},
					{
						"prop": "镉 ",
						"label": "镉 "
					},
					{
						"prop": "六价铬 ",
						"label": "六价铬 "
					},
					{
						"prop": "铅 ",
						"label": "铅 "
					},
					{
						"prop": "总大肠菌群 ",
						"label": "总大肠菌群 "
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
