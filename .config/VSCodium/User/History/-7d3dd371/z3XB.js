// const getTodos = (resource, callback) => {

//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();

//         request.addEventListener("readystatechange", () => {
//             // console.log(request, request.readyState);
//             if (request.readyState == 4 && request.status == 200) {
//                 const data = JSON.parse(request.responseText);
//                 resolve(data);
//             }
//             else if (request.readyState == 4)
//             {
//                 reject('error getting resource');
//             }
//         })
//         // request.open('GET', 'todos.json')
//         // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//         request.open('GET', resource);
//         request.send();
//         })
// };
// const getTodos = (resource, callback) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//         // console.log(request, request.readyState);
//         if (request.readyState == 4 && request.status == 200) {
//             const data = JSON.parse(request.responseText);
//             callback(undefined, data);
//         }
//         else if (request.readyState == 4)
//         {
//             callback('could not fetch data', undefined);
//         }
//     })
//     // request.open('GET', 'todos.json')
//     // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.open('GET', resource);
//     request.send();
// };


// getTodos('todos/luigi.json',(err, data) => {
//     console.log(data);
//     getTodos('todos/mario.json',(err, data) => {
//         console.log(data);
//         getTodos('todos/shaun.json',(err, data) => {
//             console.log(data);

//         });
//     });
// });

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         // resolve('some data');
//         reject('some error');
//     });
// }



// getSomething().then((data) =>{
//     console.log(data);
// }, (err)=> {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err)
// })


//old method
// getTodos('todos/luigi.json').then(data => {
//     console.log('promise 1 resolved: ', data);
//     return getTodos('todos/mario.json')
// }).then(data => {
//     console.log('promise 2 resolved:', data)
//     return getTodos('todos/shaun.json')
// }).then(data => {
//     console.log('promise 3 resolved:', data)
// }).catch(err => {
//     console.log('promise rejected: ', err)
// })

// fetch api

// fetch('todos/luigi.json').then((response) => {
//     console.log('resolved', response)
//     // which returns a promise
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((err) => {
//     console.log('rejected', err);
// });


// async and await

const getTodos = async () => {

};

const test = getTodos();
