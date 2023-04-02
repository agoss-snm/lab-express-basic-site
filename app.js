const express = require('express');

const app = express();
app.use(express.static('public'));  

//routes
app.get('/home', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/', (request, response, next) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/career', (request, response, next) => {response.sendFile(__dirname + '/views/career.html')
});
app.get('/titles', (request, response, next) => {response.sendFile(__dirname + '/views/titles.html')
});
app.get('/style', (request, response, next) => {response.sendFile(__dirname + '/views/thestyle.html')
});
app.get('/galery', (request, response, next) => {response.sendFile(__dirname + '/views/galery.html')
});


app.listen(3000);