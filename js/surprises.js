const password = "wifeyy";


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





function checkPassword(){


let pass = prompt("Enter Secret Password ❤️");


if(pass === password){

return true;

}


alert("Wrong Password ❤️");

return false;


}





function openGift(i){



if(!checkPassword()){

return;

}



document.getElementById("popup").style.display="flex";


document.getElementById("title").innerHTML=
messages[i].title;


document.getElementById("message").innerHTML=
messages[i].text;



}






function showLock(){



if(!checkPassword()){

return;

}




document.getElementById("popup").style.display="flex";


document.getElementById("title").innerHTML=
"🎉 Final Surprise";



document.getElementById("message").innerHTML=`

My Bacha ❤️

<br><br>

The biggest gift isn't hidden inside this box...

<br><br>

It's YOU.

<br><br>

Thank you for coming into my life.

<br><br>

I Love You Forever ❤️

<br><br>

- Your Juhi

`;



}





function closePopup(){


document.getElementById("popup").style.display="none";


}