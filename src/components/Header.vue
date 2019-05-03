<template>
    <el-row>
        <el-col :span="8">{{title}}</el-col>
        <el-col :span="8">{{dw}}</el-col>
		<el-col :span="8"></el-col>
    </el-row>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    props:['title','dw']
}
</script>

<style scoped>
    .el-row{
        line-height: 40px;
        font-weight: bold;
        border-bottom: 1px solid #cccccc;
        
    }
    .el-col{
        text-align: left;
        padding-inline-start : 20px;
    }
    .el-col:nth-child(2){
        text-align: right;
        font-size: 10px !important;
        padding-inline-end: 50px;
    }
</style>

