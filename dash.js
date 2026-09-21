const greeting = document.getElementById("greeting");
const name = localStorage.getItem("savedName");
const hour = new Date().getHours();

 if(hour<12){
    greeting.innerHTML = `Good morning, !`;
 }else if (hour<18){
    greeting.innerHTML = `Good afternoon,!`
 }else {
    greeting.innerHTML = `Good evening, !`;
 }

 function logout(){
     window.location.href= "login.html"
 }

 let students = [
    {
        id:1,
        firstName: "Oluwatomi",
        middleName: "Al-Matin",
        lastName: "Ayinla",
        department: "Software Engineering",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 80,
            GNS212: 75,
            PHY202: 90
        }
    },

    {
        id:2,
        firstName: "Oluwatoni",
        middleName: "Haris",
        lastName: "Ayinla",
        department:"Computer science",

        course: ["MTH201","GNS 212","PHY202"],

        score: {
            MTH201: 85,
            GNS212: 80,
            PHY202: 70
        }
    },

    {
        id:3,
        firstName: "Maryam",
        middleName: "Amina",
        lastName: "Balogun",
        department: "Software Engineering",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 70,
            GNS212: 75,
            PHY202: 90
        }
    },

    {
        id:4,
        firstName: "Temiloluwa",
        middleName: "Danish",
        lastName: "Ayinla",
        department: "Cyber Security",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 80,
            GNS212: 75,
            PHY202: 50
        }
    },

    {
        id:5,
        firstName: "Peace",
        middleName: "Blessing",
        lastName: "John",
        department: "Informaton Technology",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 79,
            GNS212: 70,
            PHY202: 90
        }
    },

    {
        id:6,
        firstName: "John",
        middleName: "David",
        lastName: "Smith",
        department: "Data Science",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 80,
            GNS212: 62,
            PHY202: 75
        }
    },

    {
        id:7,
        firstName: "Mary",
        middleName: "Jane",
        lastName: "Willams",
        department: "Data Analysis",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 62,
            GNS212: 75,
            PHY202: 90
        }
    },

    {
        id:8,
        firstName: "Peter",
        middleName: "Tony",
        lastName: "Parker",
        department: "Physics",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 79,
            GNS212: 70,
            PHY202: 90
        }
    },

    {
        id:9,
        firstName: "Tony",
        middleName: "Benedict",
        lastName: "Stark",
        department: "Mathematics",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 80,
            GNS212: 75,
            PHY202: 90
        }
    },

    {
        id:10,
        firstName: "Barry",
        middleName: "Bart",
        lastName: "Allen",
        department: "Computer Science",

        course: ["MTH201","GNS212","PHY202"],

        score: {
            MTH201: 81,
            GNS212: 79,
            PHY202: 62
        }
    },
];

let studentContainer = document.getElementById("studentContainer");

students.forEach(function(student) {
    studentContainer.innerHTML +=`
    <div class="student">
    <h3>${student.id} </h3>
    <h3>${student.firstName} ${student.middleName} ${student.lastName}</h3>
    <h3>${student.department}</h3>
    <h3>${student.course}</h3>
    </div>`;
})



