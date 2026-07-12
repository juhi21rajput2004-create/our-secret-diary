// =======================================
// OUR MAGICAL LOVE DIARY ❤️
// Vintage Coffee Diary Book JS
// =======================================



const pagesContainer = document.getElementById("pages");




// ================================
// YOUR REASONS
// ================================


const reasons = [

"❤️ Because 5 September 2022 sirf ek date nahi hai... meri favourite beginning hai.",

"❤️ Because mujhe tum tab se pasand the jab mujhe ye bhi nahi pata tha ki tum bhi mujhe like karte ho.",

"❤️ Because tum sirf mere boyfriend nahi... meri safest place ho.",

"❤️ Because jab tum mujhe 'Meri wifey' bulate ho na... dil automatically smile karne lagta hai.",

"❤️ Because tumhara 'Bacha' bolna duniya ka sabse cute word lagta hai.",

"❤️ Because tum mujhe itna pareshan karte ho... aur mujhe pata hote hue bhi main jaan bujhkar pareshan hoti hoon. 😂",

"❤️ Because tumhare bina mera din complete nahi lagta.",

"❤️ Because tumhare Good Morning aur Good Night messages mere din ka best part hote hain.",

"❤️ Because tumhara support mujhe har mushkil me strong bana deta hai.",

"❤️ Because tum mujhe bina judge kiye samajhte ho.",

"❤️ Because tum mere har dream me ho.",

"❤️ Because tumhare saath future imagine karna mujhe bahut sukoon deta hai.",

"❤️ Because first hug ki feeling aaj bhi meri favourite memory hai.",

"❤️ Because first kiss sirf ek kiss nahi thi... meri life ki sabse beautiful memory thi.",

"❤️ Because jab tumne 'Chahoge Tum Jaisa Ban Jaunga' gaa kar bheja tha... us din mujhe aur bhi zyada pyaar ho gaya tha.",

"❤️ Because tum meri life ke sabse beautiful coincidence ho.",

"❤️ Because tumhare saath silence bhi comfortable lagta hai.",

"❤️ Because mujhe expensive gifts nahi chahiye... bas tumhara lifetime saath chahiye.",

"❤️ Because tumhare efforts mere liye duniya ke sabse precious gifts hain.",

"❤️ Because har din ek hi wish hoti hai... ki meri har subah aur har raat tumhare saath ho. ❤️","❤️ Because jab tum mujhe 'Pagal' bolte ho na... mujhe gussa kam aur pyaar zyada aata hai.",

"❤️ Because tumhare saath har chhoti si baat bhi special memory ban jaati hai.",

"❤️ Because mujhe tumhara mujhe pareshan karna secretly bahut pasand hai. 😂",

"❤️ Because tum jaante ho ki main nakhre karungi... phir bhi mujhe mana lete ho.",

"❤️ Because tum meri life ke best part ho. 🤍",

"❤️ Because tumhare bina har khushi thodi si adhoori lagti hai.",

"❤️ Because tumhari ek smile meri hundred tensions khatam kar deti hai.",

"❤️ Because jab tum kehte ho 'Main hoon na'... tab sach me dar khatam ho jata hai.",

"❤️ Because tum meri life ka sabse beautiful surprise ho.",

"❤️ Because tumhare saath future imagine karna mera favourite hobby hai.",

"❤️ Because mujhe hamara chhota sa ghar imagine karna bahut achha lagta hai. 🏡",

"❤️ Because main har trip tumhare saath hi karna chahti hoon. ✈️",

"❤️ Because mujhe tumhare surname ke saath apna naam imagine karke smile aa jaati hai. 🤭",

"❤️ Because tumhare saath buddhe hona bhi exciting lagta hai. ❤️",

"❤️ Because mujhe tumhare saath chai peete hue baarish dekhni hai. ☕🌧️",

"❤️ Because mujhe tumhare saath har birthday celebrate karna hai. 🎂",

"❤️ Because mujhe har festival me tumhara saath chahiye.",

"❤️ Because mujhe har success ke baad sabse pehle tumhe hug karna hai.",

"❤️ Because mujhe pata hai life perfect nahi hogi... lekin tum hoge to sab perfect lagega.",

"❤️ Because mujhe sirf ek cheez chahiye... aur wo ho tum. Forever. ❤️","❤️ Because jab tum mujhe 'Wifeyy' bulate ho na... dil ko lagta hai ki meri duniya complete hai.",

"❤️ Because 'Wifeyy' sirf ek nickname nahi... meri favourite feeling hai.",

"❤️ Because jab bhi tum 'Wifeyy' likhte ho, main bina wajah smile karne lagti hoon.",

"❤️ Because mujhe tumhari future wife banne ka khayal hi butterflies de deta hai. 🦋",

"❤️ Because tum mujhe sirf girlfriend ki tarah nahi, apni life partner ki tarah treat karte ho.",

"❤️ Because mujhe tumhare saath sirf aaj nahi... poori zindagi spend karni hai.",

"❤️ Because tumhare saath ek chhota sa ghar, bahut saari hasi aur lifetime memories banana chahti hoon. 🏡❤️",

"❤️ Because tumhara 'Wifeyy' bolna mujhe har baar future ki ek pyari si jhalak dikha deta hai.",

"❤️ Because mujhe pata hai ki chahe kitni bhi problems aaye, hum dono saath milkar sab handle kar lenge.",

"❤️ Because Mr. & Mrs. banne ka dream sirf ek dream nahi... meri favourite wish hai. 💍❤️",

"❤️ Because jab tum 'Love You Wifeyy ❤️' bolte ho na... uske baad mujhe aur kuch sunna hi nahi hota.",

"❤️ Because tumhare 'I Love You Bacha' me duniya ka sabse pyara feeling hota hai.",

"❤️ Because tum mujhe kabhi Wifeyy, kabhi Bacha aur kabhi Pagal bolte ho... aur mujhe teeno hi bahut pasand hain. 🤍",

"❤️ Because tumhara 'Kya kar rahi ho Bacha?' message mera favourite notification hota hai.",

"❤️ Because jab tum bina reason 'Miss You' bol dete ho... mera dil literally happy dance karta hai. ❤️",

"❤️ Because tum mujhe jitna pareshan karte ho... utna hi pyaar bhi karte ho. 😂",

"❤️ Because tumhare saath har fight ke baad aur bhi zyada pyaar ho jata hai.",

"❤️ Because mujhe tumhare nakhre bhi pasand hain aur tumhari care bhi.",

"❤️ Because jab tum mujhe 'Meri Wifeyy' bolte ho... tab future aur bhi beautiful lagta hai.",

"❤️ Because tum mere liye sirf boyfriend nahi... meri favourite aadat ho.",

"❤️ Because tumhare bina chai bhi adhoori lagti hai. ☕❤️",

"❤️ Because mujhe tumhare saath rainy walks karni hain. 🌧️",

"❤️ Because mujhe tumhare saath har Sunday lazy morning spend karni hai. 🤍",

"❤️ Because mujhe tumhare saath grocery shopping bhi date lagegi. 😂",

"❤️ Because mujhe tumhare saath kitchen me bina reason dance karna hai. 💃",

"❤️ Because mujhe tumhare saath duniya ghoomni hai... lekin sabse pehle tumhara haath pakadkar zindagi chalni hai. ✈️❤️",

"❤️ Because mujhe pata hai tum hamesha mera support system rahoge.",

"❤️ Because tum meri har success me mujhse bhi zyada khush hote ho.",

"❤️ Because jab main overthink karti hoon, tum mujhe patiently samjhate ho.",

"❤️ Because meri favourite love story... hum dono ki hai. ❤️"
,

"❤️ Because mujhe tumhare saath sirf relationship nahi... poori life spend karni hai.",

"❤️ Because tum mere favourite insaan ho, aur hamesha rahoge.",

"❤️ Because mujhe har subah tumhara 'Good Morning Wifeyy ❤️' sunna hai.",

"❤️ Because mujhe har raat tumhare 'Good Night Bacha ❤️' ke bina neend nahi aayegi.",

"❤️ Because mujhe tumhare saath duniya ki har jagah travel karna hai. ✈️",

"❤️ Because mujhe tumhare saath pahadon ki thand bhi pasand hogi aur beaches ki garmi bhi.",

"❤️ Because mujhe tumhare saath random long drives par jaana hai.",

"❤️ Because mujhe tumhare saath baarish me bina umbrella ke chalna hai. 🌧️❤️",

"❤️ Because mujhe tumhare saath ek chhota sa cute ghar banana hai. 🏡",

"❤️ Because us ghar me sirf pyaar, hasi aur hum dono honge.",

"❤️ Because mujhe har success aur har failure me tumhara haath pakadna hai.",

"❤️ Because jab life mushkil hogi tab bhi main sirf tumhare saath rehna chahti hoon.",

"❤️ Because tum sirf mere present nahi... mera future bhi ho.",

"❤️ Because Mr. & Mrs. banna mera favourite dream hai. 💍",

"❤️ Because mujhe tumhare surname ke saath apna naam bahut achha lagta hai. 🤍",

"❤️ Because mujhe hamesha tumhari Wifeyy banke rehna hai.",

"❤️ Because tum mere Bacha ho... aur hamesha rahoge. ❤️",

"❤️ Because agar mujhe dobara life mile... to main fir se sirf tumhe hi choose karungi.",

"❤️ Because meri har dua me tum ho.",

"❤️ Because I Love You Today, Tomorrow, Forever... My Bacha, My Rashmalai, My Sweetheart, My Home. ❤️",

"❤️ Because tumhari hasi meri favourite melody hai.",

"❤️ Because tumhare saath har ordinary day bhi extraordinary lagta hai.",

"❤️ Because tum meri har prayer ka sabse khoobsurat answer ho.",

"❤️ Because tumhare kandhe par sir rakhte hi duniya ki saari tension khatam ho jaati hai.",

"❤️ Because tum meri life ki sabse beautiful blessing ho.",

"❤️ Because tumhare saath har memory lifetime treasure ban jaati hai.",

"❤️ Because tum meri favourite hello aur sabse mushkil goodbye ho.",

"❤️ Because tumhare saath har sapna aur bhi beautiful lagta hai.",

"❤️ Because tum mere soulmate, meri peace aur mera home ho. ❤️",

"❤️ Because no matter what happens... I will always choose you, today, tomorrow and forever. ❤️"


];



