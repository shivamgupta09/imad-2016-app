var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles ={
'article-one':{
    title:"Story For Kids | Shivam Gupta",
    heading:"Story For Kids",
    date:"sep 5 2016",
    content:`
    <h2><u> Ali And The Magic Carpet </u> </h2>
<img src ="http://www.kidsworldfun.com/images/animated_stories/ali-and-the-magic-carpet.jpg" align ="left" width = "200px" height="200px" />
           <p>
           Ali is a little boy. Ali is a little boy.This animated short story is all about Ali's adventurous travel on a magic carpet. 
Ali learns and understands about various climates, seasonal changes, and animals as he flies on the magic carpet. 
Here is the brief substance of Ali's journey.
           </p>
<p> 
Ali finds a magic carpet at his uncle's shop. He sits on the carpet and the carpet gives him a warm welcome. 
The carpet treats him as his master and offeres to carry him across the sky.
Ali is happy to float in air and touch the clouds. In a while he lands in a dense jungle.
There is a light drizzle, which has made the jungle hot and humid! The carpet then flies over a desert.
The vast expanse of the desert is so dry and extremely hot. 
</p>
<p> 
Ali meets a desert lizard.Then the carpet carries Ali to the South Pole, which is freezing cold.
Ali sees snow all over the place and he meets a penguin.
After enjoying the snowfall, Ali flies to a mountain on the magic carpet.
It is very foggy and Ali sees a lion. Later, Ali reaches a forest. It is very windy, neither too damp nor too hot.
Finally, he reaches a place where it is raining heavily. Heavy bolts of thunder and lightning shake him up.
The place he has reached is an Island surrounded by the sea! A tortoise greets Ali and welcomes him to the island. Afraid of rain, Ali decides to go back home.
</p>
<p> 
 Ali has an adventurous journey on the magic carpet.

This animated short story video is narrated interestingly and also has subtitles. 
Join Ali and learn about different geographical locations, animals and climates.
</p>`
    
},
'article-two':{
    title:"Article Two | Shivam Gupta",
    heading:"Article Two",
    date:"sep 10 2016",
    content:`
            <p>
            This Is the content of my Second Article.This Is the content of my Second Article.
            This Is the content of my Second Article.This Is the content of my Second Article.
            This Is the content of my Second Article.
        </p>`
},
'article-three':{
    title:"Article Three | Shivam Gupta",
    heading:"Article Three",
    date:"sep 15 2016",
    content:`
    
            <p>
            This Is the content of my Third Article.This Is the content of my Third Article.
            This Is the content of my Third Article.This Is the content of my Third Article.
            This Is the content of my Third Article.
        </p>`
}
    
};

function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content= data.content;
    
    var htmlTemplate=`
    <html>
    <head>
        <title>
        ${title}
        </title>
        <meta name = "viewport" content="width=device-width, initial-scale=1" />
             <link href="/ui/style.css" rel="stylesheet" />
           </head>
    <body>
        <div class ="container">
            
        <div class ="home">
            <a href ="/">Home</a>
        </div>
        <hr/>
        <h3> ${heading}</h3>
        <div>
          <h4 align ="right">  ${date} </h4>
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
</html>

`;
    return htmlTemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter',function(req,res)
{
    counter = counter+1;
    res.send(counter.toString());
    
});
app.get('/:articleName', function (req, res) {
    var articleName= req.params.articleName;
  res.send(createTemplate(Articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
