import { Counter } from "./../models/counter.js"

window.addEventListener("load", function () {
    const monCompteur = new Counter();

    console.log("Valeur initiale :", monCompteur.value);

    monCompteur.incrementValue();
    monCompteur.incrementValue();
    console.log("Après 2 incrémentations :", monCompteur.value);

    monCompteur.decrementValue();
    console.log("Après 1 décrémentation :", monCompteur.value);
});
