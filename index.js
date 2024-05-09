import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgMagentaBright("\tWelcome to Quiz"));
let marks = 10;
const quiz = await inquirer.prompt([
    {
        name: "Question_1",
        type: "list",
        message: "No 1: What is TypeScript and how does it relate to JavaScript?",
        choices: [
            "A: TypeScript is a superset of JavaScript that adds static typing",
            "B: TypeScript is a completely different language from JavaScript",
            "C: TypeScript is a subset of JavaScript that removes static typing",
            "D: TypeScript is a build tool for JavaScript",
        ],
    },
    {
        name: "Question_2",
        type: "list",
        message: "No 2: Benefits of TypeScript over plain JavaScript?",
        choices: ["A) Performance",
            "B) Security",
            "C) Tooling",
            "C) Compatibility"]
    },
    {
        name: "Question_3",
        type: "list",
        message: "No 3: What is a type annotation in TypeScript?",
        choices: ["a) Comment",
            "B) Declare",
            "C) Syntax",
            "D) Inference"]
    },
    {
        name: "Question_4",
        type: "list",
        message: "No 4: Difference between interfaces and classes in TypeScript?",
        choices: ["A) Implementation",
            "B) Type checking",
            "C) Contracts",
            "D) Inheritance"]
    },
    {
        name: "Question_5",
        type: "list",
        message: "No 5: Purpose of type inference in TypeScript?",
        choices: ["A) Enforce",
            "B) Automatic",
            "C) Remove",
            "D) Dynamic"]
    },
    {
        name: "Question_6",
        type: "list",
        message: "No 6: Handling null and undefined in TypeScript?",
        choices: ["A) Nullable",
            "B) Strict",
            "C) Union",
            "D) Not"]
    },
    {
        name: "Question_7",
        type: "list",
        message: "No 7: What is the readonly modifier used for in TypeScript?",
        choices: ["A) Once",
            "B) Prevent",
            "C) Immutable",
            "D) Read"]
    },
    {
        name: "Question_8",
        type: "list",
        message: "No 8:Using TypeScript with popular frameworks/libraries?",
        choices: ["A) Plugins",
            "B) Configuration",
            "C) Rewrite",
            "D) Can"]
    },
    {
        name: "Question_9",
        type: "list",
        message: "No 9: What is TypeScript and how does it relate to JavaScript?",
        choices: ["A) Superset",
            "B) Different",
            "C) Subset",
            "D) Build"]
    },
    {
        name: "Question_10",
        type: "list",
        message: "No 10: Basic data types in TypeScript?",
        choices: ["A) Type",
            "B) Class",
            "C) Interface",
            "D) All"]
    }
]);
switch (quiz.Question_1) {
    case "A: TypeScript is a superset of JavaScript that adds static typing":
        console.log(chalk.green("Correct Answer"));
        marks++;
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_2) {
    case "C) Tooling":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_3) {
    case "C) Syntax":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_4) {
    case "C) Contracts":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_5) {
    case "B) Automatic":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_6) {
    case "C) Union":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_7) {
    case "C) Immutable":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_8) {
    case "B) Configuration":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_9) {
    case "a) Superset":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
switch (quiz.Question_10) {
    case "d) All":
        marks++;
        console.log(chalk.green("Correct Answer"));
        break;
    default:
        console.log(chalk.red("Incorrect Answer"));
}
console.log(chalk.magenta(`Total Marks: ${marks}/10`));
