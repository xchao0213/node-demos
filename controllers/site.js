const mail = require('../common/mail');

exports.index = function (req, res, next) {
    mail.sendMail({
        from: 'teidio@126.com',
        to: 'chenyichao@mana.com',
        subject: 'test',
        html:'<p>test</p>'
    })
    res.render('index', {
        hello: "hello world"
    })
}