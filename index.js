var body=document.querySelector("body");
var buttons=document.querySelectorAll("button");
var colorCode=document.getElementById("btn");
var arrayButtons=Array.from(buttons);
arrayButtons.forEach(btn=>{
    btn.addEventListener("click",(e)=>{
        var keys=e.target.innerHTML;
        body.style.backgroundColor=keys;
        var r=Math.round(Math.random()*255);
        var g=Math.round(Math.random()*255);
        var b=Math.round(Math.random()*255);
        if(keys=="Random")
        {
            keys = `${r},${g},${b}`;
            body.style.backgroundColor=`rgb(${r},${g},${b})`;
        }
        colorCode.value="rgb("+keys+")";
    });
});