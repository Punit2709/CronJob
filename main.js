const https = require('https');

const url = 'https://e-commerce-9v8q.onrender.com/ping';

https.get(url, (resp) => {
  let data = '';

  // A chunk of data has been received.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received.
  resp.on('end', () => {
    console.log('Website pinged successfully:', data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});