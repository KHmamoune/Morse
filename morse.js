const input = document.querySelector(".input")
const translate = document.querySelector(".translate")
const output = document.querySelector(".output")
const change = document.querySelector(".switch")
const modev = document.querySelector(".modev")
let mode = "morse"
const morse = {
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  " ": "/",
  "": ""
}

change.addEventListener("click", () => {
  if(mode == "morse"){
    mode = "string"
    modev.textContent = "String to Morse"
  }else{
    mode = "morse"
    modev.textContent = "Morse to String"
  }
})

translate.addEventListener("click", () => {
  let i = input.value
  let o = ""

  if(mode == "morse"){
    i = i.split(" ")
    for(let j=0; j<i.length; j++){
      o = o + Object.keys(morse).find(key => morse[key] === i[j])
    }
  }else{
    i = i.split("")
    for(let j=0; j<i.length; j++){
      o = o + morse[i[j]] + " "
    }
  }

  output.textContent = o
})

