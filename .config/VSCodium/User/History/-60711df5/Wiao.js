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