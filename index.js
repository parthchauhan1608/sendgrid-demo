const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");
const express = require('express');
const app = express();

const msg = {
    to: 'parthchauhan1608@gmail.com',
    from: 'parth.chauhan@codezeros.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

const chunk_size = 10000;
let groups = users.map(function (e, i) {
    return i % chunk_size === 0 ? token.slice(i, i + chunk_size) : null;
}).filter(function (e) { return e; });



for(let i =1;i<50000;i++){
    // sgMail.send(msg)
    //   .then(() => {}, error => {
    //     console.error(error);
     
    //     if (error.response) {
    //       console.error(error.response.body)
    //     }
    //   });
}
// (async () => {
//   try {
//     await sgMail.send(msg);
//   } catch (error) {
//     console.error(error);
 
//     if (error.response) {
//       console.error(error.response.body)
//     }
//   }
// })();

app.listen(5000,()=>{ console.log("connected to 5000..") })