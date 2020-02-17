/**
 * join two arrays
 */
function myFunction(x,y,z) {
    var x = ["Cecilie", "Lone"];
    var y = ["Emil", "Tobias", "Linus"];
    var z=[];
    z = x.concat(y);
    
    document.getElementById("demo").innerHTML=z;
}

/**
 * copywithin()
 */
function myFunction1(x,y) {
    var x = ["Banana", "Orange", "Apple", "Mango"];
    var y = x.copyWithin(2,0);
    document.getElementById("demo1").innerHTML=y;
}

/**
 * every()
 */

 function checkAdult(x) {
     var x = [32, 33, 16, 40];
     return x>=18;
 }
 function myFunction2(){
     document.getElementById("demo3").innerHTML=x.every(checkAdult);

 }

 /**
 * fill()
 */
  
 function myFunction3(x,y){
     var x = ["Banana", "Orange", "Apple", "Mango"];
     var y = x.fill("kiwi",2,3);
     document.getElementById("demo4").innerHTML=y;
 }

 /**
 * filter()
 */
var age = [32, 33, 16, 40];

function check(age) {
   
    return age>=18;
}
function myFunction4(){
    
    document.getElementById("demo5").innerHTML=age.filter(check);

}

/**
 * find()
 */
var ages = [3, 10, 18, 20];

function Adult(ages) {
  return ages >= 18;
}

function myFunction5() {
  document.getElementById("demo6").innerHTML = ages.find(Adult);
}

/**
 * findindex()
 */

var ages = [3, 10, 18, 20];

function index(ages) {
  return ages >= 18;
}

function myFunction6() {
  document.getElementById("demo7").innerHTML = ages.findIndex(index);
}
 
 /**
 *  from()
 */
function test2(myArr,y){
var myArr = ["ABCDEFG"];
var y = Array.from(myArr)
return y;
}

/**
 *  includes()
 */

    function test3(fruits,y){ 
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var y = fruits.includes("Banana" , 3)
    return y;
    }
 /**
  *  indexOf()
  */

    function myFunction8(fru,a){
      var fru = ["Banana", "Orange", "Apple", "Mango"];
      var a = fru.indexOf("Apple")
      document.getElementById("demo11").innerHTML=a;

    }

  /**
  *  isArray()
  */

    function myFunction9(fruit,b){
      var fruit = ["Banana", "Orange", "Apple", "Mango"];
      var b = Array.isArray(fruit)
      document.getElementById("demo12").innerHTML=b;

    }

  /**
  *  join()
  */
  
  function myFunction10(frt,c){
    var frt = ["Banana", "Orange", "Apple", "Mango"];
    var c = frt.join()
    document.getElementById("demo13").innerHTML=c;
  }


 /**
  *  length()
  */
 
  function myFunction11(fu,g){
    var fu = ["Banana", "Orange", "Apple", "Mango"];
    var g = fu.length;
    document.getElementById("demo15").innerHTML=g;


  }

  /**
  *  lastindex()
  */

   function myFunction12(fs,h){                                                                                                                                                                                   
     var fs = ["Banana", "Orange", "Apple", "Mango"];
     var h = fs.lastIndexOf("Apple");
     document.getElementById("demo16").innerHTML=h;
   }
   
    
/**
  *  map()
  */

  function myFunction13(persons,x){
    var persons = [{firstname : "Malcom", lastname: "Reynolds"},
                   {firstname : "Kaylee", lastname: "Frye"},
                   {firstname : "Jayne", lastname: "Cobb"}                                              
  ]
  function getFullName(item) {
    var fullname = [item.firstname,item.lastname].join(" ");
    return fullname;    
  }
  var x = persons.map(getFullName);
  document.getElementById("demo17").innerHTML=x;
  }

/**
  *  pop()
  */

function myFunction14(eatable,y){
  var eatable =  ["Banana", "Orange", "Apple", "Mango"];
  var y = eatable.pop();
  document.getElementById("demo18").innerHTML=y;

}