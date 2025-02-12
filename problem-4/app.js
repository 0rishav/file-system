// [File Deletion]
// problem-4:- Delete a file if it exists.

const fs = require("node:fs/promises");

(async () => {
    try {
        const file = "./hello"
        await fs.rm(file,{recursive:true});
        console.log("file deleted successfully...")
    } catch (error) {
        console.log(error)
    }
})()