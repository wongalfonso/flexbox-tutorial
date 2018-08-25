const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('dist'));



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`)
})