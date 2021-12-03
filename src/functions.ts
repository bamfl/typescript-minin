// Functions
// Function Declaration
function funcDeclar(a: number): number[] {
  return [a ** 2];
}
console.log(funcDeclar(10));


// Function Expression
const funcExp = function (x: number): boolean {
  return !!x;
}

funcExp(1100);


// Arrow function
const arrFunc = (x: string): string => {
  return x;
}
console.log(arrFunc('Hello'));

const arrFunc3 = (isReady: boolean): string => isReady ? 'Ready' : 'Not ready';
console.log(arrFunc3(false));


// Или другой синтаксис, где сначала ставим : и описываем (аргументы) и что возвращает =>
const arrFunc2: (x: number) => boolean = (x) => {
  if (x > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(arrFunc2(50));

const arrFunc4: (a: number) => string = (a) => `${a}`;
console.log(arrFunc4(500));


// Void - пустота. Т.е. ожидается, что функция ничего не вернет (нет return)
const logNumber = (x: number): void => console.log(x);
console.log(654);