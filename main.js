// age=prompt('your age');
// age > 18 ? document.write(`<h1 style="color:red"> age : ${age} </h1>`): document.write(`<h1 style="color:yellow">age : ${age} </h1>`);
console.log('had%ceel','color:red; font-size:40px;');
let ob={
name:"hadeel",
age:20,
status:true,
fasd:{
hass:"ha",
chdhc:["ok","dhd","hdvces"],

}
}
console.log(ob ["name"]);
console.log(ob ["age"]);
console.log(ob ["status"]);
console.log(ob ["fasd"]["hass"]);
console.log(ob ["fasd"]["chdhc"][2]);
console.log(ob.age);
console.log(ob.name);
console.log(ob.status);
console.log(ob.fasd.chdhc);
console.log(hadd2);//undefind وبعد الكونسول دوت لوق بتم اعطائها قيمة عكس الليت(var hadd2;)لانه بيتم تعريفها فوق , فوق الكونسول دوت اللوق بيكون معرفة ; 
var hadd2="ede";
var no1=23;
var no2=2;
var st=true;
var numnam="hadeel";
console.log(no1	+ +numnam);
console.log(no1	+ numnam);
console.log(no1	- numnam);
console.log("------------------------------------");
console.log(no1	+ +no2);
console.log(no1	+ no2);
console.log(no1	- no2);
console.log("------------------------------------");
console.log(no1	+ +st);
console.log(no1	+ st );
console.log(no1	- st);
console.log(no1	+ numnam+ st  );
console.log(no1	+ st + numnam );

console.error("error");
let arr=[true,"cjdd",{hasd:"cksdanc",no:20}];
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==="object"){
        continue;
    }
    if(typeof arr[i]==="string"){
    document.write( `<h1 style="background-color:black; color:white; cursor:pointer;" id ="has" onclick="hello(this.id)">${arr[i]}</h1>`);

    }
    else{
        document.write( `<h1 style="background-color:black; color:white; cursor:pointer;" id ="hav" onclick="hello(this.id)">${arr[i]}</h1>`);

    }
}
function hello(id){
    document.getElementById(id).style.backgroundColor="red";

}   
var stats ="female";
if(stats=="female"){
    for(var i=0; i<20; i++){
        document.body.innerHTML+=`<h2>${i}</h2>` ;
    }
}

class h{
    constructor(id,ff,dhhdfhsa){
        this.id=id;
        this.ff=ff;
        this.dhhdfhsa=dhhdfhsa;
    }
    hello(){
        return `${this.id}`;
    }



}
let h1=new h(100,"hadeel",true)

document.write(h1.hello());

// console.log(hadd);
// let hadd="ede";

class x extends h{
    constructor(id,ff,dhhdfhsa,u){
        super(id,ff,dhhdfhsa);
        this.u=u;
        
    }
}
let x1=new x(12200,"hadeel",true,"dnfcn")

document.write(x1.hello());

var w =100;
console.log(typeof w.toString());
console.log(typeof 100..toString());

let e="11";
console.log(e.includes('1'));
document.write(`${e.repeat(100)}`);
let array=["hadeel","aseel","noor"];
array.unshift('malak','asmaa'); //بتضيف عناصر ببداية الاري
array.pop(); // بتحذف اخر عنصر بالاري
array.pop();
array.shift(); // بتحذف اول عنصر بالاري
array.push('ali');
array.splice(0,1,'alia');
array.splice(0,1); //حذف اول اندكس
array.splice(0,2); // حذف أول اندكسين 
array.push('ali','ahmad','qusai','easa');
console.log(array.join('-'));
console.log(2==="2");
console.log(2=="2");
// let role=prompt("what is your role ");
// switch(role){
//     case"admin":
//     console.log('admin');
//     break;
//    case"admin1":
//     console.log('admin1');
//     break;
//     default:
//         console.log('default');
// }

(function(){   //استدعاء الفنكشن من البداية 

    console.log("kvfnjdfv");
})();
function calc(...num){  // array 
    console.log(num); // view array

}
calc(100,3330,455);
let element= document.getElementById('second');
console.log(element.previousElementSibling);
console.log(element.nextElementSibling);
element.style.cssText=
`
cursor:pointer;
color:red;

`
// element.addEventListener("click",
// ()=>element.style.removeProperty('color'));
element.onclick = function (){
    element.classList.toggle("name");
}
// element.oncontextmenu = function (){
//     element.classList.remove("name");
// }

if(localStorage.length>0){
    document.body.style.backgroundColor=localStorage.color;
}
function changecolor(color){
    
    localStorage.setItem("color",color);
    document.body.style.backgroundColor=color;

}
function changeimg(src){
let im=document.getElementById('image');
im.src=src;


}
function scrollcha() {
    scroll(
        {
            left:0,
            top:0,
            behavior:"smooth"


        }

    )
}
// function scrollcha() {
//     if(scrolly=400){
//     scroll(0,0)

//     }

// }
console.table(["hadeel","aseel","shahed"]);
console.clear();
var text="hadeelallvahde";
// console.log(text.includes('e',13));
// console.log(text.indexOf('l',6));
// console.log(text.charAt(6));
// console.log(text.length);
// console.log(text.concat([' aseel','sherin']));
// console.log(text.endsWith('d',13));
// console.log(localStorage.key(0));
// console.log(localStorage.length);
// localStorage.removeItem('color');
// console.log(localStorage.key(0));
// console.log(localStorage.length);
// localStorage.clear();

// (function(){
//     if(confirm('are you hadeel?')){
// console.log("true");
// }
// else{
// console.log("false");
// }
// })();

// alert("Hello\nHow are you?");
let headin=document.createElement('h1');
headin.innerHTML='<p style="background-color: aqua; color:"rgb(1, 14, 13)" id="demo"> </p>'
document.body.appendChild(headin);

setInterval(function () {
const d = new Date();
document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}, 1000);
