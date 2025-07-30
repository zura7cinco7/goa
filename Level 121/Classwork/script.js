// 1) წამოიღეთ მომხმარებლების მონაცემები ამ მისამართის გამოყენებით https://jsonplaceholder.typicode.com/users, გააკეთეთ Friend list ის მსგავსი, 
// სადაც სერვერის მიერ დაბრუნებულ მონაცემებს დაარენდერებთ. (დაახლოებით Facebook friend list მსგავსია)

const friendListDiv = document.getElementById('friendList');

const render = (friendList) => {
    friendListDiv.innerHTML = "";

    for(const frind of friendList){
        friendListDiv.innerHTML += `
        <div>
            <h2>${frind.name}</h2>
            <p>${frind.email}</p>
            <p>${frind.phone}</p>
        </div>
        `
    }
}

const dataFromFetch = async(url) => {
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        render(data);
    }catch(err){
        console.log(err);
    }
}

dataFromFetch('https://jsonplaceholder.typicode.com/users');