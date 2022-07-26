const input = require('readline-sync');
const mail = require('./email.js');

let choice;

async function main() {

    while (true) {
        console.log("menu\n1) send mail\n2) quit\n");
        choice = input.questionInt("Enter Choice: ");

        if (choice === 1) {
            try {
                const info = await mail.send();
                console.log('Email sent Successfully:', info.response);
            }
            catch (e) {
                console.error(e);
            }
        }
        if (choice === 2) break;
    }

}
main();