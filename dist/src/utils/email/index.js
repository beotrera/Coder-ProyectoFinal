"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newOrder = exports.newUser = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const logger_1 = __importDefault(require("../logger"));
const { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD } = process.env;
const transporter = nodemailer_1.default.createTransport({
    host: EMAIL_HOST,
    port: parseInt(EMAIL_PORT),
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
    }
});
transporter.verify(function (error, success) {
    if (error) {
        logger_1.default.error(error);
    }
    else {
        logger_1.default.info("Server is ready to take our messages");
    }
});
const newUser = async (data) => {
    const mailOptions = {
        from: EMAIL_USER,
        to: data.email,
        subject: 'New User',
        html: `
        <div style="width: 80%;text-align: center;">
            <h1>New User was created</h1>
            <p>Name: ${data.name}<p/>
            <p>Email: ${data.email}<p/>
        </div>`
    };
    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            logger_1.default.error(err);
            return err;
        }
        logger_1.default.info(info);
        return info;
    });
};
exports.newUser = newUser;
const newOrder = async (data, order) => {
    const mailOptions = {
        from: EMAIL_USER,
        to: data.email,
        subject: 'New Order',
        html: `
        <div style="width: 80%;text-align: center;">
            <h1>New Order was created</h1>
            <p>User: ${data.name}<p/>
            <p>OrderNumber: ${order}<p/>
        </div>`
    };
    await transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            logger_1.default.error(err);
            return err;
        }
        logger_1.default.info(info);
        return info;
    });
};
exports.newOrder = newOrder;
