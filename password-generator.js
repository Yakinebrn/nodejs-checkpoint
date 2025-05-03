// Task 4 : generate a random password and print it
const generatePassword = require("generate-password");

const password = generatePassword.generate({
    length: 15,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
});

console.log("Generated Password: ", password);
