const password = "wifeyy";


const messages=[


{
title:"🌹 A Rose",
text:"If I could... I would give you a fresh rose every single day. 🌹❤️Aur sirf ek rose hi nahi...Bacha, main tumhe bahut pasand karti hoon. 🥹❤️ Kabhi kabhi itna ki words hi nahi milte.Mera mann karta hai ki ek din tumhe properly propose karun. 🌹💍 Bilkul waise jaise maine apne mind mein socha hai... tumhari aankhon mein dekhkar, ek rose ke saath, aur sirf tumse itna kahun... 'Will you always be mine?'❤️Aur ek baat... mujhe tumhe bahut der tak hug karna hai. 🫂🤍 Itna ki us ek hug mein meri saari feelings tum tak pahunch jaayein, jo shayad main kabhi words mein nahi bata paungi.Mujhe nahi pata ki main ye sab kabhi tumse face to face bol paungi ya nahi... 🥺 Par agar kabhi himmat na bhi ho, to samajh lena ki meri har feeling is diary ke har page mein chhupi hui hai.I love you more than my words can ever explain. ❤️🌹"
},

{
title:"🤍 Hug",
text:"A virtual hug from your Wifeyy... 🫂❤️Kabhi kabhi bas itna sa mann karta hai... ki tumhare paas baithun, tumhe hug karun, apna sar tumhare shoulder par rakh doon... aur bina kuch kahe bas tumhare saath waqt ruk sa jaye. 🥹🤍Tumhari baahon mein hi mujhe sabse zyada sukoon milta hai... aur shayad wahi meri favourite place bhi hai. ❤️✨Until that day comes... keep this hug safe. It's filled with all my love, only for you. 🫶🌹"
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
text:"❤️Aur ek secret... jo shayad main kabhi face to face tumse bol hi na paun. 🥺🤍Kabhi kabhi bas tumhare itne kareeb aane ka mann karta hai ki saari baatein bina words ke hi samajh aa jaayein. ❤️Main bas woh beautiful moments tumhare saath feel karna chahti hoon, jo sirf do log ek dusre se sachcha pyaar karte hue feel karte hain. 🫶✨Aur pata hai... jab tumne pehli baar mere forehead par kiss kiya tha, aur meri neck par... woh feeling aaj bhi mere dil mein waise hi hai. 🥹💖 Aaj bhi us moment ko yaad karti hoon to automatically smile aa jaati hai aur butterflies feel hone lagti hain. 🦋❤️Shayad main kabhi itni himmat na juta paun ki ye sab tumse face to face keh saku... isliye is diary mein apna ye chhota sa secret chhod rahi hoon. 🌹Bas itna jaan lo... I want every expression of love with you, at the right time, because you're the only person with whom I want to create those beautiful memories. ❤️♾️"
},

{
title:"🎀♡ Somthing Special",
text:"Yr... 🥹❤️Mujhe woh sab yaad hai jab main tumhe pehli baar dekhi thi. 🥺✨ Mujhe to pata bhi nahi chala kab main tumse itna pyaar karne lag gayi. ❤️Har chiz par dhyan dena, 👀💕 tumhari care karna, 🤍 tumse baat karne ka chance dhoondhna, 📱😊 pata hi nahi chala ye sab kaise hote gaya... aur sach kahun to bahut achha hua ki ye sab hua. 🫶🌸Main bahut khush hoon tumhare saath. 🥹💖Bas ek chiz buri lagti hai... 😒🤏 Agar main gussa ho jaun, to mana liya karo na. 🥺❤️ Tum bhi gussa mat hua karo. Main tumhari hi to hoon... 🤍 To galti bhi to tumhari hui... simple si baat hai. 😌😂 Samjhte hi nahi ho!Bas thoda sa aur pyaar kiya karo, 💕 thoda sa aur pamper kiya karo, 🤗 aur kabhi kabhi bina reason ke tight hug bhi de diya karo. 🫂❤️LOVE YOU JAAN...🥹❤️🌍♾️"
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