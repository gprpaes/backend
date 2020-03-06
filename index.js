"use strict"

import { facts, schema } from './desafio.js';



const fatosVigentes = (facts, schema) => {
    let validFacts = [], removed = [], seen = {}, cardinality = {}, indexes;


    //Como as cardinalidades são somente one-to-one ou one-to-many, crio um objeto com o atributo como chave
    //e true ou false, que nesse contexto pode ser entendido como 'unico?'
    schema.forEach(element => cardinality[element[0]] = element[2] == 'one' ? true : false);


    //Ao percorrer o vetor ao contrario garanto que o 1º fato analisado é sempre o vigente
    //também assumo que o fato para ser removido precisa ser adicionado antes
    for (let i = (facts.length - 1); i >= 0; i--) {
        if (!facts[i][3]) {
            removed.push(facts[i]);

        }

        //Atribuo o atributo da tupla como chave da cardinalidade e verifico se ela é única ou não
        //exemplo : ['joão', 'endereço', 'rua bob, 88', true] -> cardinalidade{'endereço'}
        else if (cardinality[facts[i][1]]) {
            if (Object.entries(seen).length === 0) seen[facts[i][1]] = {};
            if ((!seen[facts[i][1]][facts[i][0]])) {
                (seen[facts[i][1]][facts[i][0]]) = true;
                validFacts.push(facts[i]);
            }


        }
        else validFacts.push(facts[i]);


    }

    removed.forEach(r => {
        if (validFacts.findIndex(v => v[2] == r[2])) validFacts.splice(3, 1)
    })
    console.log(validFacts)
}


fatosVigentes(facts, schema);   