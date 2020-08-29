var usuarios = [
    {
        nome:"Diego",
        habilidades: ["Javascript", "react", "Redux"]
},
{
        nome:"Gabriel",
        habilidades:["VueJS", "Ruby on Rails", "Elixir"]
}
];

function usuarySkills (){
    for (skills of usuarios){
     // console.log("O "+skills.nome+" possui as habilidades: "+(skills.habilidades))
     console.log(`O ${skills.nome} possui as habilidades: ${skills.habilidades}`)
    }
}
usuarySkills()