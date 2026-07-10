function sendLetter(){


let title =
document.getElementById("title").value.trim();


let message =
document.getElementById("message").value.trim();



if(title==="" || message===""){


alert("Please write something ❤️");

return;


}



let date =
new Date().toLocaleString();





// ===============================
// SAVE LETTER IN BROWSER
// ===============================


let letters =
JSON.parse(localStorage.getItem("secretLetters"))
|| [];



letters.push({


title:title,


message:message,


date:date


});



localStorage.setItem(

"secretLetters",

JSON.stringify(letters)

);






// ===============================
// SEND LETTER TO EMAIL
// USING WEB3FORMS
// ===============================


fetch("https://api.web3forms.com/submit",{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({


access_key:"6d82e8fb-e6fc-470d-8a9c-21ebcdf45250",



subject:"💌 New Secret Letter From Diary ❤️",



from_name:"Our Secret Diary",



title:title,



message:message,



date:date


})


})



.then(response=>response.json())



.then(data=>{


if(data.success){


alert(
"Your secret letter is saved ❤️"
);



document.getElementById("title").value="";

document.getElementById("message").value="";


}

else{


alert(
"Letter saved but email could not be sent ❤️"
);


}



})



.catch(error=>{


console.log(error);


alert(
"Something went wrong while sending letter"
);



});



}