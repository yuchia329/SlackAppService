const nodemailer = require('nodemailer');
const { formatDailyEmail } = require('../emailTemplates/dailyEmail');
const { config } = require ('../config');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: `${config.emailSender}`, // generated ethereal user
      pass: `${config.senderPassword}`, // generated ethereal password
    },
  });

exports.makeEmail = (actionValue, emailContent)=> {
    switch(actionValue) {
        case 'sendDailyEmail':
            const title = "BE 進度"
            const sortedContent = CategorizeItems(emailContent);
            const emailBody = formatDailyEmail(sortedContent);
            sendMail(transporter, title, emailBody);
            break;
        case 'sendWeeklyEmail':
            // const title = "BE 上週進度"
            // const content = formatWeeklyMail(emailContent);
            // sendMail(transporter, content);
            break;
        default:
        }

}

function CategorizeItems(emailContent) {
    const itemCollection = {}
    const items = emailContent.split("\n");
    for(let i=0; i<items.length;i++){
        const item = items[i];
        if (item.length>0) {
            let [leftBracketPosition, rightBracketPosition] = [0, 0]
            if (item.match(/\[/)) {
                leftBracketPosition = item.match(/\[/).index }
            if (item.match(/]/)) {
                rightBracketPosition = item.match(/]/).index }
            if (leftBracketPosition==0 && rightBracketPosition!=0) {
                const itemCategory = item.slice(leftBracketPosition,rightBracketPosition+1).concat(" ");
                let itemContent = item.slice(rightBracketPosition+1,item.length);
                itemContent = itemCategory + (itemContent.replace(/\+/g," ")).trim();
                
                itemCollection[itemCategory]=itemCollection[itemCategory]?itemCollection[itemCategory]:{};
                itemCollection[itemCategory][itemContent]={"title":itemContent};
            } else {
                if(i>0){
                    const previousItem = items[i-1];
                    const previousItemCategory = previousItem.slice(previousItem.match(/\[/).index,previousItem.match(/]/).index+1).concat(" ");
                    let previousItemContent = previousItem.slice(previousItem.match(/]/).index+1,previousItem.length);
                    previousItemContent = previousItemCategory + (previousItemContent.replace(/\+/g," ")).trim();
                    itemCollection[previousItemCategory][previousItemContent]["note"]= item
                }

            }
        }
    }
    // console.log('CategorizeItems: ',itemCollection)
    return itemCollection

}



 function sendMail(transporter,title, content) {
     transporter.sendMail({
      from: `"${config.emailSenderName}" <${config.sender}>`, // sender address
      to: config.emailReceivers,
      subject: title,
      // text: JSON.stringify(context)
      html: content
      // to: context.receiver, // list of receivers
      // subject: context.subject, // Subject line
      // text: context.body, // plain text body
      // html: "<b>Hello world?</b>", // html body
    });
}


