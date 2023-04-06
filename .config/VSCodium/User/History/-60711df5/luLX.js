let user = {
    name: 'crystal',
    age:30,
    email: 'crystal@gmail.co',
    location: 'berlin',
    blogs: ['why', 'what', 'where'],
    login: function(){
        console.log('the user logged in');
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
user.login;