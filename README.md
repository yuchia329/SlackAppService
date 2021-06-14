# Welcome to SlackAppService!

SlackAppService is an api service respond to Slack app interactive components and event subscriptions.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Setup

### Run the project on AWS Lambda

* Deploy with the CDK Deployment kit at https://github.com/yuchia329/CDKDeployment.git
* APIGateway and Lambda environment variables option will be deployed with the project
* Two URL paths will be generated, /slackapi/sebastian and /slackapi/interactivity

### Build your SlackApp
1. Create a Slack App
2. At Oauth & Permissions page
* Add im:history permissions to bot token scopes 
* Install to workspace
* Copy the Bot User OAuth Token and paste to config.js or export it as SlackBotToken
3. At Event Subscriptions page
* Enable event subscriptions
* After the project run on your server or lambda, paste the URL to Request URL https://hostname/slackapi/sebastian
- Sebastian is my demo Slackbot, thus the URL path route to /sebastian
* At Subscribe to bot events, click Add Bot User Event and add message.im
4. At Interactivity & Shortcuts page
* After the projecy run on your server or lambda, paste the URL to Request URL https://hostname/slackapi/interactivity
5. Now you can talk to your Slackapp

## Directory Tree

├── LICENSE
├── README.md
├── config.js
├── emailTemplates
│   └── dailyEmail.js
├── index.js
├── package-lock.json
├── package.json
├── postTemplates
│   ├── emailDaily.json
│   ├── emailTypes.json
│   ├── emailWeekly.json
│   ├── help.json
│   └── notice.json
├── slackapi
│   ├── interactivity.js
│   └── sebastian.js
└── util
    ├── actionButton.js
    ├── actionChat.js
    ├── mailer.js
    ├── methodParser.js
    ├── postMessage.js
    ├── responseModel.js
    └── test.js


## Add SlackBot Command

* Slackbot to respond to a new keyword
1. Add the keyword to switch case logic at util/actionChat.js
2. Add a response template at postTemplates/{keyword}.js
3. File actionChat.js automatically requires all .json files from postTemplates, but be sure the keyword match the template name or update the keyword same to the tempalte name

* List more action option in help template
1. Add the following json action to element array
```json
{
    "type": "button",
    "text": {
        "type": "plain_text",
        "emoji": true,
        "text": "New Function"
    },
    "style": "primary",
    "value": "newValue"
}
```
2. Configure text for display text, style for button color, and value for next action
3. Add teh new value to switch case logic at util/actionButton.js
4. For email function, see case sendDailyEmail, and add your actionValue to util/mailer.js, then add your new email template in emailTemplates/
5. For other function, feel free to create your own actions


