import musicByMood from "./data/musicMood.js";
export function getSongsByMood(mood){
    if(!mood)return [];
    return musicByMood[mood]||[];
}