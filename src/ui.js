import { interpretMood } from "./interpreter.js";
import { getSongsByMood } from "./recomender.js";

const input=document.getElementById("moodInput");
const button=document.getElementById("getSong");
const results=document.getElementById("results");
const main=document.getElementById("main-container");

button.addEventListener("click",()=>{
    console.log("working");
    
    const text=input.value.trim();
    if(!text){
        alert("Please enter ur mood");
        return;
    }

    const mood=interpretMood(text);
    const songs=getSongsByMood(mood);
    main.classList.add("hidden");
    console.log("Main after:", main.classList);
    console.log("Results before:", results.classList);


    results.classList.remove("hidden");
     console.log("Results after:", results.classList);

    renderSongs(songs);
});
function renderSongs(songs){
    results.innerHTML="";
    songs.forEach(song => {
        console.log(song.title);
        const card=document.createElement("div");

        //card-container
        card.className="song-card";

        //image
        const img=document.createElement("img");
        img.src=song.image;
        
        //title
        const title=document.createElement("p");
         title.textContent = song.title;

        // artist
        const artist = document.createElement("p");
        artist.textContent = song.artist;

        card.appendChild(img);
        card.appendChild(title);
         card.appendChild(artist);

        results.appendChild(card);
    });
}