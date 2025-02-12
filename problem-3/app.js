// [File Rename]
// Q.3 Rename a file with a new name using FS module.

const fs = require("node:fs/promises");
const readline = require("readline/promises");

const renameFile = async(file) => {
    try {
        await fs.rename("./hello.txt",file);
        console.log("file renamed successfully....")
    } catch (error) {
        console.log(error);
    }
}

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

(async()=>{
    try {
        const file = await rl.question("Enter Your path: ");
        await renameFile(file)
    } catch (error) {
        console.log(error)
    }finally{
        rl.close();
    }
})()