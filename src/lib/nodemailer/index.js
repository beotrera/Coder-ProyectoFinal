import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'earlene.terry32@ethereal.email',
        pass: 'erdBYs5M8YrteXKFxU'
    }
});



export const sendEmailRegister= async (data) =>{
    const mailOptions ={
        from:'earlene.terry32@ethereal.email',
        to: process.env.ADMIN_EMAIL,
        subject: 'New register',
        html:`
        <div style="width: 80%;text-align: center;">
            <h1>New Register</h1>
            <p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.phone}</p>
            <p>${data.year}</p>
            <p>${data.address}</p>
        </div>`
    }

    await transporter.sendMail(mailOptions,(err,info) =>{
        if(err){
            console.log(err)
            return err
        }
        console.log(info)
        return info
    })
}
