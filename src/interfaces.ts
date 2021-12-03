// Интерфейсы - создается для объектов или классов, в них указываем поля, функции и их типы
interface Rect {
  readonly id: number; // readonly
  color?: string; // unnecessary
  size: {
    width: number;
    height: number;
  }
}

const rect1: Rect = {
  id: 1,
  color: 'blue',
  size: {
    width: 100,
    height: 100
  }
}

const rect2: Rect = {
  id: 55,
  size: {
    width: 2,
    height: 3
  }
}

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ==================================================================================================
// Наследование
interface RectWithArea extends Rect {
  getArea: () => number;
  sayHello(): string;
}

const rect5 = {
  id: 5,
  color: 'red',
  size: {
    width: 100,
    height: 100
  },
  getArea(): number {
    return this.size.width * this.size.height
  },
  sayHello() {
    return 'Hello';
  }
}

console.log(rect5.getArea());
console.log(rect5.sayHello());

// ==================================================================================================
interface IClock {
  time: Date;
  setTime(newTime: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(newTime: Date): void {
    this.time = newTime;
  }
}

// ==================================================================================================
interface Styles {
  [key: string]: string; // когда мы не знаем количества свойств, мы пишем шаблон одного св-ва
}

const css: Styles = {
  border: '1px solid  bllue',
  margin: '10px',
  borderRadius: '10px'
};