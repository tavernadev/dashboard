const fs = require('fs')

const dir = process.argv.slice(2)

fs.rmdir(dir[0], { recursive: true }, (err) => {
    if (err) {
        throw err;
    }

    console.log(`${dir} was Removed!`)
});