
// let colors=["green","white","yellow","pink","chocolate","brown","red","lightgreen","blue"];

// let change=document.getElementById("change");
// change.addEventListener("click",()=>{
//     let random=Math.floor(Math.random()*colors.length);
//     div.style.backgroundColor=colors[random];
// });

const display=document.getElementById("displaycontent");

function addtodisplay(input){
    display.value+=input;
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error"
    }
}
function cleardisplay(){
    display.value= "";
}
function cleardisplaynumber(){
    display.value= display.value.toString().split('').slice(0, -1).join('');
}