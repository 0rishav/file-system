// [Search for a Word]
// problem-6:- Search for a specific word inside a file and count its occurrences.

const fs = require("node:fs/promises");
const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

const wordOccurence = async(sentence,word) => {
    let count = 0;
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] === word) count++;
    }
    return count;
}

(async () => {
    try {
        const file = await fs.readFile("./text.txt","utf-8");
        // const fileOpen = file.replace(/,/g,"").split(" ")
        const word = await rl.question("Enter Your word which you want to find? ");
        const numsOfOccurence = await wordOccurence(file,word);
        console.log(numsOfOccurence)
    } catch (error) {
        console.log(error)
    }finally{
        rl.close();
    }
})()