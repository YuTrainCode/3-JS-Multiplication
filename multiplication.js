ecrireTableMultiplication(6);

function ecrireTableMultiplication(multiplicateur) {
    let msg;

    for (let i = 1; i <= 10; ++i){
    
        msg = i + ' x ' + multiplicateur + ' = ' +  i * multiplicateur;
    
        if (i < 10){
            msg = "&nbsp;" + msg;
        } 
    
        document.write("<br>" + msg + "</br>");
    }
}

