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
    mode = "ASCII"
    modev.textContent = "ASCII to Morse"
  }else{
    mode = "morse"
    modev.textContent = "Morse to ASCII"
  }
})

translate.addEventListener("click", () => {
  let i = input.value
  let o = ""

  if(mode == "morse"){
    i = i.split(" ")
    for(let j=0; j<i.length; j++){

      if(Object.keys(morse).find(key => morse[key] === i[j]) == undefined){
        o = "couldn't translate to ASCII"
        break
      }

      o = o + Object.keys(morse).find(key => morse[key] === i[j])
    }
  }else{
    i = i.split("")
    for(let j=0; j<i.length; j++){

      if(morse[i[j]] == undefined){
        o = "couldn't translate to morse"
        break
      }

      o = o + morse[i[j]] + "   "
    }
  }

  output.value = o
})

