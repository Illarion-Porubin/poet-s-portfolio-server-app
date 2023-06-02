const nodemailer = require('nodemailer');

class MailService {

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            service: "gmail",
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }

    async sendActivationMail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_HOST,
            to,
            subject: 'Активация аккаунта на' + process.env.API_URL,
            text: '',
            html: 
            `
                <div>
                    <h1>Для активации аккаунта перейдите по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>
            `
        })
    }

    async send(data) {
        await this.transporter.sendMail({
            from: process.env.SMTP_HOST,
            to: data.to,
            subject: `Вам пишет ${data.name}. Почта: ${data.email}`,
            from: data.email,
            text: data.text,
        })
    }
}

module.exports = new MailService();