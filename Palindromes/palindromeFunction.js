function palindromes(stringg) {
    // Primeiro remover as pontuações e espaços
    stringg = stringg.trim()
    
    // É mais fácil remover os espacos entre as palavras também.
    // Deixar minúsculo
    stringg = stringg.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    stringg = stringg.replace(/\s*/g, '');
    stringg = stringg.toLocaleLowerCase();

    // Criar string invertida
    var invertedString = '';
    
    // Preencher os elementos dessa string
    for(let i = (stringg.length-1); i >= 0; i--) {    
        let invertedCharacter = stringg[i];    
        invertedString = invertedString.concat(invertedCharacter);
    }    

    // Teste final para ver se coincide
    if ( stringg == invertedString) {
        return true;
    } else {
        return false;
    }
}











