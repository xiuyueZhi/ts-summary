// interface RandomKey {
//   [propName: string]: string;
// }

// interface RandomKeyNumber {
//   [propName: number]: string;
// }

export class BasicType {
  // constructor() {}
  handleNever(): never {
    while (true) {}
  }
  handleError(msg: string): never {
    throw new Error(msg);
  }

  handleNeverValue(value: string | number) {
    let neverType: never;
    let stringType: string = neverType;
    let numberType: number = neverType;
    let anyType: any = neverType;

    // let neverValue: never ;
    // let anyValue: any;
    // neverValue = 'string';
    // neverValue = 123;
    // neverValue = boolean;
    // neverValue = anyValue;

    if (typeof value === 'string') {
    } else if (typeof value === 'number') {
    } else {
      let neverValue: never = value;
      // neverValue = 'string';
      // neverValue = 123;
      // neverValue = boolean;
      // console.log('never type：', typeof neverValue);
    }
  }

  handleType(a: string | number) {
    if (typeof a === 'string') {
      console.log(a.length);
    } else if (typeof a === 'number') {
      console.log(a.toString());
    } else {
      const b: never = a;
      const str: string = b;
      console.log(b);
    }
  }

  // 元组
  logTuple(): void {
    // type strNum = string | number
    // const arr: strNum[]= []
    // arr.push(1)
    // arr.push("str")

    // const tuple: [number, string] = [1, "str1", 2];
    const tuple: [number, string] = [1, 'str1'];
    tuple.push(2);
    console.log(tuple);
  }

  logRandomKey(): void {
    interface person {
      name: string;
      age: number;
    }
    interface RandomKey {
      [propName: string]: string;
    }
    const randomkey: RandomKey = {
      a: 'str1',
      b: 'str2',
      c: 'str3',
    };
    console.log(randomkey.a);
  }

  logRandomKeyNUmber(): void {
    interface RandomKeyNumber {
      [propName: number]: string;
    }

    interface IDuck {
      (value: string): void;
      str: string;
    }
    const duck: IDuck = (value: any) => {};
    duck.str = '123';

    // const duck2: IDuck = {
    //   function name(params:type) {

    //   },
    //   str: 2
    // }

    const randomkey: RandomKeyNumber = ['str1NUmber', 'str2Number'];
    console.log(randomkey[0]);
  }
  /**
   * BasicType
   */
  handleAny(value: any) {
    console.log(`typeof ${value}：`, typeof value);
  }

  /**
   * BasicType
   */
  handleUnknown(value: any) {
    console.log(`typeof ${value}：`, typeof value);
  }

  /**
   * BasicType
   */
  handleVoid(): void {
    console.log('void 表示没有返回值');
  }

  handleDifferenceVoidAndNever(): never {
    console.log('void & never');
  }
  handleDifference(): void {
    let voidValue: void = undefined;
    console.log('void property：', voidValue);

    let neverValue: never;
    console.log('never property：', neverValue);

    let anyValue: any = 'string';
    console.log('any to string：', anyValue.length);
    anyValue = 123;
    console.log('any to number', anyValue.length);

    let unknownValue: unknown = 'string';
    console.log('unknownValue to string：', unknownValue.length);

    unknownValue = 123;
    console.log('unknownValue to number', (unknownValue as string).length);

    console.log('void & never & any & unknown');
  }
}
