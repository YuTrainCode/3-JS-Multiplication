for (let i = 1; i <= 10; ++i){
    ecrireTableMultiplication(i);
}


function ecrireTableMultiplication(multiplicateur, limite = 10) {
    let msg;

    for (let i = 1; i <= limite; ++i){ 
    
        msg = i + ' x ' + multiplicateur + ' = ' +  i * multiplicateur;
    
        if (i < 10){
            msg = "&nbsp;" + msg;
        } 
    
        document.write("<br>" + msg + "</br>");
    }
}

