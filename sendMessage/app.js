// const client = require('twilio')(YOUR_ACCOUNT_SID, YOUR_AUTH_TOKEN);

ACCOUNT_SID = 'AC0550b5213374e0fbceea05245e0e7036'
AUTH_TOKEN = '60fc2c2e8ce520119b48fdfbfb0fec47'
SERVICE_SID = 'MG621de693f5d874c0398176bdc8166c43'
const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

// User-defined function to send bulk SMS to desired
// numbers bypassing numbers list as parameter
function sendBulkMessages(messageBody, numberList)
{
	var numbers = [];
	for(i = 0; i < numberList.length; i++)
	{
		numbers.push(JSON.stringify({
			binding_type: 'sms', address: numberList[i]}))
	}

	const notificationOpts = {
	toBinding: numbers,
	body: messageBody,
	};

	client.notify
	.services(SERVICE_SID)
	.notifications.create(notificationOpts)
	.then(notification => console.log(notification.sid))
	.catch(error => console.log(error));
}
	
// Sending our custom message to all numbers
// mentioned in array.
sendBulkMessages('Greeting from geeksforgeeks',
	['8745916568']) // Example +919999999999
