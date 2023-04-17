// Якщо змінна більше нуля - виведіть true, менше - false
// Перевірте це на варіантах  1, 0, -3.



/* let num = 10;
num > 0 ? console.log("true") : console.log("false");

1 > 0 ? console.log("true") : console.log("false");

0 > 0 ? console.log("true") : console.log("false");

-3 > 0 ? console.log("true") : console.log("false"); */

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true


/* let word = "test";
switch (word) {
    case "test":
        console.log(true)
        break;
    case 'test':
        console.log(false)
        break;
    case "qwerty":
        console.log(false)
        break;
    case true:
        console.log(false)
        break;
} */


// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

/* var num = 20;
if (num > 10) {
    console.log(num - 5);
} else {
    console.log(num + 5);
}

var num1 = 1;
if (num1 > 10) {
    console.log(num1 - 5);
} else {
    console.log(num1 + 5);
}

var num2 = 10;
if (num2 > 10) {
    console.log(num2 - 5);
} else {
    console.log(num2 + 5);
}

var num3 = 13;
if (num3 > 10) {
    console.log(num3 - 5);
} else {
    console.log(num3 + 5);
} */

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

/* const month = prompt("Введiть номер мiсяця").toLowerCase();
let num;

switch (month) {
    case "сiчень":
        num = 1
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "лютий":
        num = 2
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "березень":
        num = 3
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "квітень":
        num = 4
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "травень":
        num = 5
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "червень":
        num = 6
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "липень":
        num = 7
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "серпень":
        num = 8
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "вересень":
        num = 9
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "жовтень":
        num = 10
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "листопад":
        num = 11
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
    case "грудень":
        num = 12
        alert(`Мiсяць ${month} пiд номером ${num}`);
        break;
     default:
        alert(`Мiсяця пiд номером ${num} не існує`)
} */

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

/*function calc() {
    const index = prompt("Введiть числа, з яких хочете отримати суму \nВiдправте одиницю для початку");
    const a = prompt("Перше число");
    const b = prompt("Друге число");
    const c = prompt("Третє число");
    const result = {
    1 : +a + +b + +c,
  }[index];
  return result
}
alert(calc()); */
// З останнiм завдянням трохи пiдглянув саму iдею, пробачте.


