function ageInDays() {
    let birthYear = prompt("What year were you born.. Good friend?");
    let ageInDayss = (2021 - birthYear) * 365;
    let h1 = document.createElement("h1");
    let textAnswer = document.createTextNode("You're " + ageInDayss + " days Old");
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

