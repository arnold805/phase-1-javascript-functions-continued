function saturdayFun(a = "roller-skate") {
    return `This Saturday, I want to ${a}!`
}

function mondayWork(b = "go to the office") {
    return `This Monday, I will ${b}.`
}

function wrapAdjective(flair = "*"){
    return function(adj = 'special'){
        return `You are ${flair}${adj}${flair}!`
    }
}