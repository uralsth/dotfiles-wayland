let user = {
    name: 'crystal',
    age:30,
    email: 'crystal@gmail.co',
    location: 'berlin',
    blogs: [
        {title: 'why', likes: 29},
        {title: 'what', likes: 34},
            ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logblogs(){
        console.log(`${this.name} has written this blogs:`);
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

console.log(user);
console.log(user.name);

// replacing original value
user.age = 35;
console.log(user.age);

console.log(user['name']);
user['name'] = 'Ural';
console.log(user['name']);
user.login();
user.logout();

user.logblogs();


console.log(Math.PI);

// random
const random = math.random();
// genearates between 0 and 1
console.log(random);
// generates 0 or 1
console.log(Math.round(random));
// generates between 0 and 100
console.log(Math.round(random * 100))