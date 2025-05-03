// Task 3: create a new file named 'welcome.txt' and write 'Hello Node' into it

const fs = require("fs");
fs.writeFile("welcome.txt", "Hello Node", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("file written successfully!");
    }
});
