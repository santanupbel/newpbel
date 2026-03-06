const http=require("http");
const fs=require("fs");

const home=fs.readFileSync("./index.html","utf-8")
const server=http.createServer((req,res)=>{
   
    if(req.url==="/")
    {
       res.end("<h1> welcome to my page </h1>");
    }
    if(req.url==="/about")
    {
        res.end(home)
    }
})

server.listen(2200,"localhost",()=>{
    console.log("server is running on http://localhost:2200")
})