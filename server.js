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
    <h2><u> Goldilocks And The Three Bears  </u> </h2>
<img src ="http://www.kidsworldfun.com/images/animated_stories/goldilocks-and-the-three-bears.jpg" align ="left" width = "200px" height="200px" />
           <p>
            Goldilocks and the three bears is a funny story for kids. 
It narrates the hilarious experiences of Goldilocks in a house which belongs to a family of bears.
Goldilocks is a charming young girl. One day she walks into woods, where she sees a beautiful house. 
She is fascinated by the beauty of the house. As she enters the house, she sees three bowls of porridge placed on a table.
She takes a spoonful of porridge from the first bowl, it is too hot! She tastes from the second bowl, it is too cold. 
She tries the third bowl and it is perfect.
           </p>
<p> 
 She then sees three chairs of different sizes, a big one, a medium sized one and a baby chair.
The first two chairs are big, and uncomfortable for her to sit on. The third chair is a perfect fit.
In her attempt to sit on the big chairs, she damages the chairs a bit.
 
</p>
<p> 
She feels tired. She peeks into the bedroom. There are three cots of different sizes with beds.
The first bed is too hard for Goldilocks. The second bed is too soft. The third bed is perfect for her. She dozes off.
Meanwhile, the real owners of the house returned. Who are they? How do they react when they see what Goldilocks has done to their home?. How does she react on seeing them? 
</p>
<p> 
 The narration of the story is beautiful.The voice-over is clearly audible.
It is a fascinating fancy story for kids.
Aren't you curious to know what happens to Goldilocks? 
LISTEN THE Story....
</p>
<iframe width ="220px" height ="150px" src="https://drive.google.com/file/d/0Bx_9uS0fhOt_am1KX3RtNU5td1k/view?usp=sharing"></iframe>
<br/>
<h2><u> Jack And The Beanstalk </u> </h2>
<img src ="http://www.kidsworldfun.com/images/animated_stories/jack-and-the-beanstalk.jpg" align ="left" width = "200px" height="200px" />
<p>
Jack and the Beanstalk is a famous short story for kids. It is a folk tale and modified slightly from the longer original version.

Jack lives with his mom. They are very poor. Their only means of income is the milk from their cow.
One day, the cow stops yielding milk and they decide to sell it. 
Jack takes the cow to the market, where he meets a magic man! The magic man offers him a few beans in exchange of the cow.

</p>
 Jack happily returns home with the beans. However, his mom is not very pleased with what her son has done.
She shouts at him for returning home without money and throws away the beans. Both Jach and his mother are not aware that the beans are magical!
<p>
Next morning Jack and his mom are surprised to see a huge beanstalk, reaching the sky. 
Jack rushes to the beanstalk and climbs it. He climbs and climbs. The long, long beanstalk takes him to a beautiful castle in the sky - a giant's castle.
The giant is fast asleep and jack sees heaps of gold coins and money spread all over the castle. 
There is a golden table in the castle. He also sees a golden goose laying gold eggs. The rest of the story says about how Jack takes away the golden eggs and also escapes from the giant.

</p>
<p>
 Jack and his mother live happily!
The voice-over is clearly audible.It is a fascinating fancy story for kids.
The narration of the story is beautiful. It is quite interesting and amusing animated story to watch!
Aren't you curious to know?
LISTEN THE Story...
</p>
<iframe width ="220px" height ="150px" src="https://drive.google.com/file/d/0Bx_9uS0fhOt_T01ac3didnNJZ2M/view?usp=sharing"></iframe>`
    
},
'article-two':{
    title:"Article Two | Shivam Gupta",
    heading:"Bollywood Dhamaka !!",
    date:"sep 10 2016",
    content:`
<h2> <u> KAUN TUJHE Full  Video  M.S. DHONI -THE UNTOLD STORY </u> </h2>

<img src ="http://www.lyricsmint.com/wp-content/uploads/2016/08/kauntujhe-msd-movie.jpg" align ="left" width = "200px" height="200px" />
            <p> <b> <u>Lyrics</u></b>
            Tu aata hai seene mein
Jab jab saansein bharti hoon
Tere dil ki galiyon se
Main har roz guzarti hoon

Hawaa ke jaise chalta hai tu
Main ret jaisi udti hoon
Kaun tujhe yun pyar karega
Jaise main karti hoon

Ho ho….

Meri nazar ka safar
Tujhpe hi aake ruke
Kehne ko baaqi hai kya
Kehna tha jo keh chuke
        </p>
<p> 
Meri nigaahein hain
Teri nigahon ki tujhe khabar kya be-khabar

Main tujhse hi chhup chhup kar
Teri aankhen padhti hoon
Kaun tujhe yun pyaar karega
Jaise main karti hoon

Ho ho….
</p>
<p>

Tu jo mujhe aa mila
Sapne hue sirphire
Hathon mein aate nahi
Udte hain lamhe mere

Meri hansi tujhse
Meri khushi tujhse
Tujhe khabar kya be-qadar

Jis din tujhko na dekhun
Pagal pagal phirti hoon
Kaun tujhe yun pyaar karega
Jaise main karti hoon

Ho ho….
</p>
<iframe width ="220px" height ="150px" src="https://drive.google.com/file/d/0Bx_9uS0fhOt_X3hTdmtNUTRjZnM/view?usp=sharing"></iframe>

<h2> <u> Bolna - Kapoor & Sons </u> </h2>
<img src ="https://i.ytimg.com/vi/AJ-7X6cvOhY/maxresdefault.jpg" align ="left" width = "200px" height="200px" />
<p><b> <u>Lyrics</u></b>
Hmm…

Chhuteya na chhute mose
Rang tera dholna
Ik tere baajo dooja
Mera koi mol na
Bolna mahi bolna
Bolna mahi bolna

Hmm… aa…

Tere liye aaya main toh
Tere sang jaana
Dholna ve tere naal
Jindri bitavaan

Kadi naiyo chhodna
Ishq di dor na
Saare chhad jaayen maahi
Tu na chhodna
Bolna mahi bolna
Bolna mahi bolna
</p>
<p>
Hmm…

Tere sang hasna main
Tere sang rona
Tujhme hi rehna main
Tujhme hi khona

Dil mein chhupa ke tujhe
Dil naiyo kholna
Marke bhi maahi tosey
Munh na modna
Bolna mahi bolna
Bolna mahi bolna
</p>
<p>
Chhuteya na chhoote mose
Rang tera dholna
Ik tere baajo dooja
Mera koi mol na
Bolna maahi bol na (bol na)
Bolna maahi bol na (mahi bol na)

Hmm… aa…
</p>
<iframe width ="220px" height ="150px" src="https://drive.google.com/file/d/0Bx_9uS0fhOt_QWpGQkhjTGNIc3M/view?usp=sharing"></iframe>`
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
     <div id="bottom-right">
     <h2 align ="left"> Shivam Gupta </h2>
     </div>
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
