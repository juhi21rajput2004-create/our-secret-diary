const messages=[

{
title:"🌹 A Rose",
text:"If I could... I would give you a fresh rose every single day. ❤️"
},

{
title:"🤍 Hug",
text:"A virtual hug from your Wifeyy. Hold it tight forever."
},

{
title:"☕ Coffee Date",
text:"One day we'll sit together, drink coffee and laugh for hours."
},

{
title:"💍 Promise",
text:"No matter what happens... I'll always choose you."
},

{
title:"❤️ Love",
text:"My biggest surprise isn't this website... it's that I found YOU."
}

];

function openGift(i){

document.getElementById("popup").style.display="flex";

document.getElementById("title").innerHTML=messages[i].title;

document.getElementById("message").innerHTML=messages[i].text;

}

function closePopup(){

document.getElementById("popup").style.display="none";

}

function showLock(){

let pass=prompt("Enter Secret Password ❤️");

if(pass==="wifeyy"){

document.getElementById("popup").style.display="flex";

document.getElementById("title").innerHTML="🎉 Final Surprise";

document.getElementById("message").innerHTML=`

My Bacha ❤️

The biggest gift isn't hidden inside this box...

It's YOU.

Thank you for coming into my life.

I Love You Forever ❤️

- Your Juhi

`;

}else{

alert("Wrong Password ❤️");

}

}