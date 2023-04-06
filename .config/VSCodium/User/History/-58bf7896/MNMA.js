// const para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');
// console.log(paras);

// const errors = document.querySelectorAll('.error');
// console.log(errors);

// // get element by id
// const title = document.getElementById('page-title');
// console.log(title);

// // get element by class
// const errors1 = document.getElementsByClassName('error');
// console.log(errors1);

// // get element by tag name
// const paras1 = document.getElementsByTagName('p');
// console.log(paras1);

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText += 'Hello ural';

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText = ' new text';
// })

// const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new h2</h2>'

// const people = ['ram', 'sam', 'hari'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// })

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://duckduckgo.com');
// link.innerText = 'duckduckgo';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));

// msg.setAttribute('class', 'success');

// msg.setAttribute('style', 'color:green');

// const heading1 = document.querySelector('h1');
// heading1.setAttribute('style', 'margin:40px');

// console.log(heading1.style);
// console.log(heading1.style.color);

// heading1.style.margin = '50px';
// heading1.style.color = 'crimson';

// heading1.style.fontSize = '60px';


// const contents = document.querySelectorAll('p');

// console.log(content.classList);

// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// contents.forEach(content => {
//     console.log(content);
//     if (content.textContent.includes('error')){
//         content.classList.add('error');
//     }
//     else if (content.textContent.includes('success')){
//         content.classList.add('success');
//     }
// })

// const title = document.querySelector('.title');
// title.classList.toggle('test');

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//     console.log('you clicked me');
// })

const ul = document.querySelector('ul');
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
    
})

const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked');
        // console.log(e.target);
        // e.target.style.textDecoration = 'line-through';
        e.target.remove();
    })
})