console.log("Hi there!"); // Hi there!
console.log("I am excited to talk to you.");// I am excited to talk to you.

let bot;
bot = "teacherBot";

let botLocation;
botLocation = "the universe";

console.log("Allow me to introduce myself."); // Allow me to introduce myself.

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction); // My name is teacherBot.

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence); // I live in the universe.

bot = "professorBot"; // Note : We can reassign bot variable to new value since let was used instead of const.

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);// My nickname is professorBot.

bot = "awesomeTeacherBot";// Note : We can reassign bot variable to new value since let was used instead of const

const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);// "I love my nickname but I wish people would call me awesomeTeacherBot.

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);// My favorite subject is Computer Science.
