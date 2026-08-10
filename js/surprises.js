const password = "wifeyy";


const messages=[


{
title:"🌹 A Rose",
text:"If I could... I would give you a fresh rose every single day. 🌹❤️Aur sirf ek rose hi nahi...Bacha, main tumhe bahut pasand karti hu. 🥹❤️ Kabhi kabhi itna ki words hi nahi milte us feeling ko express krne k liye.❤️Aur ek baat... mujhe tumhe bahut der tak hug karna hai. 🫂🤍I love you more than my words can ever explain. ❤️🌹"
},

{
title:"🤍 Hug",
text:"A virtual hug from your Wifeyy... 🫂❤️✨Until that day comes... keep this hug safe. It's filled with all my love, only for you. 🫶🌹"
},


{
title:"☕ Coffee Date",
text:"One day... just you and me. ❤️A cup of coffee, ☕ your hand in mine, 🤍 endless conversations, silly laughs, stolen smiles, and a moment we'll wish never ends. 🥹✨"
},


{
title:"💍 Promise",
text:"No matter what happens... I'll always choose you."
},


{
title:"❤️ Love",
text:"My biggest surprise isn't this website... it's that I found YOU."
},

{
title:"🤫🙊 Secret ",
text:"❤️ Aur ek chhoti si secret baat...Kabhi kabhi bas tumhare paas rehne ka mann karta hai, bina kuch kahe bhi sab kuch feel karne ka. 🥺🤍Tumhare saath bitaye hue chhote-chhote moments mere liye bahut special hain. ❤️Aur jab un moments ko yaad karti hoon, toh automatically smile aa jaati hai. 🥹🫶🏻🌹Bas itna sa...want to keep creating beautiful memories with you. ❤️♾️"},

{
title:"🎀♡ Somthing Special",
text:"Yr... 🥹❤️Mujhe woh sab yaad hai jab main tumhe pehli baar dekhi thi. 🥺✨ Mujhe to pata bhi nahi chala kab main tumse itna pyaar karne lag gayi. ❤️Har chiz par dhyan dena, 👀💕 tumhari care karna, 🤍 tumse baat karne ka chance dhoondhna, 📱😊 pata hi nahi chala ye sab kaise hote gaya... aur sach kahun to bahut achha hua ki ye sab hua. 🫶🌸Main bahut khush hoon tumhare saath. 🥹💖Bas ek chiz buri lagti hai... 😒🤏 Agar main gussa ho jaun, to mana liya karo na. 🥺❤️ Tum bhi gussa mat hua karo. Main tumhari hi to hoon... 🤍 To galti bhi to tumhari hui... simple si baat hai. 😌😂 Samjhte hi nahi ho! Bs thoda sa aur pyaar kiya karo, 💕 thoda sa aur pamper kiya karo, 🤗 aur kabhi kabhi bina reason ke tight hug bhi de diya karo. 🫂❤️LOVE YOU JAAN...🥹❤️🌍♾️"
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