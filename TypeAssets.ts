export class TypeAssets {
  handleSymbol() {
    let value: any = 'any value';
    let valueLength: number = (<string>value).length;
    console.log(valueLength);
  }

  handleAs() {
    let value: any = 'any value';
    // const x = 'hello' as number;
    const x = 'hello' as any;
    let valueLength: number = (value as string).length;
    console.log(valueLength);
  }
}
