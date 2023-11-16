<template>
    <div>

        <div class="btn1">
            <el-button type="primary" @click="all">获取后台表格数据</el-button>

        </div>

        <div class="btn2">
            <el-button type="success" @click="exportExcelSelect">导出所选表格数据</el-button>
        </div>

        <div class="table1">
            <el-table :data="tableData" @selection-change="handleSelectionChange">
                <el-table-column type="selection">
                </el-table-column>
                <el-table-column prop="id" label="检验编号" width="90">
                </el-table-column>
                <el-table-column prop="lot_num" label="产品批号" width="100">
                </el-table-column>
                <el-table-column prop="workshop_num" label="车号" width="110">
                </el-table-column>
                <el-table-column prop="MgO" label="MgO(%)" width="90">
                </el-table-column>
                <el-table-column prop="CaO" label="CaO(%)" width="90">
                </el-table-column>
                <el-table-column prop="SiO2" label="SiO2(%)" width="90">
                </el-table-column>
                <el-table-column prop="Al2O3" label="Al2O3(%)" width="90">
                </el-table-column>
                <el-table-column prop="H2O" label="H2O(%)" width="90">
                </el-table-column>
                <el-table-column prop="Fe2O3" label="Fe2O3(%)" width="90">
                </el-table-column>
                <el-table-column prop="Brun" label="灼减(%)" width="90">
                </el-table-column>
            </el-table>
            <el-dialog title="表格保存预览" width="70%" :visible.sync="selectWindow">
                <el-table :data="selectData" id="selectTable" height="600px">
                    <el-table-column prop="id" label="检验编号" width="90">
                    </el-table-column>
                    <el-table-column prop="lot_num" label="产品批号" width="100">
                    </el-table-column>
                    <el-table-column prop="workshop_num" label="车号" width="110">
                    </el-table-column>
                    <el-table-column prop="MgO" label="MgO(%)" width="90">
                    </el-table-column>
                    <el-table-column prop="CaO" label="CaO(%)" width="90">
                    </el-table-column>
                    <el-table-column prop="SiO2" label="SiO2(%)" width="90">
                    </el-table-column>
                    <el-table-column prop="Al2O3" label="Al2O3(%)" width="90">
                    </el-table-column>
                    <el-table-column prop="H2O" label="H2O(%)" width="90">
                    </el-table-column>
                    <el-table-column prop="Fe2O3" label="Fe2O3(%)" width="90">
                    </el-table-column>
                    <el-table-column prop="Brun" label="灼减(%)" width="90">
                    </el-table-column>
                </el-table>
                <div slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="toExcel">确定保存</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<script>
import axios from "axios"

import transform from '@/utils/exportToExcel.js'
export default {
    data() {
        return {
            title: "个人信息",
            tableData: [],
            selectData: [],
            selectWindow: false,
        };
    },
    methods: {
        all() {    //查找表格全部数据
            axios.get('http://127.0.0.1/list/all').then(res => {
                this.tableData = res.data
            }).catch(err => {
                console.log("获取数据失败" + err);
            })
        },
        exportExcelSelect() {
            if (this.selectData.length < 1) {
                this.$message.error('请选择要导出的内容！');
                return false;
            }
            this.selectWindow = true;
        },
        handleSelectionChange(val) {
            this.selectData = val;
        },
        toExcel() {
            transform(this.selectData, '我是文件名', this.callback)
        },
        callback(info) {
            console.log(info)
        }

    }
}

</script>
<style>
.btn1 {
    margin-right: 20px;
    margin-bottom: 20px;
    display: inline-block;
}

.btn2 {
    margin-left: 10px;
    margin-bottom: 20px;
    display: inline-block;
}

.table1 {
    margin-left: 20%;
    margin-right: 20%;
}

.tb1 {
    font-size: 25px;

    text-align: center;
    vertical-align: middle;
}

.tb2 {
    font-size: 20px;
    text-align: center;
}

.tb3 {
    font-size: 14px;
    text-align: left;
}

.tb4 {
    font-size: 12px;
    text-align: center;
}
</style>