const express = require('express');

const app = express();

app.get('/app1', (request, response) => {
  const message = 'Get!';
  console.log(message);

  return response.send(message);
});

app.listen(3000, () => console.log('[+] app1 is running.'));
