const str: string = 'Hello'; // string

const isFull: boolean = true; // boolean

const int: number = 42; // number

const strArr: string[] = ['Hi', 'My']; // string array
const strArr2: Array<string> = ['Hi', 'My']; // generic

const intArr: number[] = [10, 20, 30]; // number array
const intArr2: Array<number> = [10, 20, 30]; // generic

const contacts: [string, number] = ['Dmitriy', 89234815507]; // tuple - кортеж

let varable: any = 10; // any
varable = 'Change type of varable';

function sayMyName(name: string):void { // void
  console.log(name);
}

function throwError(error: string): never { // never
  throw new Error(error);
}

function infinite():never { // never
  while(true) {
    console.log('Infinity');    
  }
}

type Login = string; // type
const login: Login = 'admin';

type ID = string | number; // type
const id: ID = 10;
const id2: ID = '1';

type SomeType = string | null | undefined; // type