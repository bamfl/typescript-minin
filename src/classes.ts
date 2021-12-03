// class
class Typescript {
  // модификаторы
  isUsefull: boolean; // по-умолчанию все св-ва public, слово лучше не писать, доступ есть у экземпляра
  public version: string; // по-умолчанию все св-ва public, слово лучше не писать, доступ есть у экземпляра
  protected x = 0; // доступ есть у класса и extended подклассов
  private y = 1; // доступ есть у класса
  readonly z = 2; // доступ есть у экземпляра только для чтения
  static age = 12345; // доступ есть у класса

  constructor(isUsefull: boolean, version: string) {
    this.isUsefull = isUsefull;
    this.version = version;
  }

  info(name: string): string {
    return `Typescript ${this.version} is very ${name}`;
  }
}

const typescript = new Typescript(true, '4.5.2');
console.log(typescript.info('cool'));

// abstract class
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component is on render');
  }

  info(): string {
    return 'Info';
  }
}

// Сокращенный синтаксис для public св-в:
class Typescript2 {
  constructor(
    public isUsefull: boolean, // обязательно писать public
    public version: string,
  ){}
}

// Get access to private property
class User {

  private age: number = 20;

  constructor(public name: string) {}

  setAge(age: number) {
      this.age = age;
  }

  set myAge(age: number) {
      this.age = age;
  }
}

const yauhen = new User('Yauhen');

yauhen.setAge(30);	// 30
yauhen.myAge = 31;	// 31

