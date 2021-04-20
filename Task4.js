var req = new XMLHttpRequest();
req.open('GET','https://restcountries.eu/rest/v2/all',true)
req.send();
req.onload=function(){

//Printing Asian countries
var data=JSON.parse(this.response);
var asia = data.filter((element) =>element.region ==='Asia');
console.log(asia);

//Population less than 200000
var popu = data.filter((element)=>element.population<=200000);
console.log(popu);

//Name, capital and flag using forEach
var details = data.forEach(element =>{
    console.log(`${element.name}, ${element.capital}, ${element.flag}`);
});

//Total population
var arr = data.map(pop);
    function pop(ele){
        return ele.population;
    }
    var newArr = arr.reduce(function(accumulator,cv){
        return accumulator + cv;
    },0);
    console.log(newArr);

//Countries using US dollar
var dollar = data.filter(element=>{
    for(var i in element.currencies){
        if(element.currencies[i].code ==='USD'){
            return true;
        }
    }
});
console.log(dollar);
}




