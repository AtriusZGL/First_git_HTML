let db = require('../db/index')

exports.all = (req, res) => {        //获取表格全部数据
    var sql = 'select * from t_Inspection_data'
    db.query(sql, (err, data) => {
        if(err) {
            return res.send('错误：' + err.message)
        }
        res.send(data)
    })
}
