import muiscByMood from "./data/musicMood";
export function getSongsByMood(mood){
    if(!mood)return [];
    const moodToLowercase=mood.moodToLowercase();
    return muiscByMood[moodToLowercase]||[];
}