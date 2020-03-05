"use strict"

import { facts, schema } from './desafio.js';



const fatosVigentes = (facts, schema) => {

    let cardinalidades = schema.map((outer) => (outer[2] = outer[2] == 'one' ? true : false, outer));
    console.log(cardinalidades);
    

}

fatosVigentes(facts, schema);   