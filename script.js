let string=""
let btn=document.querySelectorAll(".button, .op, .equal");
Array.from(btn).forEach((item)=>{
    item.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="CE"){
            string="";
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="="){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(e.target.innerHTML=="C"){
            string=string.slice(0,string.length-1);
            document.querySelector("input").value=string;
        }
        else{
            string+=e.target.innerHTML;
            document.querySelector("input").value=string;
        }
    })
})