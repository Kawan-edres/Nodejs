const http= require('http');

const server =http.createServer((req,res)=>{
   
    if(req.url==="/"){
        res.end('Welcome to our home page')
    }
    if(req.url==="/about"){
        res.end('Welcome to our about page')
    }
    res.end(`
        <h1> OOPs page not found! </h1>
        <p> we can seem to find that page you are looking for ! </p>
        <a href="/"> Go back to Home </a>
    `);

    // res.write("welcome to our home page ");
    // res.end();

})


server.listen(5000);
