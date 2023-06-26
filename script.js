// DATI DEI MEMBRI DEL TEAM
const teamMembers = [
{
name: "Wayne Barnett",
role: "Founder & CEO",
photo: "img/wayne-barnett-founder-ceo.jpg",
},
{
name: "Angela Caroll",
role: "Chief Editor",
photo: "img/angela-caroll-chief-editor.jpg",
},
{
name: "Walter Gordon",
role: "Office Manager",
photo: "img/walter-gordon-office-manager.jpg",
},
{
name: "Angela Lopez",
role: "Social Media Manager",
photo: "img/angela-lopez-social-media-manager.jpg",
},
{
name: "Scott Estrada",
role: "Developer",
photo: "img/scott-estrada-developer.jpg",
},
{
name: "Barbara Ramos",
role: "Graphic Designer",
photo: "img/barbara-ramos-graphic-designer.jpg",
},
];

// FUNZIONE PER STAMPARE LE INFORMAZIONI DEI MEMBRI DEL TEAM SU DOM
function stampaMembriTeam() {
const container = document.getElementById("team-container");

// ITERA ATTRAVERSO I MEMBRI DEL TEAM
for (let i = 0; i < teamMembers.length; i++) {
const member = teamMembers[i];

// CREA UN ELEMENTO PARAGRAFO PER OGNI MEMBRO DEL TEAM
const memberParagraph = document.createElement("p");

// CREA UN ELEMENTO IMMAGINE PER LA FOTO DEL MEMBRO
const memberImage = document.createElement("img");
memberImage.src = member.photo;

// CREA UNA STRINGA CON LE INFORMAZIONI DEL MEMBRO
const memberInfo = `Nome: ${member.name}, Ruolo: ${member.role}`;

// IMPOSTA IL TESTO DEL PARAGRAFO CON LE INFORMAZIONI DEL MEMBRO
memberParagraph.textContent = memberInfo;

// AGGIUNGI L'IMMAGINE E IL PARAGRAFO AL CONTAINER
container.appendChild(memberImage);
container.appendChild(memberParagraph);
}
}

// CHIAMATA ALLA FUNZIONE PER STAMPARE I MEMBRI DEL TEAM
stampaMembriTeam();
