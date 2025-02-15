// [Copy File Contents]
// Q.7 Copy the contents of one file into another.

const fs = require("node:fs/promises");

(async () => {
    try {
        await fs.copyFile("text.txt","text-copy.txt");
        console.log("file copied successfully...");
    } catch (error) {
        console.log(error)
    }
})()