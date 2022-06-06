let pizzaIngredientres = ['tomate','queso','aceituna','jamon','huevo','anchoas','rucula','masa','oregano','cebolla','morron']
//,'aceituna','jamon','huevo','anchoas','rucula','masa','oregano','cebolla','morron'

let pares = []
let impares = []
function paridad(pizzaIngredientres){
    for(i = 0; i < pizzaIngredientres.length; i++){
        var valor = pizzaIngredientres[i]
        if (valor.length % 2 == 0){
            pares.push(pizzaIngredientres[i]);
        
        }else{
            impares.push(pizzaIngredientres[i]);
        }
        
    }
}

console.log(paridad(pizzaIngredientres));
console.log("Los ingredientes pares son: ",pares)
console.log("Los ingredientes impares son: ",impares)


