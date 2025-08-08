import { useState, useEffect, createElement } from "react"

const funnyPhrases = [
  "You pressed the wrong button... probably.",
  "Bold choice. Let's see where this goes.",
  "That button was just for decoration.",
  "You broke the internet. Just kidding.",
  "This is why we can't have nice things.",
  "I knew you'd press that one.",
  "Now you've done it.",
  "Achievement unlocked: Button Masher.",
  "That button owes you money.",
  "You pressed me. I feel seen."
];




function LevelOne(){
const [phrase, setPhrase] = useState("Press Me")
const [phrase2, setPhrase2] = useState("No Press Me")
const [phrase3, setPhrase3] = useState("Ugh, Press Me")

const changePhrase = () =>{
    setPhrase("I knew you'd press that one.")
}




    return(
        <>
        <div id="buttonContainer">
            <button>{phrase}</button>
            <button>{phrase2}</button>
            <button onClick={changePhrase}>{phrase3}</button>
        </div>
       

        </>
    )
}
export default LevelOne