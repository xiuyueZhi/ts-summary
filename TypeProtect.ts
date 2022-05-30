export class TypeProtect {
  handleIn() {
    interface Admin {
      name: string;
      privileges: string[];
    }

    interface Employee {
      name: string;
      startDate: string;
    }

    type UnknownEmployee = Employee | Admin;

    function printEmployeeInformation(emp: UnknownEmployee) {
      console.log('Name: ' + emp.name);
      if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
      }
      if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
      }
    }

    const admin: UnknownEmployee = {
      name: 'admin',
      privileges: ['addEmployee', 'removeEmployee'],
    };

    printEmployeeInformation(admin);
  }

  handleTypeof(value: number | string) {
    if (typeof value === 'string') {
      console.log(value.length);
    } else if (typeof value === 'number') {
      console.log(++value);
    }
  }

  handleInstanceof() {
    class Animal {
      name: string;
      category: string;
    }
    class Cat extends Animal {
      favoriateFood: string;
    }
    class Dog extends Animal {
      favoriateFriend: string;
    }

    const dog: Animal = new Dog();

    if (dog instanceof Dog) {
      console.log('this is a dog');
    } else if (dog instanceof Cat) {
      console.log('this is a cat');
    }
  }

  handleDefine() {
    this.isNumber(123);
  }

  isNumber(x: any): x is number {
    return typeof x === 'number';
  }
  isString(x: any): x is string {
    return typeof x === 'string';
  }
}
