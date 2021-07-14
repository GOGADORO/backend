const express = require("express");
const app = express();
var Iconv = require('iconv').Iconv;
var jschardet = require('jschardet');



app.get("/",function(req,res){



 console.log("stations :", req.param('stations'));

 const { PythonShell } = require("python-shell");
 let options = {
   pythonOptions: ['-u'],
   args: req.param('stations')


 };
 PythonShell.run("./project/algorithm.py", options, function(err, results) {
   if (err) throw err;
   console.log(results);


   res.json(results)

 });
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
	console.log("Upload Server running on 3000...");
});
