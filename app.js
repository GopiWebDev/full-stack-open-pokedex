const express = require('express');
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/version', (req, res) => {
  res.send('added through new branch'); // change this string to ensure a new version deployed
});

app.get('/health', (req, res) => {
  res.send('this is version 0.0.3');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
