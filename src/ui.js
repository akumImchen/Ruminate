import { interpretMood } from "./interpreter.js";
import { getSongsByMood } from "./recomender.js";

const input=document.getElementById("moodInput");
const button=document.getElementById("getSong");
const results=document.getElementById("results");

button.addEventListener("click",()=>{
    console.log("working");
    
    const text=input.value().trim();
    if(!text){
        alert("Please enter ur mood");
        return;
    }

    const mood=interpretMood(text);
    const songs=getSongsByMood(mood);
    
});
function renderSongs(songs){
    results.innerHTML="";
    songs.forEach(song => {
        console.log(song.title);
        
        const p=document.createElement("p");
        p.textContent=`${song.title}-${song.artist}`;
        results.appendChild(p);
    });
}