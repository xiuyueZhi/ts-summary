export enum NUMBER_ENUM {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
export enum NUMBER_ENUM_FIRST_VALUE {
  UP = 5,
  DOWN,
  LEFT,
  RIGHT,
}

export enum CALCULATE_MEMBER {
  READ = 1 << 1,
  WRITE = 1 << 2,
  READ_WRITE = READ | WRITE,
}

export enum STRING_ENUM {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

// export enum STRING_ENUM {
//   UP = 'up',
//   DOWN = true,
//   LEFT = {},
//   RIGHT
// }

export const enum CONST_ENUM {
  NORMAL = 'normal',
  ABNORMAL = 'abnormal',
}

export enum MIXIN_ENUM {
  STR = 'string',
  NUM = 1,
}

// export const enum CONST_ENUM_CALC {
//   NORMAL = 'normal'.length, // error
//   ABNORMAL = 'abnormal'.lastIndexOf('2') //error
// }

export const enum CONST_ENUM_CALC_OTHER {
  NORMAL = 'nor' + 'mal',
  ABNORMAL = 1 << 1,
}
