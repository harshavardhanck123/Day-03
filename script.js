let obj1 = {name:"Person1",age:5};
let obj2 = {age:5,name:"Person1"};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
//Question 2 and 3
var request = new XMLHttpRequest();
request.open("GET"," https://restcountries.com/v3.1/all ")
request.send();
request.onload=function(){
    var res=JSON.parse(request.response)
    console.log(res)
    //console.log(res[0].population)
    for(var i=0;i<res.length;i++)
    { 
        console.log(res[i].name.common+","+res[i].region)
        console.log("Flag"+" "+res[i].flag)
        console.log("Sub-Region"+" "+res[i].subregion)
        console.log("Population"+" "+res[i].population)
    }
}