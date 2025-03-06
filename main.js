import Ember from "./Ember.js";




let articleElem=document.querySelector("article")
const ember1 = new Ember("Jenő", 1977, 220, articleElem)
console.log(ember1)

/*
console.log(ember1.nev)
console.log(ember1.szulIdo)
console.log(ember1.magassag)
console.log(ember1.kor)
*/

console.log(ember1.getKor())
console.log(ember1.getNev())
//ember1.nev="Jolán"; //ha nem privát, át lehet írni
//console.log(ember1) 

/*
ember1.kor=11
console.log(ember1.kor)
nem éri el a privát adattagot, ezért a JS hozzáad egy publikusat - ejnye bejnye
*/

/*console.log(ember1)
ember1.setNev("Levente")
console.log(ember1.getNev())*/

const ember2 = new Ember("Jolán", 1978, 120, articleElem)