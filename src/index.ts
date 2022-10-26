
function teljesnev() {
    let teljesnev = document.getElementById("teljesnev")!.innerText;
    let regex = /(1,)/;
    if (!regex.exec(teljesnev)) {
        document.getElementById("teljesnevp")!.textContent = "A felhasználónévnek legalább 1 karakternek kell lennie!";
    }
}
function orszag() {
    let orszag = document.getElementById("orszag")!.innerText;
    let regex = /(1,)/;
    if (!regex.exec(orszag)) {
        document.getElementById("orszagp")!.textContent = "Az országnak legalább 1 karakternek kell lennie!";
    }
}
function varos() {
    let varos = document.getElementById("varos")!.innerText;
    let regex = /(1,)/;
    if (!regex.exec(varos)) {
        document.getElementById("varosp")!.textContent = "A városnak legalább 1 karakternek kell lennie!";
    }
}
function utcahazszam() {
    let utcahazszam = document.getElementById("utcahazszam")!.innerHTML;
    let regex = /[ ](1,)/;
    if (!regex.exec(utcahazszam)) {
        document.getElementById("utcahazszamp")!.textContent = "Az utcanévnek és házszámnak legalább 1 karakternek kell lennie!";
    }
}
function iranyitoszam() {
    let orszag = document.getElementById("orszag")!.innerText;
    let regex = /[A-Z0-9](1,)/;
    if (!regex.exec(orszag)) {
        document.getElementById("orszagp")!.textContent = "Az irányítószámnak legalább 1 karakternek kell lennie, csak nagybetűket és számokat tartalmazhat!";
    }
}
function bankkartyaszam() {
    let bankkartyaszam = document.getElementById("bankkartyaszam")!.innerText;
    let regex = /[0-9]|[-]|[0-9]|[-]|[0-9]|[-]|[0-9]/;
    if (!regex.exec(bankkartyaszam)) {
        document.getElementById("bankkartyaszamp")!.textContent = "A bankkártya számának xxxx-xxxx-xxxx-xxxx formátumban kell lennie";
    }
}
function ellenorzokod() {
    let ellenorzokod = document.getElementById("ellenorzokod")!.innerText;
    let regex = /(3,3)/;
    if (!regex.exec(ellenorzokod)) {
        document.getElementById("ellenorzokodp")!.textContent = "Az ellenőrzőkód csak 3 karakteres lehet!";
    }
}
function bankkartyanev() {
    let bankkartyanev = document.getElementById("bankkartyanev")!.innerText;
    let regex = /[a-zA-Z ](1,)/;
    if (!regex.exec(bankkartyanev)) {
        document.getElementById("bankkartyanevp")!.textContent = "A bannkártya tulajdonos neve legalább 1 karakternek legyen, és csak kis- és nagybetűket tartalmazhat!";
    }
}
function fizetesgomb() {
    document.getElementById("teljesnev")!.addEventListener("input", teljesnev);
    document.getElementById("orszag")!.addEventListener("input", orszag);
    document.getElementById("varos")!.addEventListener("input", varos);
    document.getElementById("utcahazszam")!.addEventListener("input", utcahazszam);
    document.getElementById("iranyitoszam")!.addEventListener("input", iranyitoszam);
    document.getElementById("bankkartyaszam")!.addEventListener("input", bankkartyaszam);
    document.getElementById("ellenorzokod")!.addEventListener("input", ellenorzokod);
    document.getElementById("bankkartyanev")!.addEventListener("input", bankkartyanev);
}



document.getElementById("fizetesgomb")!.addEventListener("click", fizetesgomb);