// ================================
// CREATE PAGES
// ================================


reasons.forEach((text,index)=>{


let page=document.createElement("div");


page.classList.add(
"page",
"reason-page"
);



page.innerHTML=`

<div class="ribbon"></div>


<h2>
${index+1}
</h2>


<p>
${text}
</p>


<div class="page-number">

${index+1}

</div>

`;



pagesContainer.appendChild(page);



});






// ================================
// INITIALIZE BOOK
// ================================

const isMobile = window.innerWidth <= 700;

const book = new St.PageFlip(
    document.getElementById("book"),
    {

       
width: isMobile ? 320 : 310,
height: isMobile ? 450 : 430,
        size: isMobile ? "stretch" : "fixed",

        minWidth:150,
        maxWidth:310,

        minHeight:210,
        maxHeight:430,

        showCover:true,

        mobileScrollSupport:false,

        maxShadowOpacity:0.5,

        flippingTime:1200,

        drawShadow:true,

        usePortrait:false

    }
);






// LOAD ALL PAGES


book.loadFromHTML(

document.querySelectorAll(".page")

);





// ================================
// SOUND EFFECT OPTIONAL
// ================================

const pageSound = document.getElementById("pageSound");


book.on("flip",()=>{

    pageSound.currentTime = 0;

    pageSound.play();

});




