// CODE here for your Lambda Classes
class Person{
    constructor(baseClass){
        this.name = baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
        this.gender = baseClass.gender;
    }
    speak() {
        return (`Hello, my name is ${this.name}. I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorClass){
        super(instructorClass);
        this.specialty = instructorClass.specialty;
        this.favLanguage = instructorClass.favLanguage;
        this.catchPhrase = instructorClass.catchPhrase;
    }
    demo(subject) {
        return (`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        return (`${student.name} receives a perfect score on ${subject}.`);
    }
    gradeAssignment(student, max) {
            let x = (Math.floor((Math.random() * max) - (Math.random() * max)));
            return student.grade + x;
    }
}

class Student extends Person {
    constructor(studentClass){
        super(studentClass);
        this.previousBackground = studentClass.specialty;
        this.className = studentClass.className;
        this.favSubjects = studentClass.favSubjects;
    }
    listsSubjects() {
        let x = this.favSubjects.join(", ");
        return (x);
    }
    PRAssignment(student, subject) {
        return (`${student.name} has submitted a PR for ${subject}.`);
    }
    sprintChallenge(student, subject) {
        return (`${student.name} has begun sprint challenge on ${subject}.`);
    }
    graduate() {
        if (this.grade > 70) {
            return `${this.name} has graduated!`
        } else {
            return `${this.name} needs more work.`
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMClass){
        super(PMClass);
        this.gradClassName = PMClass.gradClassName;
        this.favInstructor = PMClass.favInstructor;
    }
    standUp(channel) {
        return (`${this.name} announces to ${channel}, @channel standy times!`);
    }
    debugsCode(student, subject) {
        return (`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}





const chadkidd = new Person({
    name: "Chad Kidd",
    age: 32,
    gender: "Female",
    location: "Los Angeles, CA",
    previousBackground: "DJ, PA, CSR, Management",
    className: "WEB18",
    favSubjects: ["CSS", "JS", "Music", "Getting This Bread"]
})

const tracy_pilcher = new Person({
    name: "Tracy Pilcher",
    age: 58,
    gender: "Female",
    location: "Hamtramck, MI",
    previousBackground: "LAMP Web Developer",
    className: "WEB18",
    favSubjects: ["PHP", "MySQL", "Permaculture Gardening"],
})





const christian_ipanaque = new Instructor({
    name: "Christian Ipanaque",
    age: 32,
    gender: "Male",
    location: "Seattle, WA",
    previousBackground: "Server Hardware Technician",
    className: "WEB18",
    favSubjects: ["Computer Science","Redux","Algorithms","Data Structures","Computer Architecture"],
    favLanguage: 'C++',
    specialty: 'Back-end',
    catchPhrase: "Yabba Dabba Doo!!"
})

const patrick = new Instructor ({
    name: 'Patrick Steveson',
    location: 'Illinois',
    age: 27,
    gender: 'male',
    previousBackground: 'Finance',
    className: 'Web18',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});






const liz_B = new Student({
    name: "Lizzy B",
    age: 27,
    gender: "Female",
    location: "Portland, OR",
    previousBackground: "Biology/Health Science grad",
    className: "WEB12",
    favSubjects: ["CSS","React","Ternaries","SQL","Node"],
    grade: 97
})

const joshk = new Student({
    name: "Josh Kersting",
    age: 27,
    gender: "Male",
    location: "Muskegon, Mi",
    previousBackground: "Data Analyst",
    className: "WEB18",
    favSubjects: ["Computer Science","Algorithms","Data Structures","Computer Architecture","Photography","Cooking"],
    grade: 67

})

const leslie_t = new Student({
    name: "Leslie Thompson",
    age: 31,
    location: "San Francisco, CA",
    gender: "F",
    previousBackground: "Retail Management",
    className: "Web18",
    favSubjects: ["CSS", "JavaScript", "Cooking", "Biology"],
    grade: 71

});




const brellin = new ProjectManager({
    name: 'Will Umstead',
    age: 26,
    location: 'Tuscola, Texas',
    gender: 'Male',
    previousBackground: 'Army',
    className: 'WEB18',
    favSubjects: ['PHP',
        'CSS',
        'JavaScript'
    ],
    specialty: 'Surfing the Internet',
    favLanguage: 'Pig Latin',
    catchPhrase: "Don't make me pull out my whipping stick!",
    gradClassName: 'CS1',
    favInstructor: 'Elon Muskrat'

});

const cameron_macdonald = new ProjectManager({
    name: 'Cam',
    age: 58,
    location: 'Port Angeles, WA',
    gender: 'male',
    favLanguage: 'Javascript',
    className: 'WEB18',
    previousBackground: 'martial arts instructor, Honda tech, computer support tech',
    favSubjects: ['CSS', 'Javascript', 'golf', 'Scotland'],
    gradClassName: 'Web18',
    favInstructor: 'Betsy Ross',
  });


// console.log(chadkidd.name);
// console.log(chadkidd.age);
// console.log(chadkidd.location);
// console.log(chadkidd.gender);
// console.log(chadkidd.speak());
// console.log(tracy_pilcher.name);
// console.log(tracy_pilcher.age);
// console.log(tracy_pilcher.location);
// console.log(tracy_pilcher.gender);
// console.log(tracy_pilcher.speak());
// console.log(christian_ipanaque.name);
// console.log(christian_ipanaque.age);
// console.log(christian_ipanaque.location);
// console.log(christian_ipanaque.gender);
// console.log(christian_ipanaque.speak());
// console.log(christian_ipanaque.specialty);
// console.log(christian_ipanaque.favLanguage);
// console.log(christian_ipanaque.catchPhrase);
// console.log(christian_ipanaque.demo('Pickling Vegetables'));
// console.log(christian_ipanaque.grade(joshk, 'Javascript'));
console.log(christian_ipanaque.gradeAssignment(joshk, 2));
// console.log(liz_B.name);
// console.log(liz_B.age);
// console.log(liz_B.location);
// console.log(liz_B.gender);
// console.log(liz_B.speak());
// console.log(liz_B.listsSubjects());
// console.log(liz_B.PRAssignment(joshk, 'Javascript'));
// console.log(liz_B.sprintChallenge(joshk, 'Javascript'));
console.log(liz_B.graduate());

// console.log(brellin.name);
// console.log(brellin.age);
// console.log(brellin.location);
// console.log(brellin.gender);
// console.log(brellin.speak());
// console.log(brellin.specialty);
// console.log(brellin.favLanguage);
// console.log(brellin.catchPhrase);
// console.log(brellin.gradClassName);
// console.log(brellin.favInstructor);
// console.log(brellin.demo('Eating Ice Cream As Fast As Possible'));
// console.log(brellin.grade(leslie_t, 'Javascript'));
// console.log(brellin.standUp('Web18_asa'));
// console.log(brellin.debugsCode(leslie_t, 'Javascript'));



