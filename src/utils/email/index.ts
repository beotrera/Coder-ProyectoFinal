import nodemailer from 'nodemailer';
import { UserData } from '../../types/user';
import logger from '../logger';

const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: parseInt( EMAIL_PORT as string ),
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
});

transporter.verify(function (error, success) {
    if (error) {
      logger.error(error);
    } else {
        logger.info("Server is ready to take our messages");
    }
  });

export const newUser= async ( data:UserData ) =>{
    const mailOptions = {
        from:EMAIL_USER,
        to: data.email,
        subject: 'New User',
        html:`
        <div style="width: 80%;text-align: center;">
            <h1>New User was created</h1>
            <p>Name: ${data.name}<p/>
            <p>Email: ${data.email}<p/>
        </div>`
    }

    await transporter.sendMail(mailOptions,(err,info) =>{
        if(err){
            logger.error(err)
            return err
        }
        logger.info(info)
        return info
    })
    
}

export const newOrder= async ( data:UserData, order:number ) =>{
    const mailOptions = {
        from:EMAIL_USER,
        to: data.email,
        subject: 'New Order',
        html:`
        <div style="width: 80%;text-align: center;">
            <h1>New Order was created</h1>
            <p>User: ${data.name}<p/>
            <p>OrderNumber: ${order}<p/>
        </div>`
    }

    await transporter.sendMail(mailOptions,(err,info) =>{
        if(err){
            logger.error(err)
            return err
        }
        logger.info(info)
        return info
    })
    
}