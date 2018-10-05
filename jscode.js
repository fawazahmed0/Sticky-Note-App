 // localStorage.clear();
 var current = localStorage.length;

/* 
 function curr(){
if(localStorage.length>0){
 current = localStorage.length-1;
}else{
current = 0

}
}
*/
// have to change current dynamicallhy

console.log(current);

//filling the contents
//if(localStorage.getItem(current)!=null){
//addval();
//} 

function updatecurrent(){
if(document.getElementById("Titletext").value != 'Untitled' &&
 document.getElementById("notetext").value != ''){
 
 var i;
for (i = 0; i < localStorage.length; i++) { 
 if( localStorage.getItem(localStorage.key(i)) ==  document.getElementById("Titletext").value +  "1%^&?<>1"+document.getElementById("notetext").value){
 current=i;
 console.log("new current value "+current);
 break;
 }
 
}

 
 }else{
// current=0;
 
 }


}

function addval(){
console.log("inside addval() current val "+ current);
// updatecurrent();
if(current>=0&& localStorage.getItem(localStorage.key(current))!=null){
console.log("inside addval() if current val "+ current);
var str = localStorage.getItem(localStorage.key(current));
var rez = str.split("1%^&?<>1");


document.getElementById("Titletext").value = rez[0];
document.getElementById("notetext").value = rez[1];
}
}

function upd(){
if(document.getElementById("Titletext").value != 'Untitled' &&
 document.getElementById("notetext").value != ''){
localStorage.setItem(current, document.getElementById("Titletext").value +  "1%^&?<>1"+document.getElementById("notetext").value );
}
// localStorage.setItem(current,);

// console.log(localStorage.getItem(current));
}

function del(){
updatecurrent();
console.log("inside del() current val "+ current);
localStorage.removeItem(localStorage.key(current));
// 
document.getElementById("Titletext").value = 'Untitled';
document.getElementById("notetext").value = '';
prev();
// updatecurrent();
// console.log(current);
// localStorage.removeItem(localStorage.key(current+1));
// if(current>0)

// current++;
//addval();

console.log("inside del() if current val "+ current);




}

function add(){


 current++;
// curr();
document.getElementById("Titletext").value = "Untitled";
document.getElementById("notetext").value = "";
upd();
}
function prev(){
console.log("inside prev() current val "+ current);

updatecurrent();


console.log("inside prev() current val1 "+ current);
if(current>=0){
if((current-1)!=-1){

current--;
} 
 console.log("inside prev() if current val "+ current);
// curr();
//%localStorage.length;
addval();
}

}

function next(){
console.log("inside next() current val "+ current);
updatecurrent();
{
if(current<localStorage.length-1){

if(current==0&& current==localStorage.length-1){

}else{
 current++;
 }
console.log("inside next() if current val "+ current);
addval();
}
}
}

function search() {


    var searchbar, filter, ul, li, a, i,k;
    searchbar = document.getElementById("searchbar");
  
    filter = searchbar.value.toUpperCase();
  document.getElementById("mylist").innerHTML='';
// have to update the index also

    for (i = 0; i < localStorage.length; i++) {
       var str = localStorage.getItem(localStorage.key(i));
var rez = str.split("1%^&?<>1");
        if (rez[0].toUpperCase().indexOf(filter) > -1) {
           
          
           var node = document.createElement("LI");
    var textnode = document.createTextNode(rez[0]);
 node.setAttribute("onclick", "go("+i+");");
 
    node.appendChild(textnode);
    document.getElementById("mylist").appendChild(node);
    
  
        } 
    }
}

function go(a){
current = a;
addval();
}
