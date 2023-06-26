// DATI DEI MEMBRI DEL TEAM
const teamMembers = [
{
name: "Wayne Barnett",
role: "Founder & CEO",
photo: "wayne-barnett-founder-ceo.jpg",
},
{
name: "Angela Caroll",
role: "Chief Editor",
photo: "angela-caroll-chief-editor.jpg",
},
{
name: "Walter Gordon",
role: "Office Manager",
photo: "walter-gordon-office-manager.jpg",
},
{
name: "Angela Lopez",
role: "Social Media Manager",
photo: "angela-lopez-social-media-manager.jpg",
},
{
name: "Scott Estrada",
role: "Developer",
photo: "scott-estrada-developer.jpg",
},
{
name: "Barbara Ramos",
role: "Graphic Designer",
photo: "barbara-ramos-graphic-designer.jpg",
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

// CREA UNA STRINGA CON LE INFORMAZIONI DEL MEMBRO
const memberInfo = `Nome: ${member.name}, Ruolo: ${member.role}, Immagine: ${member.photo}`;

// IMPOSTA IL TESTO DEL PARAGRAFO CON LE INFORMAZIONI DEL MEMBRO
memberParagraph.textContent = memberInfo;

// AGGIUNGI IL PARAGRAFO AL CONTAINER
container.appendChild(memberParagraph);
}
}

// CHIAMATA ALLA FUNZIONE PER STAMPARE I MEMBRI DEL TEAM
stampaMembriTeam();
