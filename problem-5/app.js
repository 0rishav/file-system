// [Check File or Directory]
// problem-5:- Verify whether a path is a file or a directory.

const fs = require("node:fs/promises");
const readline = require("node:readline/promises");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const fileOrDirectoryCheck = async (fileName) => {
    try {
        const stats = await fs.stat(fileName);
        if(stats.isFile()){
            console.log(`${fileName} is a file`)
        }else if(stats.isDirectory()){
            console.log(`${fileName} is a directory`)
        }
    } catch (error) {
        console.log(error)
    }
}

(async () => {
    try {
        const file = await rl.question("Enter Your file or directory path? ");
        await fileOrDirectoryCheck(file)
    } catch (error) {
        console.log(error)
    } finally {
        rl.close();
    }

})()