// Your code here
function saturdayFun(thing = "roller-skate") {

 return `This Saturday, I want to ${thing}!`
}

function mondayWork(activity = "go to the office") {

    return `This Monday, I will ${activity}.`

}

function wrapAdjective(flair = "*"){

    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!` 
    
     }
}




// if (flair === "*") {
//            return  () =>  "You are *a hard worker*!"
// } else if (flair === "||") {
//            return  () =>  "You are ||a dedicated programmer||!"
// }