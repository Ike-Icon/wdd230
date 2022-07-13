// const birthday = new Date('August 19, 1975 23:15:30');
// const day1 = birthday.getDay();
// // Sunday - Saturday : 0 - 6

// console.log(day1);
// // expected output: 2


if (now.getDay() === 1 || now.getDay() == 2) {
    datefield.innerHTML +=
        `<p><a href='#'>
    🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m
    </a></p>`;
    menu.classList.toggle('responsive-2');
    document.querySelector('.pop').classList.toggle('date')
}