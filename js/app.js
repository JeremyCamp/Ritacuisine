/*

let questionIngredients = [
    
    {
        question : prompt("Combien as-tu de smoked cheddar dans le frigo ?"),
    },
    {
        question : fior = prompt("Combien as-tu de fior dans le frigo ?"),
    },
    {
        question : cheeseMix = prompt("Combien as-tu de cheese mix dans le frigo ?"),
    },
    {
        question : smokedMozza = prompt("Combien as-tu de smoked mozza dans le frigo ?"),
    },
    {
        question : pecorino = prompt("Combien as-tu de pecorino dans le frigo ?"),
    },
    {
        question : buffarela = prompt("Combien as-tu de buffarela dans le frigo ?"),
    },
    {
        question : redOnions = prompt("Combien as-tu de red onions dans le frigo ?"),
    },
    {
        question : enzoMushrooms = prompt("Combien as-tu de enzoMushrooms dans le frigo ?"),
    },
    {
        question : ortolonaLegume = prompt("Combien as-tu de legumes ortolana dans le frigo ?"),
    },
    {
        question : persil = prompt("Combien as-tu de persil dans le frigo ?"),
    },
    {
        question : basil = prompt("Combien as-tu de basilic dans le frigo ?"),
    },
    {
        question : ail = prompt("Combien as-tu d'ail dans le frigo ?"),
    },
    {
        question : peperoncini = prompt("Combien as-tu de peperoncini dans le frigo ?"),
    },
    {
        question : oliveNoire = prompt("Combien as-tu d'olive noire dans le frigo ?"),
    },
    {
        question : artichaud = prompt("Combien as-tu d'artichaud dans le frigo ?"),
    },
    {
        question : oliveLia = prompt("Combien as-tu d'olive Lia dans le frigo ?"),
    },
    {
        question : pizzaSauce = prompt("Combien as-tu de pizza sauce dans le frigo ?"),
    },
    {
        question : gpSauce = prompt("Combien as-tu de GP sauce dans le frigo ?"),
    },
    {
        question : calabrianSauce = prompt("Combien as-tu de Calabrian sauce dans le frigo ?"),
    },
    {
        question : rgSauce = prompt("Combien as-tu de roasted Garlic dans le frigo ?"),
    },
    {
        question : enzoSauce = prompt("Combien as-tu de Enzo sauce dans le frigo ?"),
    },
    {
        question : saucisse = prompt("Combien as-tu de saucisse dans le frigo ?"),
    },
    {
        question : peperoni = prompt("Combien as-tu de peperoni dans le frigo ?"),
    },
    {
        question : coppa = prompt("Combien as-tu de portion de coppa dans le frigo ?"),
    },
    {
        question : proscuito = prompt("Combien as-tu de portion de proscuito dans le frigo ?"),
    },
    {
        question : pancetta = prompt("Combien as-tu de portion de pancetta dans le frigo ?"),
    },
    {
        question : biga = prompt("Faut-il faire de la biga ? ?"),
    },
    {
        question : pancetta = prompt("Combien as-tu de portion de pancetta dans le frigo ?"),
    },
    {
        question : pancetta = prompt("Combien as-tu de portion de pancetta dans le frigo ?"),
    }
]

*/

alert("Bonjour Rita, préparons la liste de mise en place pour demain!!!");


let smokedCheddar;
let fior; 
let cheeseMix;
let smokedMozza;
let pecorino;
let buffarela;


while (isNaN(smokedCheddar)){
    smokedCheddar = prompt("Combien as-tu de smoked cheddar dans le frigo ?");
};
if(smokedCheddar < 4){
    resultatsmokedCheddar = 4 - smokedCheddar;
}

while (isNaN(fior)){
    fior = prompt("Combien as-tu de fior dans le frigo ?");
};
if(fior < 6){
    resultFior = 6 - fior;   
}

while (isNaN(pecorino)){
    pecorino = prompt("Combien as-tu de pecorino dans le frigo ?");
};
if(pecorino < 6){
    resultPecorino = 6 - pecorino;   
}

while (isNaN(buffarela)){
    buffarela = prompt("Combien as-tu de buffarela dans le frigo ?");
};
if(buffarela < 6){
    resultBuffarela = 6 - buffarela;   
}

while (isNaN(smokedMozza)){
    smokedMozza = prompt("Combien as-tu de Mozza Fumée dans le frigo ?");
};
if(smokedMozza< 6){
    resultSmokedMozza = 6 - smokedMozza;   
}

while (isNaN(cheeseMix)){
    cheeseMix = prompt("Combien as-tu de Cheese Mix dans le frigo ?");
};
if(cheeseMix< 6){
    resultCheeseMix = 6 - cheeseMix;   
}
alert("Voici la liste de mise en place pour demain!!!");
alert( resultatsmokedCheddar + " X Smoked Cheddar \n" + resultFior + " X Fior \n" + resultPecorino + " X Pecorino \n" + resultBuffarela + " X Buffarela \n" + resultCheeseMix + " X Cheese Mix \n" + resultSmokedMozza + " X Mozza Fumée \n");
/*
alert(`Liste De Mise En Place:`)
    if(smokedMozza < 4){
        alert("Cut or Smoke Mozza X" + (4 - smokedMozza))
    };
    if(pecorino < 8){
        alert("MEP , grind and litter Pecorino X" + (8 - pecorino))
    };
    if(buffarela < 2){
        alert("Buffarela X" + (2 - buffarela))
    };
    if(redOnions < 4){
        alert("Cut and Litter Red Onions: " + (4 - redOnions))
    };
    if(enzoMushrooms < 6){
        alert("Couper et/ou cuire Enzo Mushrooms")
    };
    if(ortolonaLegume < 6){
        alert("Couper et cuire Ortolana Vegetables")
    };
    if(persil < 2){
        alert("Parsley X" + (2 - persil))
    };
    if(basil < 2){
        alert("Basil X" + (2 - basil))
    };
    if(ail < 2){
        alert("Slice Garlic: " + (2 - ail))
    };
    if(peperoncini < 6){
        alert("Peperoncini: " + (6 - peperoncini))
    };
    if(oliveNoire < 6){
        alert("Denoyauter et/ou litrer olives noires X" + (6 - oliveNoire))
    };
    if(artichaud < 3){
        alert("Cut Artichoke and add olives for Carmela X" + (3 - artichaud))
    };
    if(oliveLia < 3){
        alert("Olive and capres mix for Lia X" + (3 - oliveLia))
    };
    if(pizzaSauce < 2){
        alert("Pizza Sauce X" + (2 - pizzaSauce))
    };
    if(gpSauce < 4){
        alert("Bechamel Grana Padano and Litter X" + (4 - gpSauce))
    };
    if(calabrian < 4){
        alert("Bechamel Calabrian and Litter X" + (4 - calabrian))
    };
    if(rgSauce < 4){
        alert("Bechamel Roasted Garlic X" + (4 - rgSauce))
    };
    if(enzoSauce < 4){
        alert("Cuire and Litter Sauce Enzo")
    };
    if(saucisse < 4){
        alert("Cuire et litter Saussage")
    };
    if(peperoni < 4){
        alert("Cut and Litter peperoni")
    };
    if(coppa < 15){
        alert("Slice Coppa X" + (15 - coppa))
    };
    if(proscuito < 15){
        alert("Slice Proscuito X" + (15 - proscuito))
    };
    if(pancetta < 15){
        alert("Slice pancetta: " + (15 - pancetta))
    };
    */

    