/*-------------------------------- Constants --------------------------------*/

const choices = ['rock', 'paper', 'scissors']

/*-------------------------------- Variables --------------------------------*/

let playerChoice, cpuChoice, msg

/*------------------------ Cached Element References ------------------------*/

const rpsEl = document.getElementById('rps')
const resultEl = document.querySelector('#result-display')
const rockEl = document.getElementById('rock')
const paperEl = document.getElementById('paper')
const scissorEl = document.getElementById('scissors')

/*----------------------------- Event Listeners -----------------------------*/

rpsEl.addEventListener('click', play)

/*-------------------------------- Functions --------------------------------*/


