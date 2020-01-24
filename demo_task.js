/**
 * Description: javascript Add or Delete
 */
debugger;
var fruits=["banana","mango","orange"];
var p;
q=document.getElementById("demo1");
q.style.display = "none";
function add(){
    q.style.display = "inline";
    p=document.getElementById("demo1").value
    fruits.push(p);
    document.getElementById("demo").innerHTML = fruits;
    p=document.getElementById("demo1").value= " ";
}
function del(){
    q.style.display = "none";
    p=document.getElementById("demo1").value= " ";
    fruits.pop();
    document.getElementById("demo").innerHTML = fruits;
}