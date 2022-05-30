export class Overload {
  handleFunction() {
    type NumOrStr = number | string;
    function add(a: number, b: number): number;
    function add(a: string, b: string): string;
    function add(a: string, b: number): string;
    function add(a: number, b: string): string;
    function add(a: NumOrStr, b: NumOrStr): NumOrStr {
      if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
      }
      return a + b;
    }
    console.log(add(1, 2));
    console.log(add('1', 2));
  }

  handleOverloadOrder() {
    type NumOrStr = number | string;
    function add(a: any, b: any): number;
    function add(a: NumOrStr, b: NumOrStr): string;
    function add(a: number, b: number): number;
    function add(a: any, b: any) {
      if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
      }
      return `${a + b}`;
    }
    console.log(typeof add({}, 2));
  }

  handleOverloadConstructor() {
    class Animal {
      name: string;
      category: string;
      constructor();
      constructor(name: string);
      constructor(name: string, category: string);
      constructor(name?: string, category?: string) {
        this.name = name;
        this.category = category;
      }
    }
    const animal = new Animal();
    const animal2 = new Animal('cat');
    const animal3 = new Animal('cat', 'cat');
  }

  handleOverloadClassFunction() {
    class Animal {
      name: string;
      category: string;
      logCount();
      logCount(num: number);
      logCount(num?: number) {
        console.log('sum：', +num);
      }
    }
    const animal = new Animal();
    animal.logCount();
    animal.logCount(2);
  }
}
