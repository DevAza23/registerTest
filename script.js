// let count = document.querySelector('.count')
// let start = document.querySelector('.start')
// let stop = document.querySelector('.stop')
//     // let i = 0


// // start.addEventListener('click', () => {
// //         let i = 0
// //         interval = setInterval = (() => {
// //             if (i <= 550) {
// //                 count.innerHTML = ++i

// //             }
// //         })






// //     },
// //     500);
// start.addEventListener('click', () => {
//     let i = 0;

//     // Очистить любой предыдущий интервал, если он существует

//     // Установить интервал для отсчета
//     interval = setInterval(() => {
//         if (i <= 500) {
//             count.innerHTML = ++i;
//             void count.offsetWidth;
//             count.style.transition = '0.3s linear'; // Примечание: 1,3s не является допустимым значением, нужно 1.3s
//         } else {
//             count.innerHTML = 'LX'
//         }
//     }, 100); // Интервал в миллисекундах (например, 100 мс = 0.1 сек)
// });

// stop.addEventListener('click', () => {
//     clearInterval(inter);

// });

// function ds(name, age) {
//     console.log(`hello ${name}`)
//     console.log(`you are ${age}`)

//     let e = setTimeout(() => {

//     }, timeout);

// }
// ds('Azamat', '16')




// btn.addEventListener('click', () => {
//     let ers = document.querySelectorAll('.name, .age, .email');

//     let btn = document.querySelector('.btn');
//     let text = document.querySelector('.text');

//     for (let i of ers) {
//         text.innerHTML(i.value);
//     }

// });

document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.btn');
    let text = document.querySelector('.text');

    btn.addEventListener('click', () => {
        let email = document.querySelector('.email').value;
        let password = document.querySelector('.password').value;

        if (!email || !password) {
            text.innerText = 'Пожалуйста, заполните все поля!';
            text.style.color = 'red';
            return;
        } else if (password.length <= 2) {
            text.innerText = 'Некоректный пароль!';
            text.style.color = 'red';

        } else if (!email.includes('@')) {
            text.innerText = 'Некоректный Email!';
            text.style.color = 'red';
        } else {
            text.innerText = `Регистрация прошла успешно! Email: ${email}`;
            text.style.color = 'green';
        };


    })
});