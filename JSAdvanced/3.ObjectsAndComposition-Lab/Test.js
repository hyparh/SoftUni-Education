const person = {
    firstName: "Peter",
    lastName: "Jackson",
    fullName() {
        return this.firstName + ' ' + this.lastName;
    },
    sayHi() {
        console.log('Hiiiiiiiii');
    }
};

person.firstName = "Yago";

console.log(person.fullName());
person.sayHi();