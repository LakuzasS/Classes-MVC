import { Counter } from "./../models/counter.js"

window.addEventListener("load", function () {
    const monCompteur = new Counter();

    console.log("Valeur initiale :", monCompteur.getValue());

    monCompteur.incrementValue();
    monCompteur.incrementValue();
    console.log("Après 2 incrémentations :", monCompteur.getValue());

    monCompteur.decrementValue();
    console.log("Après 1 décrémentation :", monCompteur.getValue());
});
