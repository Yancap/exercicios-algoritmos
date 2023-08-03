// [ 1 , 4 , 3 , 2, 0 , 5 , 0]
// [ 1 , 3 , 4 , 2, 0 , 5 , 0]
// [ 1 , 3 , 2 , 4, 0 , 5 , 0]
// [ 1 , 2 , 3 , 4, 0 , 5 , 0]
// [ 1 , 2 , 3 , 0, 4 , 5 , 0]
// [ 1 , 2 , 0 , 3, 4 , 5 , 0]
// [ 1 , 0 , 2 , 3, 4 , 5 , 0]
// [ 0 , 1 , 2 , 3, 4 , 5 , 0]


function sort(array){
    
    for (let num of array) {
        //let indexAtual = 0;
        let index = array.lastIndexOf(num)
        while( index >= 0){
            let reference = array.lastIndexOf(num)
            if (array[reference] < array[index]) {
                const aux = array[index]
                array[index] = num
                array[reference] = aux
                //index = array.indexOf(num)
           }
            index--
           
           //reference = array.indexOf(num)
        }
        //indexAtual++
    }
    console.log("Saida: " + array);
    
}

let array = [];

for (let index = 0; index < 10; index++) {
    array.push(Math.floor(Math.random() * 10))
}

console.log("Entrada: " + array);
sort(array);
