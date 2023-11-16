var idTmr;
//自己定义一个函数transform，在里面写我们的业务逻辑
function transform(table, name, callback) {  //table为表格数据,name为导出文件名,
    //callback为导出完毕回调,方便你知道导出完成了(可根据自己需求决定是否需要)
    let tableInnerHTML = ''
    let headerData1 = ['检验编号', '产品批号', '车号']
    let headerData2 = ['氧化镁', '氧化钙', '二氧化硅', '氧化铝', '水分', '氧化铁']
    let headerData3 = ['MgO(%)', 'CaO(%)', 'SiO2(%)', 'Al2O3(%)', 'H2O(%)', 'Fe2O3(%)']
    let bodyData = table      //这里对应是表格数据，我们只需要传过来即可
    //拼接完全使用thead、tbody、tr、td、th，并且相应的tr、th、td里可以写一些类似colspan(决定占几列)
    //rowspan(决定占几行)的属性、可以用作合并行、合并列等高级操作
    tableInnerHTML += '<thead><tr>';    //头部部分开始拼接！
    tableInnerHTML += `<th colspan='10' height="120" width="1620"
    				style='font-size:48;font-family:"黑体";border-left:solid;border-right:solid;border-top:solid;font-weight:normal;'>` + "山东省锦冠冶金科技有限公司" + "</th></tr>" +
        `<tr><th colspan='10' height="86" 
    				style='font-size:26.66;font-family:"黑体";border-left:solid;border-bottom:solid;border-right:solid;font-weight:normal;'>` + "原材料检验报告" + "</th></tr>" +
        `<tr><td colspan='2' height="66"
                    style='font-size:18.66;font-family:"黑体";'>`+ "原材料名称：" + "</td>" +
        `<td  align='center'
                    style='font-size:19;font-family:"黑体";'>`+ "脱氧剂" + "</td>" + `<td></td>` +
        `<td colspan='1'  align='center'
                    style='font-size:19;font-family:"黑体";border-left:solid;'>`+ "进货日期：" +
        "</td><td colspan='5' style='border-right:solid;'></td></tr>"
    tableInnerHTML += "<tr>"
    headerData1.forEach(item => {
        tableInnerHTML += `<td rowspan='3'  align='center' 
                    style='font-size:16;font-family:"宋体";border:solid;'>`+ item + "</td>"
    })
    tableInnerHTML += `<td colspan='7'align='center' height="40"
    style='font-size:16;font-family:"宋体";border:solid;'>`+ "检验项目" + "</td></tr>"
    tableInnerHTML += "<tr>"
    headerData2.forEach(item => {
        tableInnerHTML += `<td rowspan='1'  align='center' valign='right' height="40"
                    style='font-size:16;font-family:"宋体";vertical-align:bottom;border-left:solid;'>`+ item + "</td>"
    })
    tableInnerHTML += `<td rowspan='2' align='center'
    style='font-size:16;font-family:"宋体";border:solid;'>`+ "灼减(%)" + "</td></tr>"
    headerData3.forEach(item => {
        tableInnerHTML += `<td rowspan='1' align='center' height="40"
                    style='font-size:16;font-family:"宋体";vertical-align:top;border-left:solid;'>`+ item + "</td>"
    })
    tableInnerHTML += '</tr></thead>';     //头部部分结束
    tableInnerHTML += '<tbody>';         //身体部分开始
    bodyData.forEach(item => {
        tableInnerHTML += "<tr>"
        tableInnerHTML += `<td align='center' height="48" style='font-size:16;font-family:"宋体";border:solid;'>` + item.id + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.lot_num + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.workshop_num + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.MgO + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.CaO + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.SiO2 + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.Al2O3 + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.H2O + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.Fe2O3 + "</td>"
        tableInnerHTML += `<td align='center' style='font-size:16;font-family:"宋体";border:solid;'>` + item.Brun + "</td>"
        tableInnerHTML += "</tr>"
    })
    tableInnerHTML += '</tbody>';//身体结束
    tableInnerHTML += '<tfoot><tr>';
    tableInnerHTML += `<td  align='left' rowspan='2' colspan='2'
                    style='font-size:16;font-family:"宋体";border:solid;'>`+ "检验说明" + "</td>" +
        `<td  align='left'  colspan='8' height="62"
                    style='font-size:16;font-family:"宋体";border-left:solid;border-right:solid;'>`+ "1. 以上数据为检测多组样品取平均值。" + "</td></tr><tr>" +
        `<td  align='left'  colspan='8' height="62"
                    style='font-size:16;font-family:"宋体";border-left:solid;border-right:solid;'>`+ "2. 以上有效成分所测结果都是指样品烘干外部水分后的干燥基检验指标（计算有效成分含量时不包括外部水分）。"
        + "</td></tr><tr>" +
        `<td  align='left'  colspan='2' height="124"
                    style='font-size:16;font-family:"宋体";border:solid;'>`+ "质检部门意见" + "</td>" +
        `<td colspan='3' style='border:solid;'/>` +
        `<td  align='left' colspan='2'
                    style='font-size:16;font-family:"宋体";border:solid;'>`+ "仓库处理结果" + "</td>" +
        `<td  align='left' colspan='3'
                    style='font-size:16;font-family:"宋体";border:solid;'>`+ "已入库"
        + "</td></tr><tr>" +
        `<td  align='left'  colspan='1' height="84"
                    style='font-size:19;font-family:"黑体";border:solid;'>`+ "检验员：" + "</td>" +
        `<td  align='left'  colspan='1' 
                    style='font-size:19;font-family:"黑体";border:solid;'>`+ "金先元" + "</td>" +
        `<td colspan='2' style='border:solid;'/>` +
        `<td  align='left'  colspan='1' 
                    style='font-size:19;font-family:"黑体";border:solid;'>`+ "审核：" + "</td>" +
        `<td colspan='2' style='border:solid;'/>` +
        `<td  align='left'  colspan='1' 
                    style='font-size:19;font-family:"黑体";border:solid;'>`+ "检验日期：" + "</td>" +
        `<td colspan='2' style='border:solid;'/>`+"</tr>"
        tableInnerHTML += '</tfoot>';//表尾结束
        //------------OK，到此为止拼接工作做完，也就是基本的数据已经被拼接成表格了--------------------
        //tip开始(下面还有个tip结束的位置)
        /*-------从tip开始到tip结束的过程是判断浏览器类型步骤，做兼容性处理！对于你来说你完全可以不用
                 深入理解这里面的逻辑，直接复制到自己的项目里去，不会存在任何浏览器兼容性的问题！*/
        function getExplorer() {
            var explorer = window.navigator.userAgent;
            if (explorer.indexOf('MSIE') >= 0) {
                return 'ie';        // ie
            } else if (explorer.indexOf('Firefox') >= 0) {
                return 'Firefox';   // firefox
            } else if (explorer.indexOf('Chrome') >= 0) {
                return 'Chrome';    // Chrome
            } else if (explorer.indexOf('Opera') >= 0) {
                return 'Opera';     // Opera
            } else if (explorer.indexOf('Safari') >= 0) {
                return 'Safari';    // Safari
            };
        };

    if (getExplorer() !== 'Safari' && name.substr(-1, 4) !== '.xls') {
        name += '.xls';
    }
    if (getExplorer() === 'ie') {
        var curTbl = table;
        var oXL = new ActiveXObject('Excel.Application');
        var oWB = oXL.Workbooks.Add();
        var xlsheet = oWB.Worksheets(1);
        var sel = document.body.createTextRange();
        sel.moveToElementText(curTbl);
        sel.select();
        sel.execCommand('Copy');
        xlsheet.Paste();
        oXL.Visible = true;
        try {
            var fname = oXL.Application.GetSaveAsFilename('Excel.xls', 'Excel Spreadsheets (*.xls), *.xls');
        } catch (e) {
            print('Nested catch caught ' + e);
        } finally {
            oWB.SaveAs(fname);
            // oWB.Close(savechanges = false);
            oXL.Quit();
            oXL = null;
            idTmr = setInterval(Cleanup(), 1);
        }
    } else {
        tableToExcel(tableInnerHTML, name, callback);   /*在这调用下面的一个方法，传入拼接完成
                                        	  的表格，文件名，回调函数。该方法是干嘛的请往下看*/
    }
    //tip结束
}   //此括号结束，我们自己封装的transform方法也结束了！90%的逻辑完成了！

/*下面的两个函数对于你来说你也完全不用深入理解里面的逻辑，你只要知道，他是在帮助你做转换，帮助你
  将拼接好的HTML字符串模板真正地转换并且输出到Excel里面去，直接当成固定书写方法，直接拿来用即可*/
function Cleanup() {
    window.clearInterval(idTmr);
}
let tableToExcel = (function () {
    let template = '<html><head><meta charset="UTF-8"></head><body><table>{table}</table></body></html>';
    let format = function (s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; });
    };
    return function (table, name, callback) {
        let ctx = { worksheet: name || 'Worksheet', table: table };
        let blob = new Blob([format(template, ctx)]);
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = name;     //这里这个name就是对应的文件名！
        a.click();
        a.remove();
        callback('success');    /*这里调用我们自己传入的回调方法，这样导出Excel完成后你就能
        						 在外面知道导出完毕，并且再往下做自己其他的逻辑*/
    };
})();
export default transform;    //导出自己封装的transform方法
