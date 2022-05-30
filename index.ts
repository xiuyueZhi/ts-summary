import { BasicType } from './BasicType';
import { AdvancedType } from './AdvancedType';
import { NUMBER_ENUM, STRING_ENUM, MIXIN_ENUM } from './Enum';
import { TypeAssets } from './TypeAssets';
import { TypeProtect } from './TypeProtect';
import { TypeAndInterface } from './TypeAndInterface';
import { Overload } from './Overload';

// const basic = new BasicType();
// basic.handleDifferenceVoidAndNever();
// basic.handleDifference();
// basic.handleAny("string");
// basic.handleAny(123);
// basic.handleAny(true);

// basic.handleUnknown("string");
// basic.handleUnknown(123);
// basic.handleUnknown(true);

// basic.handleVoid();

// basic.handleNever();
// basic.handleError("throw error never");

// 元组
// basic.logTuple();

// // 自定义 key
// basic.logRandomKey();

// // 自定义key ,key 的类型为 number. 与数组类似，访问需要用下标
// basic.logRandomKeyNUmber();

// console.log(NUMBER_ENUM);
// console.log(NUMBER_ENUM_FIRST_VALUE);
// console.log(CALCULATE_MEMBER);
// console.log(CONST_ENUM.ABNORMAL);
// console.log(STRING_ENUM);
// console.log(MIXIN_ENUM);

// const typeguess = new TypeGuess();
// typeguess.logTypeAuto();

// const advancedType = new AdvancedType();
// console.log("as", advancedType.logTypeAs(123));
// advancedType.logTypeAssert2(123);
// advancedType.logExtendsKeyof();
// advancedType.logConstType();

// const typeAssets = new TypeAssets();
// typeAssets.handleSymbol();
// typeAssets.handleAs();

// const typeProtect = new TypeProtect();
// typeProtect.handleIn();
// typeProtect.handleTypeof(12);
// typeProtect.handleInstanceof();
// typeProtect.handleDefine()

// const typeAndInterface = new TypeAndInterface();

// typeAndInterface.handleType();
// typeAndInterface.handleInterface();

const overload = new Overload();
// overload.handleFunction();
// overload.handleOverloadOrder();
overload.handleOverloadClassFunction();
