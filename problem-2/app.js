//  [Directory Operations]
// Problem 2:- Create a new folder and list all files inside it.

const fs = require("node:fs/promises");

async function createFile(directory) {

    const FILE = "file";
    for (let i = 1; i <= 50; i++) {
        try {
            await fs.writeFile(`${directory}/${FILE}-${i}.txt`, "this is some string...");
        } catch (error) {
            console.log(error)
        }
    }
}

async function listAllFiles(dir) {
    try {
        const allFiles = await fs.readdir(dir);
        allFiles.sort((a, b) => {
            const numA = parseInt(a.match(/-(\d+)\.txt$/)[1]);
            const numB = parseInt(b.match(/-(\d+)\.txt$/)[1]);

            return numA - numB;
        })
        console.log(allFiles);
    } catch (error) {
        console.log(error)
    }
}


(async () => {
    try {
        const directory = "./new-directory";
        await fs.mkdir(directory);
        console.log("Directory created successfully...");
        await createFile(directory)
        await listAllFiles(directory);
    } catch (error) {
        console.log(error);
    }
})()