let ntiri = Number(prompt(`inserire il numero ti tiri di dado da eseguire`));

function Dado(tiri){

    let utente1 = 0;
    let utente2 = 0;

    for(i = 1; i<= tiri; i++){
        utente1 = utente1 + Math.floor(Math.random() * (6 - 1) + 1);
        utente2 = utente2 + Math.floor(Math.random() * (6 - 1) + 1);
    }

    if(utente1 > utente2){
        return console.log(`Ha vinto l'utente 1 con ${utente1}`);
    }else if(utente1 < utente2){
        return console.log(`Ha vinto l'utente 2 con ${utente2}`);   
    }else{
        return console.log(`Pareggio con un punteggio di ${utente1}`);
    }
}

Dado(ntiri);