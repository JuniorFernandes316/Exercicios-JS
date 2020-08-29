



function temHabilidade(skills) {
    for(var i = 0; i < skills.length; i++){
    if(skills.indexOf("javascript") == i){
    return true
} else {
    return false
}
    }
}

var skills = ["javascript", "react", "react Native"]
temHabilidade(skills)