/* 2) შექმენით საიტზე ერთი ღილაკი, რომელზე დაკლიკებისას მომხმარებელს
prompt-ის საშუალებით შემოატანინებთ 2 რიცხვს და გამოიტანთ მათ ჯამს
საიტზე შემდეგი სახით
{პირველი რიცხვი} + {მეორე რიცხვი} = {პასუხი} */

const sumNumbers = () => {
    let userNum1 = prompt('Enter number one:');
    let userNum2 = prompt('Enter number two:');

    let sum = Number(userNum1) + Number(userNum2);
    document.getElementById('sum').textContent =`${userNum1} + ${userNum2} = ${sum}`;
}

/* ) მომხმარებელს prompt-ის მეშვეობით შემოატანინეთ 
5 საყვარელი ფილმის სახელი და გამოიტანეთ ის დალაგებული სიის სახით საიტზე*/

function createMovieList() {
    let movies = [];
            
    for (let i = 0; i < 5; i++) {
        let movie = prompt(`Enter the name of movie ${i + 1}:`);
        if (movie) {
            movies.push(movie);
        }
    }
            
    movies.sort();

    const movieList = document.getElementById("movielist");
    movies.forEach(movie => {
        const listItem = document.createElement("li");
        listItem.textContent = movie;
        movieList.appendChild(listItem);
    });
}

/* Boss Level:
შეეცადეთ გააკეთოთ To Do List ვებსაიტი:
საიტზე გექნებათ ერთი ღილაკი Add Task, რომელზე დაკლიკებისას 
მომხმარებელს გამოუტანთ prompt-ი და შემოატანინებთ task-ს.
გექნებათ დაულაგებელი სია, სადაც დაამატებთ ამ task-ებს. თითეულ 
tasks ექნება ღილაკი delete, რომელზე დაკლიკებისას task-ი უნდა წაიშალოს */

function addTask() {
    const task = prompt("Enter a task:");
    if (task) {
        const listItem = document.createElement("li");
        listItem.textContent = task;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.onclick = function() {
            listItem.remove();
        };

        listItem.appendChild(deleteButton);
        document.getElementById("task-list").appendChild(listItem);
    }
}