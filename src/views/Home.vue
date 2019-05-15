<template>
	<div id="home">
		    <el-container >
      <el-aside width="130px" class="noPrint">
        <Aside_lgx/>
      </el-aside>

    <el-container>
    <el-main>
		<Header :title="title" :dspy="dspy" />
		<div id="home_content">
		<ol>
		<h2>已完成内容</h2>
		<h3><li>地下水评价</li></h3>
		<p>导入excel模板后，分析超标点位水质等级、超标项目和超标倍数。</p>
		<p><b>适用范围：饮用水常规23项，不包含pH。
		<p>过滤字符：<、L、≥、任意的空白符 </p>
		<p>小数取舍：高逼格银行家算法。</p>
		</b></p>
		<li><!-- 地下 --></li>
		</ol>
		</div>
	</el-main>
    </el-container>
    </el-container>
	</div>
</template>

<script>
	import Header from "../components/Header";
	import Aside_lgx from "../components/Aside.vue"
	export default {
		name: "Home",
		data() {
			return {
				title: "个人扩展应用，未经测试，不保证质量",
				dspy: {
					display: 'none'
				}
			};
		},
		components: {
			Header,
			Aside_lgx
			
		}
		// props: {
		//   msg: String
		//  }
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#home_content{
		text-align: left;
	}
</style>