// ================================
// KEYBOARD CONTROL
// ================================


document.addEventListener(
"keydown",
(e)=>{


if(e.key==="ArrowRight")
{

book.flipNext();

}



if(e.key==="ArrowLeft")
{

book.flipPrev();

}


}
);


// ===========================
// ROMANTIC MUSIC 🎵
// ===========================


const music =
document.getElementById("bgMusic");


const musicBtn =
document.getElementById("musicBtn");


let playing=false;
// Auto Play on Page Load
window.addEventListener("load", () => {

    music.volume = 0.35; // Soft Volume

    music.play()
        .then(() => {

            playing = true;

            musicBtn.innerHTML = "⏸ Pause Music ❤️";

        })
        .catch(() => {

            // Browser blocked autoplay

        });

});


musicBtn.onclick=function(){


if(!playing){


music.play();


musicBtn.innerHTML=
"⏸ Pause Music ❤️";


playing=true;


}

else{


music.pause();


musicBtn.innerHTML=
"🎵 Love Music";


playing=false;


}

};




// ===========================
// FALLING HEARTS ❤️
// ===========================


const heartBox =
document.querySelector(".hearts");



setInterval(()=>{


let heart=document.createElement("span");


heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"%";



heart.style.animationDuration =
(5+Math.random()*5)+"s";



heartBox.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);



},500);






// ===========================
// GOLDEN SPARKLES ✨
// ===========================


const sparkleBox =
document.querySelector(".sparkles");



setInterval(()=>{


let star=document.createElement("span");


star.style.left =
Math.random()*100+"%";



sparkleBox.appendChild(star);



setTimeout(()=>{

star.remove();

},5000);



},300);






// ===========================
// COVER OPEN 📖
// ===========================


const cover =
document.querySelector(".cover");


cover.addEventListener("click",()=>{


cover.classList.add("open");


});