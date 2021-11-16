import twilio from 'twilio';

const sendMsm = (text,to)=>{
    const client = twilio(process.env.ACCOUNT_SID,process.env.AUTH_TOKEN);
    client.messages.create({
        body:text,
        from:'+12184808601',
        to:to
    })
    .then( message => console.log(message))
    .catch( error => console.log(err))
}

export default sendMsm