var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://img4me.p.rapidapi.com/',
  params: {
    text: 'Test Me',
    font: 'trebuchet',
    size: '12',
    fcolor: '000000',
    bcolor: 'FFFFFF',
    type: 'png'
  },
  headers: {
    'x-rapidapi-host': 'img4me.p.rapidapi.com',
    'x-rapidapi-key': 'c9f1c7a561mshda6ba71c1de8ab4p1e9ebcjsnb85895515112'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});