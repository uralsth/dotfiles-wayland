const getTodos = (callback) => {

    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        // console.log(request, request.readyState);
        if (request.readyState == 4 && request.status == 200) {
            callback();
        }
        else if (request.readyState == 4)
        {
            callback();
        }
    })
    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};

getTodos((err, data) => {
    console.log('callback fired');
});