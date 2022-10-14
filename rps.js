console.log('Hello World')

// Func that returns computer's choice
let pc_choice = () => {

    const choices = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * choices.length);
    return choices[random]

}

console.log(pc_choice());