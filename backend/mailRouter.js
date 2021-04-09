const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

router.post('/',async(req,res)=>{
    const user=req.body
    const userDetail = `name is ${user.fname},surname is ${user.sname} city is ${user.city} porduct cout is ${user.count} number is ${user.number} and address is ${user.address}`
    console.log(userDetail)

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'mfranklinnx.29@gmail.com', 
            pass: 'murad1979'       
        },
         tls: {
             rejectUnauthorized: false
         },
    });

    var message = {
        from: 'mfranklinnx.29@gmail.com',
        to: 'murafalizade@gmail.com',
        subject: 'User Detail',
        text: userDetail
    };

    transporter.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.end()
    });
})

module.exports = router;