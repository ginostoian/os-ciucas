// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    const nodeMailer = require('nodemailer')
    const transporter = nodeMailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'osciucas.alerts@gmail.com',
            pass: 'jbjyltbgaeywmwux',
        },
        secure: true,
    })

    const mailData = {
        from: 'osciucas.alerts@gmail.com',
        to: 'ginostoian@gmail.com',
        subject: `Mesaj nou de la ${req.body.email}`,
        text: req.body.message,
        html: `<div>${req.body.message}</div>`
    }

    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.log(err)
        }
        if (info) {
            console.log(info)
        }
    })

    console.log(req.body)
    res.send(200)
}