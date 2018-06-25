const mailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const config = require('../config');
const transporter = mailer.createTransport(smtpTransport(config.mail_opts));
const async = require('async');

var sendMail = function (data){

    async.retry({times:5},function(done){
        transporter.sendMail(data,function(err){
            if (err){
                console.log('send mail error')
                console.log(err)
                return done(err);
            }
            return done();
        });
    },function (err){
        if (err) {
            console.log('send mail finnally error')
            console.log(err)
        }
        console.log('send mail success')
    })
}

exports.sendMail = sendMail;