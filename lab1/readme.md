# Лабораторна робота №1
### Завдання 1:
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

`"a" = 1`, `"b" = 2`, etc.

Example:
```javascript
alphabetPosition("The sunset sets at twelve o' clock.")
```
Should return `"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"` ( as a string )

### Завдання 2:
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: `[0, 0, 0, 1]` is treated as `0001` which is the binary representation of `1`.

Examples:
```
Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
```
However, the arrays can have varying lengths, not just limited to 4.

### Завдання 3:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching `"odd"` or `"even"`.

If the input array is empty consider it as: `[0]` (array with a zero).

Examples:
```
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
```
Have fun!
# Контрольні питання
1. Чи є різниця між виконанням JavaScript в браузері та в середовищі Node.js:
   + Node.js - це середовище виконання JavaScript для розробки серверних додатків, яке дозволяє використовувати 
    зовнішні бібліотеки та модулі та має глобальний об'єкт `process`. У браузері JavaScript використовується для динамічної зміни вмісту веб-сторінки та має обмежене середовище виконання.
2. Назвіть основні типи в JavaScript:
   + Рядки (Strings)
   + Числа (Numbers)
   + Булеві значення (Booleans)
   + Масиви (Arrays)
   + Об'єкти (Objects)
   + Функції (Functions)
   + Undefined
   + Null
3. Як працює замикання (closure) в JavaScript:
   + Замикання (closure) в JavaScript - це механізм, який дозволяє зберігати стан та контекст функції, навіть після 
     того, як вона завершена та вийшла зі свого лексичного середовища. Коли функція створюється в середовищі, вона може отримувати доступ до змінних, які існують у зовнішньому лексичному середовищі. 
   + Коли функція повертається як результат, або передається як аргумент іншій функції, замикання можуть зберігати та 
     зберігають контекст та значення змінних, які були доступні в момент створення функції. Таким чином, замикання 
     дозволяють створювати функції, які зберігають стан та контекст у певний момент часу та можуть використовуватися пізніше з тим самим станом.
4. Назвіть основні стандартні бібліотеки Node.js:
   + fs - модуль для роботи з файловою системою
   + http - модуль для створення HTTP-серверів та клієнтів
   + path - модуль для роботи з шляхами до файлів та директорій
   + events - модуль для роботи з подіями
   + os - модуль для роботи з операційною системою
   + process - глобальний об'єкт, який містить інформацію про процес виконання Node.js
   + crypto - модуль для роботи з криптографією та безпекою
   + util - модуль, який містить корисні функції та утиліти для розробки
   + stream - модуль для роботи з потоками даних
5. Які є способи імпортувати модулі в Node.js:
   1. Використання ключового слова `require()`: це стандартний спосіб імпортувати модулі в Node.js. Приклад: `const fs = require('fs');`
   2. Використання ключового слова `import`: це новіший спосіб імпортувати модулі в Node.js, який доданий у ES6. Для цього необхідно додати опцію `"type": "module"` у `package.json`. Приклад: `import fs from 'fs'`;
   3. Використання `import()` з динамічним імпортом: цей спосіб дозволяє імпортувати модулі динамічно під час виконання програми. Приклад: `import('module-name').then(module => { // Використання модуля });`
6. Як пов'язані Google Chrome / Chromium та Node.js:
   + Google Chrome / Chromium та Node.js мають спільний початок і використовують спільний двигун JavaScript V8, який розробляється командою Google. Node.js був створений на основі V8 для розвитку серверних додатків на JavaScript.
7. Як можна дозволити імпортувати змінні з поточного модуля:
   + Щоб дозволити імпортувати змінні з поточного модуля в Node.js, необхідно експортувати ці змінні з поточного модуля за допомогою ключового слова `exports`.
