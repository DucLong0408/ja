function appendOperation(operation){
    document.getElementById('resultarea').innerHTML +=operation;
}

function Berechnungergebnis () {
    let container = document.getElementById('resultarea');
    let text = container.innerHTML;
    console.log(text)
    const myArray = text.split(" ");
    console.log(myArray)
    console.log(myArray[0],"|", myArray[1],"|", myArray[2])
    
    let ergebnis = 0;
   
   if (myArray[1] =="+") {
        ergebnis = add(myArray[0],myArray[2])
    }
    if (myArray[1] =="-") {
        ergebnis = minus(myArray[0],myArray[2])
    }
    if (myArray[1] =="*") {
        ergebnis = multiply(myArray[0],myArray[2])
    }
    if (myArray[1] =="/") {
        ergebnis = divide(myArray[0],myArray[2])
    }
    if (myArray[1] =="%") {
        let zwerg=divide(myArray[0],myArray[2])
        console.log(zwerg)
        console.log(multiply(zwerg, 100))
        ergebnis=multiply(zwerg, 100);
    }
    if (myArray[0] == "√") {
        ergebnis = calculate(myArray[1])
    }

    container.innerHTML = ergebnis
    console.log(ergebnis);
}

function add(x, y,){
    //parseFloat umwandelt charakter Symbol 5 in Zahl 5
    let ergebnis = parseFloat(x) + parseFloat(y); 
    return ergebnis;
}


function minus(x, y,){
    //parseFloat umwandelt charakter Symbol 5 in Zahl 5
    let ergebnis = parseFloat(x) - parseFloat(y); 
    return ergebnis;
}

function multiply(x, y){
    //parseFloat umwandelt charakter Symbol 5 in Zahl 5
    console.log(x, ": ", parseFloat(y))
    let ergebnis = parseFloat(x) * parseFloat(y); 
    return ergebnis;
}
function divide(x, y){
    //parseFloat umwandelt charakter Symbol 5 in Zahl 5
    let ergebnis = parseFloat(x) / parseFloat(y); 
    return ergebnis;
}

function calculate(x) {
    //zieht Wurzel
let ergebnis= Math.sqrt(x);
return ergebnis;
}

function deletelast() {
    let container = document.getElementById('resultarea');
    if(container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else
     {container.innerHTML = container.innerHTML.slice(0, -1);}

}
function deleteall() {
    let container = document.getElementById('resultarea');
    container.innerHTML = container.innerHTML.slice(1000000);
}


