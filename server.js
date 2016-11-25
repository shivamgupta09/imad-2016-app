var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles ={
'article-one':{
    title:"Article One | Shivam Gupta",
    heading:"Article One",
    date:"sep 5 2016",
    content:`
            <p>
            This Is the content of my first Article.This Is the content of my first Article.
            This Is the content of my first Article.This Is the content of my first Article.
            This Is the content of my first Article.
        </p>
        <p>
            This Is the content of my first Article.This Is the content of my first Article.
            This Is the content of my first Article.This Is the content of my first Article.
            This Is the content of my first Article.
        </p>
        <p>
            This Is the content of my first Article.This Is the content of my first Article.
            This Is the content of my first Article.This Is the content of my first Article.
            This Is the content of my first Article.
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
    <video width = "300" height ="300" controls>
    <source src ="http://www.dailymotion.com/video/x2fy49t_spider-man-hd-original-cartoon-classic-animation-for-kids-sub-zero-for-spidey_shortfilms">
        </video>
        <div class ="container">
            
        <div>
            <a href ="/">Home</a>
        </div>
        <hr/>
        <h3> ${heading}</h3>
        <div>
            ${date}
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
