// Generare una griglia 6x6 (36 boxes), 
// ad ogni click parte una richiesta AJAX 
// che prende un numero random da 1 a 9 (scegliere API opportuna).
// Se è <= 5 il quadrato diventa giallo, 
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato.


$(document).on("click",".box",
    function() {
        var mySquare = $(this);

        if ((mySquare.hasClass("yellow") || mySquare.hasClass("green")) == false) {
            $.ajax(
                {
                    url: "https://flynn.boolean.careers/exercises/api/random/int",
                    method: "GET",
                    success: function (data, stato) {
                        var results = data.response;
                        if (results <= 5) {
                            mySquare.addClass("yellow");
                        } else {
                            mySquare.addClass("green");
                        }                     
                     

                        mySquare.children("span").text(data.response);
                    },
                    error: function (richiesta, stato, errori) {
                        alert("E' avvenuto un errore. " + errore);
                    }
                }
            );
        }
    }
);



