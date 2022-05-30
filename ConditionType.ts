export class ConditionType {
  handleIsString() {
    type IsString<T> = T extends string ? true : false;
    type typeA = IsString<string>; // true
    type typeB = IsString<'str'>; // true
    type typeC = IsString<true>; // false
    type typeD = IsString<any>; // boolean
    type typeE = IsString<never>; // never
    type typeF = IsString<void>; // false

    type a = any extends string ? true : false;

    type b = never extends string ? true : false;

    type c = void extends string ? true : false;
  }

  handleUnionConditionType() {
    type typeName<T> = T extends string
      ? 'string'
      : T extends number
      ? 'number'
      : T extends boolean
      ? 'boolean'
      : T extends Function
      ? 'function'
      : 'object';

    type t1 = typeName<string>; // "string"
    type t2 = typeName<string | number>; // "string" | "number"
    type t3 = typeName<string | (() => void)>; // "string" | "function"

    type booleanType<T> = T extends boolean ? 'Y' : 'N';
    type booleanArray<T> = T[] extends boolean[] ? 'Y' : 'N';

    type boolean1 = booleanType<number | boolean>; // "Y" | "N"
    type boolean2 = booleanArray<number | boolean>; // "N"
  }

  handleExclude() {
    type Exclude<T, U> = T extends U ? never : T;
    type excludeType = Exclude<'a' | 'b' | 'c', 'a' | 'b'>; // "c"
  }

  logExclude() {
    type exclude = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

    // type s2 = 'a' | 'b'
    // type s = s2 & 'c'

    // type test<T, U> = T extends U ? never : T
    // type define = s extends s2 ? never : s
    // type t = test<s,s2>

    // type unionNever = string | never

    // const ssss:sa='b'
    // const s: unionNever = ''
  }

  logExtract() {
    type extract = Extract<'a' | 'b' | 'c', 'a' | 'b'>;

    const test: extract = 'a';

    console.log(test);

    // type s2 = 'a' | 'b'
    // type s = s2 & 'c'

    // type test<T, U> = T extends U ? never : T
    // type define = s extends s2 ? never : s
    // type t = test<s,s2>

    // type unionNever = string | never

    // const ssss:sa='b'
    // const s: unionNever = ''
  }
}
