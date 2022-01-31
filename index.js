const people = ["Charlie", "Samip", "Ali"];
function writeCards(people,event){
    let newArr=[];
    for( let i=0; i < people.length; i++){
    let message = (`Thank you, ${people[i]}, for the wonderful ${event} gift!`)
    newArr.push(message);
    }
    return newArr
    }
    writeCards(people,"surprise")

    function countDown(a){
    while (a>-1){
        console.log(a--)
    }
}
    countDown(10)