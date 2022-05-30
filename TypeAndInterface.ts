export class TypeAndInterface {
  handleType() {
    type num = number;
    type numOrStr = number | string;
    type point = [number, number];
    type text = [string, string[]];
    type claaback = (data: string) => void;
    type Animal = {
      name: string;
      breath: () => void;
    };
    // type Animal {
    //   category: string;
    // }
    const ani: Animal = {
      name: 'type',
      breath: () => console.log('type'),
    };
    ani.breath();

    type Cat = Animal & {
      favoriateFood: string;
    };

    interface Dog extends Animal {
      favoriateFriend: string;
    }
  }

  handleInterface() {
    interface Animal {
      name: string;
      breath: () => void;
    }
    // interface Animal {
    //   category: string;
    // }
    const ani: Animal = {
      name: 'type',
      breath: () => console.log('type'),
    };
    ani.breath();

    interface Cat extends Animal {
      favoriateFood: string;
    }

    type Dog = Animal & {
      favoriateFriend: string;
    };
  }
}
