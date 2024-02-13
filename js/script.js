// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.


// creo un array di oggetti, ognuno dei quali ha come chiavi nome, ruolo e foto
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg",
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg",
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
];


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

// attraverso un ciclo for itero ogni elemento del mio array
for(let i = 0; i < team.length; i++) {

    // membro del team attuale
    const actualTeamMember = team[i];

    // per ogni oggetto, attraverso un ciclo for-in stampo tutte le informazioni dello stesso
    for(let key in actualTeamMember) {
        console.log(key + ": " + actualTeamMember[key]);
    }

}


// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva

// memorizzo in una costante l'elemento <ul> nel DOM
const listElement = document.querySelector("ul");

for(let i = 0; i < team.length; i++) {

    // membro del team attuale
    const actualTeamMember = team[i];
    // console.log("actualmember", actualTeamMember);

    // creo un elemento della lista
    const newListElement = document.createElement("li");
    listElement.append(newListElement);

    // creo un elemento per le informazioni
    const newInfoElement = document.createElement("div");
    newListElement.append(newInfoElement);
    // creo un elemento per l'immagine
    const imgElement = document.createElement("img");
    newListElement.append(imgElement);

    // per ogni oggetto, attraverso un ciclo for-in stampo tutte le informazioni dello stesso
    for(let key in actualTeamMember) {
        // se incontro la chiave "foto"
        if(key == "foto") {
            // prendo l'elemento immagine e inserisco come src il valore della proprietà
            imgElement.src = `./img/${actualTeamMember[key]}`;
        } else {
            // prendo l'elemento delle info e ci aggiungo i valori delle proprietà delle altre chiavi
            newInfoElement.innerHTML += `${key}: ${actualTeamMember [key]} <br>`;
        }
    }

}
