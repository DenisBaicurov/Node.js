const htpp=require("http");
let main=0;
let about_me=0
const server = htpp.createServer((req,res)=>{
    console.log('Запрос получен');
    if(req.url==='/'||req.url==='/home'){
    main++;
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        res.end(`<h1>Главная страница</h1><br><a href="/about" >Обо мне</a>
        <br><h2>Страницу просматривали ${main} раз</h2>`);
    }
  else if (req.url==='/about'){
    about_me++;
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    res.end(`<h1>Обо мне</h1><br><a href="/" >Главная страница</a>
    <br><h2>Страницу просматривали ${about_me} раз</h2>`);
}
else{

    res.writeHead(400,{'Content-Type':'text/html;charset=utf-8'});
    res.end(`<h1>Страница не найдена</h1>`); 
}

})
const port='3030';
server.listen(port,()=>{console.log(`Сервер запущен на ${port}`)})