//making this so that we can convert human mood to system mood
export function interpretMood(text){
    const t=text.toLowerCase();
    

    if(t.includes("happy")||t.includes("excited")) return "happy";
    if(t.includes("sad")||t.includes("low")) return "sad";
    if(t.includes("chill")||t.includes("relaxed")) return "chill";
    if(t.includes("romantic")||t.includes("love")) return "romantic";
    
    return "chill";
}
console.log(interpretMood("I am very happy today"));
console.log(interpretMood("feeling low and sad"));
console.log(interpretMood("just wanna relax"));
