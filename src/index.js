"use strict";
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("teljesnev").addEventListener("input", teljesnev);
    document.getElementById("orszag").addEventListener("input", orszag);
    document.getElementById("varos").addEventListener("input", varos);
    document.getElementById("utcahazszam").addEventListener("input", utcahazszam);
    document.getElementById("iranyitoszam").addEventListener("input", iranyitoszam);
    document.getElementById("bankkartyaszam").addEventListener("input", bankkartyaszam);
    document.getElementById("ellenorzokod").addEventListener("input", ellenorzokod);
    document.getElementById("bankkartyanev").addEventListener("input", bankkartyanev);
    function teljesnev() {
        let teljesnev = document.getElementById("teljesnev").value;
        let regex = /(?=.*\d)/;
        if (!regex.exec(teljesnev)) {
            document.getElementById("teljesnevp").textContent = "A felhasználónévnek legalább 1 karakternek kell lennie!";
            console.log("a");
        }
        else {
            if (document.body.contains(document.getElementById("teljesnevp"))) {
                document.getElementById("teljesnevp").remove();
                console.log("b");
            }
        }
    }
    function orszag() {
        let orszag = document.getElementById("orszag").value;
        let regex = /(1,)/;
        if (!regex.exec(orszag)) {
            document.getElementById("orszagp").value = "Az országnak legalább 1 karakternek kell lennie!";
        }
    }
    function varos() {
        let varos = document.getElementById("varos").value;
        let regex = /(1,)/;
        if (!regex.exec(varos)) {
            document.getElementById("varosp").value = "A városnak legalább 1 karakternek kell lennie!";
        }
    }
    function utcahazszam() {
        let utcahazszam = document.getElementById("utcahazszam").value;
        let regex = /[ ](1,)/;
        if (!regex.exec(utcahazszam)) {
            document.getElementById("utcahazszamp").value = "Az utcanévnek és házszámnak legalább 1 karakternek kell lennie!";
        }
    }
    function iranyitoszam() {
        let orszag = document.getElementById("iranyitoszam").value;
        let regex = /[A-Z0-9](1,)/;
        if (!regex.exec(orszag)) {
            document.getElementById("iranyitoszamp").value = "Az irányítószámnak legalább 1 karakternek kell lennie, csak nagybetűket és számokat tartalmazhat!";
        }
    }
    function bankkartyaszam() {
        let bankkartyaszam = document.getElementById("bankkartyaszam").value;
        let regex = /[0-9]|[-]|[0-9]|[-]|[0-9]|[-]|[0-9]/;
        if (!regex.exec(bankkartyaszam)) {
            document.getElementById("bankkartyaszamp").value = "A bankkártya számának xxxx-xxxx-xxxx-xxxx formátumban kell lennie";
        }
    }
    function ellenorzokod() {
        let ellenorzokod = document.getElementById("ellenorzokod").value;
        let regex = /(3,3)/;
        if (!regex.exec(ellenorzokod)) {
            document.getElementById("ellenorzokodp").value = "Az ellenőrzőkód csak 3 karakteres lehet!";
        }
    }
    function bankkartyanev() {
        let bankkartyanev = document.getElementById("bankkartyanev").value;
        let regex = /[a-zA-Z ](1,)/;
        if (!regex.exec(bankkartyanev)) {
            document.getElementById("bankkartyanevp").value = "A bannkártya tulajdonos neve legalább 1 karakternek legyen, és csak kis- és nagybetűket tartalmazhat!";
        }
    }
    function fizetesgomb() {
        teljesnev();
        orszag();
        varos();
        utcahazszam();
        iranyitoszam();
        bankkartyaszam();
        ellenorzokod();
        bankkartyanev();
    }
    document.getElementById("fizetesgomb").addEventListener("click", fizetesgomb);
});
