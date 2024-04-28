const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {

res.sendfile('./views/index.html', { root: __dirname })

});




