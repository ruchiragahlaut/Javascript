let fs =require("fs");
let content = fs.readFileSync("abc.js");
//console.log(content+""); --> buffer format
// during read -> we have to parse it.
let json = JSON.parse(content);
// content is in buffer form.
// In frontend we have JSON which convert an binary data to json format
console.log(json);
console.log(json[1].name);

// Before reading any json file in json format you have to parse it
json.push({
    "name" :"ram",
    "lastname" : "hari",
    "age" : 25,
    "address" :{
        "state" :"delhi",
        "city" : "delhi",
    }
})
// During write we have to stringify
fs.writerFileSync("abc.json",JOSN.stringify(json));
// console.log(json[1].name);
console.log("end");