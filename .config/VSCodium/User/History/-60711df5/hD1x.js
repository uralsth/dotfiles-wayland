const blogs = [
    {title: 'why', likes: 30},
    {title: 'what', likes: 34},

];
let user = {
    name: 'crystal',
    age:30,
    email: 'crystal@gmail.co',
    location: 'berlin',
    blogs: ['why', 'what', 'where'],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logblogs(){
        console.log(`${this.name} has written this blogs:`);
        this.blogs.forEach(blog => {
            console.log(blog);
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