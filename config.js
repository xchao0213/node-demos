/**
 * config
 */

const config = {

    debug: true,

    port: 3000,

    mail_opts: {
        host: 'smtp.126.com',
        port: 465,
        auth: {
            user: 'teidio@126.com',
            pass: 'teiD2018'
        },
        ignoreTLS: false
    }
}

module.exports = config;