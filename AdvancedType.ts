export class AdvancedType {
  logTypeUnion(param: string | number) {
    // param.
    if (typeof param === 'string') {
      console.log(param.length);
    } else if (typeof param === 'number') {
      console.log(param.toFixed());
    }
    console.log('类型错误');
  }

  logTypeExpand() {
    interface Person {
      name: string;
      age: number;
    }
    let student: Person & { grade: number } = {
      name: '学生',
      age: 16,
      grade: 12,
    };
    console.log(student);
  }

  logCommon() {
    type str_number = string & number; // never
    type any_str = any & string; // any
    type any_never = any & never; // never

    // 拥有不同属性的对象
    interface ITypeA {
      a: string;
      b: number;
    }
    interface ITypeB {
      c: number;
    }

    type ITypeA_ITypeB = ITypeA & ITypeB;

    interface AB {
      a: string;
      b: number;
      c: number;
    }

    const ab: ITypeA_ITypeB = {
      a: 'str',
      b: 1,
      c: 2,
    };

    // 拥有部分相同属性，但是类型不同的对象
    interface ITypeA2 {
      a: string;
      b: number;
    }
    interface ITypeB2 {
      a: number;
      c: number;
    }

    type ITypeA2_ITypeB2 = ITypeA2 & ITypeB2;

    interface AB2 {
      a: string & number;
      b: number;
      c: number;
    }

    const ab2: ITypeA2_ITypeB2 = {
      a: undefined,
      b: 1,
      c: 2,
    };

    // 拥有相同属性，但这些属性的类型不是基础类型，而是对象类型
    interface a {
      a: string;
    }
    interface b {
      b: number;
    }
    interface c {
      c: boolean;
    }
    interface ITypeA3 {
      a: a;
    }
    interface ITypeB3 {
      a: b;
    }
    interface ITypeC3 {
      a: c;
    }

    type ITypeA3_ITypeB3 = ITypeA3 & ITypeB3 & ITypeC3;

    interface ABC3 {
      a: {
        a: string;
        b: number;
        c: boolean;
      };
    }

    const ab3: ITypeA3_ITypeB3 = {
      a: {
        a: 'str',
        b: 123,
        c: true,
      },
    };

    // 对象类型进行交叉运算的时候，如果对象中相同属性类型时字面量类型或字面量类型组合成的联合类型

    interface ITypeAConst {
      a: { type: 'phone'; price: number };
    }
    interface ITypeBConst {
      a: { type: 'computer'; price: number };
    }

    type ITypeAConst_ITypeBConst = ITypeAConst & ITypeBConst;

    interface ABConst {
      a: never;
    }

    const ab4: ITypeAConst_ITypeBConst = {
      a: {
        type: 'phone',
        price: 10000,
      },
    };

    // 存在相同的属性，并且属性的类型是对象，则属性会按照前两点的规则进行合并
    interface ITypeA5 {
      a: { type: string; price: number };
    }
    interface ITypeB5 {
      a: { type: number; price: number };
    }

    type ITypeA5_ITypeB5 = ITypeA5 & ITypeB5;

    interface AB5 {
      a: {
        type: never;
        price: number;
      };
    }

    const ab5: ITypeA5_ITypeB5 = {
      a: {
        type: 'phone',
        price: 10000,
      },
    };

    // 函数交叉类型
    type F1 = (a: string, b: string) => string;
    type F2 = (a: any, b: number) => number;

    function overloadF(a: string, b: string): string;
    function overloadF(a: any, b: number): number;
    function overloadF(a: any, b: string | number) {
      return b;
    }

    let f: F1 & F2 = overloadF;
    f('hello', 'world');
    f(1, 2);
    f(true, '2');
    // f(1, 'test'); // Error

    // 函数联合类型
    type F11 = (a: string, b: string) => string;
    type F21 = (a: any, b: number) => number;
    let f2: F11 | F21 = (a: any, b: never) => {
      return a;
    };
    let f3: F11 | F21 = (a: string, b: string) => {
      return a;
    };
    let f4: F11 | F21 = (a: any, b: number) => {
      return a;
    };
    let neverValue: never;
    // f2('hello', 'world');
    f2(1, neverValue);
    f2('1', neverValue);
    console.log(f2(true, neverValue));
    f3('1', '1');
    f4(1, 1);
    // f2(1, 'test'); // Error
    f2(neverValue, neverValue);

    // 对象联合‘
    // type obj1 = {a: number, b: string}
    // type obj2 = {a: string, b: string, c: number}
    // type obj3 = obj1 | obj2
    // let obj4:obj3 = {a: true, b: '123'}

    // type obj11 = {a: {a: number, b: string}}
    // type obj21 = {a:{a: string, b: string, c: number}}
    // type obj31 = obj11 | obj21
    // let obj41:obj31 = {a: true}

    console.log(ab);
  }

  logType() {
    type str = string;
    const name: str = '基本类型';

    type numOrStr = number | string;
    const age: numOrStr = '联合类型';

    type tuple = [str, numOrStr];
    const tupleExample: tuple = ['元组类型', 1];

    type numArr = str[];
    const arr: numArr = ['数组类型'];

    type Person = {
      name: str;
      age: numOrStr;
    };

    // type Person = {
    //   sex: num
    // }

    // interface IPerson {
    //   name: str;
    //   age: num;
    // }
    type Func = (x: number, y: number) => number;
    interface IFunc {
      (x: number, y: number): number;
    }
    // interface IFunc {
    //   (x: string, y: string): string;
    //   (z: string): string;
    // }

    // const funRepeat: IFunc = (x,y) => x+y;

    // console.log(funRepeat)
    interface IPerson {
      name: str;
      age: numOrStr;
    }

    interface IPerson {
      sex: numOrStr;
    }

    // const objRepeat: IPerson = {}

    const person: Person = { name: '对象类型', age: '10' };

    type Student = Person & { grade: numOrStr };

    interface IStudent extends Person {
      grade: number;
    }

    const student: Student = { name: 'type 继承', age: 16, grade: 12 };
  }
  // return param.length

  logTypeProtect(param: string | number): number {
    if (typeof param === 'string') {
      return param.length;
    } else {
      return param.toString().length;
    }
  }

  logTypeAs(param: string | number): number {
    const str = param as string;
    console.log(str);
    if (str.length) {
      return str.length;
    } else {
      const num = param as number;
      return num + 1;
    }
  }

  logTypeAssert2(param: string | number): number {
    const str = <string>param;
    console.log(str);
    if (str.length) {
      return str.length;
    } else {
      const num = param as number;
      return num + 1;
    }
  }

  logConstType() {
    type Sex = '男' | '女';
    const sex: Sex = '性别';
    console.log(sex);
  }

  logKeyof() {
    interface Person {
      name: string;
      age: number;
    }
    type keys = keyof Person; // 'name' | 'age'
    const str: keys = 'name';
    const str2: keys = 'age';
    console.log(str);
  }

  logByKey() {
    interface Person {
      name: string;
      age: number;
    }
    type str = Person['name']; // string

    // const strLog: str = 1;
  }

  logExtendsKeyof() {
    interface Person {
      name: string;
      age: number;
    }
    const person: Person = { name: '继承 keyof', age: 10 };
    // console.log(this.getValues(person, "name"));
    console.log(this.getValues(person, 'sex'));
  }

  getValues<T, K extends keyof T>(userInfo: T, key: K): T[K] {
    return userInfo[key];
  }

  // handleAdvanceType() {
  //   let unionType: number | string;
  //   unionType.toString() // ok
  //   unionType.length // error

  // }

  handleMapType() {
    type User = {
      name: string;
      age: number;
      address: string;
    };

    // //查询时，所有属性只读
    // type UserReadOnly = {
    //   readonly name: string;
    //   readonly age: number;
    //   readonly address: string;
    // };

    // // 修改时，可只传入部分属性
    // type UserPartial = {
    //   name?: string;
    //   age?: number;
    //   address?: string;
    // };
    type UserReadOnly = { readonly [P in keyof User]: User[P] };
    type UserPartial = { [P in keyof User]?: User[P] };

    // type Getters<T> = {
    //   [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
    // };
    // type UserGet = Getters<User>;
  }
}

interface Animal {
  age: number;
}

interface Dog extends Animal {
  bark(): void;
}

let visitAnimal = (animal: Animal) => {
  animal.age;
};

let visitDog = (dog: Dog) => {
  dog.age;
  dog.bark;
};

const animal: Animal = { age: 10 };
const dog: Dog = {
  age: 10,
  bark() {
    console.log('bark');
  },
};

// visitDog 要求入参是 dog, visitDog实现被替换成 visitAnimal
// visitDog = visitAnimal;
// visitDog(dog);
// visitAnimal 要求入参是 animal, visitAnimal 实现被替换成 visitDog
visitAnimal = visitDog;
visitAnimal(animal);
