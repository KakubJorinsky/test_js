let cislovani = 1;

function Add() {
    let input = document.getElementById("input");
    let textove_pole = document.getElementById("text");
    
    textove_pole.innerHTML += "<br>" + cislovani + ". " + input.value;
    cislovani += 1;
}