const express = require('express');

const app = express();

app.get('/app2', (request, response) => {
  const message = 'Get!';
  console.log(message);

  return response.send(message);
});

app.listen(3001, () => console.log('[+] app2 is running.'));
