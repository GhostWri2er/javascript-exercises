function getComputerChoice () {
    
    let choise = Math.floor(Math.random()*3)
    
    if (choise === 0) {
        return 'Камень'
    } else if (choise === 1) {
        return 'Ножницы'
    } else {
        return 'Бумага'
    }
    
}

getComputerChoice(Math.round(Math.random()))

for(let i = 0; i <= 3; i++) {
    let choiseHuman = prompt('Камень, ножницы, бумага?').toLowerCase()
    getHumanChoice(choiseHuman);
}


let counterComp = 0;
let counterHuman = 0;


function getHumanChoice (choiseHuman, counterComp, counterHuman) {
    let computerChoise = getComputerChoice().toLowerCase()
    
    if (choiseHuman === computerChoise) {
        console.log('Ничья')
        return 'Ничья'
    } else if (choiseHuman === 'камень' && computerChoise === 'бумага') {
        console.log('Вы проиграли')
        counterComp++
        console.log('Счет: у вас: ' + counterHuman + 'У компа: ' + counterComp);
        
        if(counterComp === 3) console.log('Вы проиграли счет: ' + counterComp + ':' + counterHuman);
        counterComp = 0;
        counterHuman = 0;
         
        return  'Вы проиграли'
    } else if (choiseHuman === 'бумага' && computerChoise === 'ножницы') {
        console.log('Вы проиграли')
        counterComp++
        console.log('Счет: у вас: ' + counterHuman + 'У компа: ' + counterComp);
        
       if(counterComp === 3) console.log('Вы проиграли счет: ' + counterComp + ':' + counterHuman)
        counterComp = 0;
        counterHuman = 0;
        return 'Вы проиграли'
    } else if (choiseHuman === 'ножницы' && computerChoise === 'камень') {
        console.log('Вы проиграли')
        counterComp++
        console.log('Счет: у вас: ' + counterHuman + 'У компа: ' + counterComp);
        
        if(counterComp === 3) console.log('Вы проиграли счет: ' + counterComp + ':' + counterHuman);
        counterComp = 0;
        counterHuman = 0;
        return 'Вы проиграли'
    }  else if (choiseHuman === 'бумага' && computerChoise === 'камень') {
        console.log('Вы выиграли')
        counterHuman++
        console.log('Счет: у вас: ' + counterHuman + 'У компа: ' + counterComp);
        
        if(counterComp === 3) console.log('Вы выиграли счет: ' + counterHuman + ':' + counterComp);
        counterComp = 0;
        counterHuman = 0;
        return  'Вы выиграли'
    } else if (choiseHuman === 'ножницы' && computerChoise === 'бумага') {
        console.log('Вы выиграли')
        counterHuman++
        console.log('Счет: у вас: ' + counterHuman + 'У компа: ' + counterComp);
        
        if(counterComp === 3) console.log('Вы выиграли счет: ' + counterHuman + ':' + counterComp);
        counterComp = 0;
        counterHuman = 0;
        return 'Вы выиграли'
    } else if (choiseHuman === 'камень' && computerChoise === 'ножницы') {
        console.log('Вы выиграли')
        counterHuman++
        console.log('Счет: у вас: ' + counterHuman + 'У компа: ' + counterComp);
        
        if(counterComp === 3) console.log('Вы выиграли счет: ' + counterHuman + ':' + counterComp);
        counterComp = 0;
        counterHuman = 0;
        return 'Вы выиграли'
        
    }
    
}
    
    


