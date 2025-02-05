// [Basic File Operation]
// Problem 1:-  Create a file, write some text into it, and read it back.

const { writeFile } = require("node:fs");
const fs = require("node:fs/promises");
const readline = require("readline/promises");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

async function fileReading(){
    try {
      const file =  await fs.readFile("./file.txt","utf-8")
      console.log(file)
    } catch (error) {
        console.log(error)
    }
}

async function fileWriting(){
    try {
        const file = await rl.question("Enter your file? ");
        const content = await rl.question("Enter Your content? ");

        await fs.writeFile(file,content);
        console.log("file write successfully...")
    } catch (error) {
        console.log(error)
    }
}

(async() => {
    try {
        const str = await rl.question("Which operation you want to perform?Expected read/write ");
        if(str.toLowerCase() === "write"){
           await fileWriting()
        }else if(str.toLowerCase() === "read"){
            await fileReading();
        }else{
            console.log("you entered something wrong")
        }
    } catch (error) {
        console.log(error)
    }finally{
      rl.close();
    }
})()