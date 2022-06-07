const otpGenerator = require('otp-generator')
const speakeasy = require("speakeasy");

async function genOTP(number) {

    return speakeasy.totp({
        secret: process.env.OTP_KEY,
        encoding: 'base32',
        digits: 6,
        step: 60,
        window: 10
    });
}

async function verifyOTP(token) {
    return speakeasy.totp.verify({
        secret: process.env.OTP_KEY,
        encoding: 'base32',
        token: token,
        step:60,
        window: 10,
    });
}



module.exports = {
    genOTP,
    verifyOTP
}