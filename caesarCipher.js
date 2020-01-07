const Minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',
'u','v','w','x','y','z'];
const Maiusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
'U','V','W','X','Y','Z'];

function caesar(stringOriginal, Modificador) {

    var stringModificada = '';    

    const Minusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t',
    'u','v','w','x','y','z'];
    const Maiusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T',
    'U','V','W','X','Y','Z'];

    var qtidadeLetras = Minusculas.length; 

    //Transformar a string em uma matriz, 
    var originalTransformadaArray = stringOriginal.split('');


    // Analisar cada elemento da matriz e converter
    var matrizTransformada = [];
    originalTransformadaArray.forEach( function (v) {

    if (Minusculas.includes(v))  {

        var posicaoAnalisada = Minusculas.indexOf(v);
        var posicaoFinalMinuscula = posicaoAnalisada + Modificador;

        if ( posicaoFinalMinuscula < 0 ) { 

        matrizTransformada.push(Minusculas[qtidadeLetras+posicaoFinalMinuscula]);

        } else if (posicaoFinalMinuscula >= qtidadeLetras ) {            
            
            matrizTransformada.push(Minusculas[posicaoFinalMinuscula-qtidadeLetras]);

        } else {

            matrizTransformada.push(Minusculas[posicaoFinalMinuscula]);

        }

    } 
    
    else if (Maiusculas.includes(v)) {

        var posicaoAnalisada = Maiusculas.indexOf(v);
        var posicaoFinalMaiuscula = posicaoAnalisada + Modificador;

        if ( posicaoFinalMaiuscula < 0 ) {  

        matrizTransformada.push(Maiusculas[qtidadeLetras+posicaoFinalMaiuscula]);

        } if (posicaoFinalMaiuscula >= qtidadeLetras) {

        matrizTransformada.push(Maiusculas[posicaoFinalMaiuscula - qtidadeLetras]);

        } if (posicaoFinalMaiuscula < qtidadeLetras) {

            matrizTransformada.push(Maiusculas[posicaoFinalMaiuscula]);

            }

        }

    else {
        matrizTransformada.push(v);
    }



    });

    // Reagrupar a matriz em forma de string

    var stringCodificada = matrizTransformada.join('');

    return stringCodificada;
        
    }

const stringOriginal = 'Mjqqt, Btwqi!';
var Modificador = -5;

console.log(caesar(stringOriginal, Modificador));


















