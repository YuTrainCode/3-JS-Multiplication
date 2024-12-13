ecrireTableMultiplication();

function ecrireTableMultiplication(multiplicateur) {
    let msg;

    for (let i = 1; i <= 10; ++i){
    
        msg = i + ' x 7 = ' + i * 7;
    
        if (i < 10){
            msg = "&nbsp;" + msg;
        } 
    
        document.write("<span>" + msg + "</span>");
    }
}

