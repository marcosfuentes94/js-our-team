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

function stampaMembriTeam() {
const container = document.getElementById("team-container");

// ITERA ATTRAVERSO I MEMBRI DEL TEAM
for (let i = 0; i < teamMembers.length; i++) {
const member = teamMembers[i];

// CREA UN ELEMENTO DIV PER LA CARD DEL MEMBRO
const memberCard = document.createElement("div");
memberCard.className = "team-member-card";

// CREA UN ELEMENTO IMMAGINE PER LA FOTO DEL MEMBRO
const memberImage = document.createElement("img");
memberImage.src = member.photo;

// CREA UN ELEMENTO PARAGRAFO PER IL NOME DEL MEMBRO
const memberName = document.createElement("p");
memberName.className = "member-name";
memberName.textContent = member.name;

// CREA UN ELEMENTO PARAGRAFO PER IL RUOLO DEL MEMBRO
const memberRole = document.createElement("p");
memberRole.className = "member-role";
memberRole.textContent = member.role;

// AGGIUNGI L'IMMAGINE, IL NOME E IL RUOLO ALLA CARD DEL MEMBRO
memberCard.appendChild(memberImage);
memberCard.appendChild(memberName);
memberCard.appendChild(memberRole);

// AGGIUNGI LA CARD DEL MEMBRO AL CONTAINER
container.appendChild(memberCard);
}
}

// CHIAMATA ALLA FUNZIONE PER STAMPARE I MEMBRI DEL TEAM
stampaMembriTeam();
