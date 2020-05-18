// colors array
let colors = ['midnightblue', 'wheat', 'blue','greeen','red','purple'];

// get buttons
let button = document.getElementById('button');

function BGC(){
    let container = document.getElementById('container');
    // randomizer
    var randomcolor = colors[Math.floor(Math.random() * colors.length)];

    // get body
   
    container.style.backgroundColor = randomcolor;

}
// button color

function BC(){
    let button = document.getElementById('button');

    var randomcolor = colors[Math.floor(Math.random() * colors.length)];

    button.style.backgroundColor = randomcolor;
}
