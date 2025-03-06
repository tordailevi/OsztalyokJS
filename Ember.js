    export default class Ember{
        /* privát adattagok - # */
        #szulIdo
        #kor
        #nev
        constructor(nev, szulIdo, magassag, szuloElem){
            /* a this arra az objektum példányra mutat, amelyiket létrehoztuk, a konkrét egyedre*/
            this.#nev=nev;
            this.#szulIdo=szulIdo;
            this.magassag=magassag;
            this.szuloElem=szuloElem;
            this.getKor();
            this.megjelenit();
            //console.log(this.kor);
        }
        /* gettert amivel lekérdezzük a kor értékét*/
        /* tagfüggvények elé nem kell a function*/
        getKor(){
            const d=new Date();
            let year=d.getFullYear();
            this.#kor=year-this.#szulIdo;
            return this.#kor;
        }

        setNev(nev){
            this.#nev=nev;
            // ellenőrzött névadáshoz, hogy pl. csak férfi nevet adhassanak meg
        }

        getNev(){
            return this.#nev;
        }

        megjelenit(){
            let html=
                `
                <div class="ember">
                    <h2>${this.#nev}</h2>
                    <p>${this.#szulIdo}</p>
                    <p>${this.magassag}</p>
                    <p>${this.#kor}</p>
                </div> 
                `
                this.szuloElem.innerHTML+=html;
        }
    }

    