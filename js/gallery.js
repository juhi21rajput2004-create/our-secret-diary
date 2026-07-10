const memories = [

"❤️ 5 September 2022... the day everything started.",
"❤️ The first time we talked.",
"❤️ The day I realized I liked you.",
"❤️ When you first called me Bacha.",
"❤️ When you called me Meri Pari.",
"❤️ Our first Good Morning.",
"❤️ Our first Good Night.",
"❤️ The first time you made me smile without trying.",
"❤️ The first long conversation.",
"❤️ When we started talking every day.",

"❤️ Our first late-night chat.",
"❤️ The first time I missed you.",
"❤️ When you made me laugh the hardest.",
"❤️ The first selfie we shared.",
"❤️ Our first cute fight.",
"❤️ The first time we said sorry.",
"❤️ The first time you cared for me.",
"❤️ The first time you understood my silence.",
"❤️ The first surprise you gave me.",
"❤️ The first time I felt safe with you.",

"❤️ Our first hug.",
"❤️ Our first kiss.",
"❤️ The first time you held my hand.",
"❤️ Our first romantic moment.",
"❤️ The first time you sang for me.",
"❤️ 'Chahoge Tum Jaisa Ban Jaunga' will always be special.",
"❤️ Every Good Morning from you.",
"❤️ Every Good Night from you.",
"❤️ Every random call.",
"❤️ Every random text.",

"❤️ Every time you said Miss You.",
"❤️ Every time you called me Wifeyy.",
"❤️ Every time you called me Pagal.",
"❤️ Every time you called me Sweetheart.",
"❤️ Every time you called me Rashmalai.",
"❤️ Every smile because of you.",
"❤️ Every laugh because of you.",
"❤️ Every silly conversation.",
"❤️ Every overthinking you fixed.",
"❤️ Every moment you stayed.",

"❤️ Every hug I imagine.",
"❤️ Every dream with you.",
"❤️ Every future plan.",
"❤️ Every long drive dream.",
"❤️ Every rainy walk dream.",
"❤️ Every cup of tea together.",
"❤️ Every birthday together.",
"❤️ Every festival together.",
"❤️ Every little date.",
"❤️ Every movie night.",

"❤️ Every song reminds me of you.",
"❤️ Every memory feels magical.",
"❤️ Every heartbeat whispers your name.",
"❤️ Every promise matters.",
"❤️ Every effort of yours.",
"❤️ Every caring message.",
"❤️ Every smile of yours.",
"❤️ Every photo in my heart.",
"❤️ Every moment of us.",
"❤️ Every day I choose you.",

"❤️ Thank you for understanding me.",
"❤️ Thank you for supporting me.",
"❤️ Thank you for believing in me.",
"❤️ Thank you for accepting me.",
"❤️ Thank you for loving me.",
"❤️ Thank you for being patient.",
"❤️ Thank you for being mine.",
"❤️ Thank you for every laugh.",
"❤️ Thank you for every hug.",
"❤️ Thank you for every memory.",

"❤️ One day our little home.",
"❤️ One day morning tea together.",
"❤️ One day grocery shopping together.",
"❤️ One day cooking together.",
"❤️ One day travelling together.",
"❤️ One day growing old together.",
"❤️ One day celebrating anniversaries.",
"❤️ One day watching sunsets together.",
"❤️ One day watching sunrises together.",
"❤️ One day holding hands forever.",

"❤️ I love your smile.",
"❤️ I love your care.",
"❤️ I love your voice.",
"❤️ I love your eyes.",
"❤️ I love your heart.",
"❤️ I love your kindness.",
"❤️ I love your patience.",
"❤️ I love your hugs.",
"❤️ I love your love.",
"❤️ I love everything about you.",

"❤️ You are my favourite person.",
"❤️ You are my safe place.",
"❤️ You are my peace.",
"❤️ You are my happiness.",
"❤️ You are my home.",
"❤️ You are my comfort.",
"❤️ You are my forever.",
"❤️ You are my soulmate.",
"❤️ You are my future.",
`💛 Secret Reward ❤️

Congratulations Bacha... 🥹

Tumne meri saari memories unlock kar li...

Aur isse dekhkar mujhe itni khushi ho rahi hai ki words me describe hi nahi kar sakti. ❤️

Ab meri ek chhoti si wish suno...

Main tumhare paas aana chahti hoon...

Tumhara haath pakadna chahti hoon...

Tumhe bahut tight hug karna chahti hoon... 🤍

Phir tumhari aankhon me dekh kar smile karna chahti hoon...

Aur...

Main tumko kiss karna chahti hoon... 😘💋

Forehead Kiss ❤️

Nose Kiss 🤭

Cheek Kiss 😘

Aur ek pyara sa long kiss sirf mere Bacha ke liye... 💋

Promise na...

Bahut jaldi milenge.

Miss You So Much...

I Love You Infinity ♾️❤️

Forever Your Wifeyy ❤️`
];
// ============================
// Gallery
// ============================

const jar = document.getElementById("jar");
const popup = document.getElementById("popup");
const title = document.getElementById("memoryTitle");
const text = document.getElementById("memoryText");
const closeBtn = document.querySelector(".close");
const counter = document.getElementById("count");

// ============================
// Counter
// ============================

let found = 0;
let opened = [];

// ============================
// Create 100 Hearts
// ============================

for(let i=1;i<=100;i++){

    const heart=document.createElement("div");

    heart.className="heart";

    // Last heart golden
    if(i===100){

        heart.classList.add("golden");
        heart.innerHTML="💛";

    }else{

        heart.innerHTML="❤️";

    }

    heart.style.left=Math.random()*85+"%";
    heart.style.top=Math.random()*88+"%";

    heart.style.animationDelay=(Math.random()*4)+"s";

    heart.dataset.id=i;

    heart.addEventListener("click",function(){

        openMemory(i);

    });

    jar.appendChild(heart);

}

// ============================
// Open Memory
// ============================

function openMemory(id){

    if(!opened.includes(id)){

        opened.push(id);

        found++;

        counter.innerHTML=found;

    }

    title.innerHTML="❤️ Memory #"+id;

    if(typeof memories !== "undefined" && memories[id-1]){

        text.innerHTML=memories[id-1];

    }else{

        text.innerHTML="Memory not found ❤️";

    }

    popup.style.display="flex";

}

// ============================
// Close Popup
// ============================

closeBtn.onclick=function(){

    popup.style.display="none";

}

window.onclick=function(e){

    if(e.target===popup){

        popup.style.display="none";

    }

}