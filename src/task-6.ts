function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
const number = getFirstElement<number>([1, 2, 3]);                 // 1
const string = getFirstElement<string>(["a", "b", "c"]);           // "a"
const boolean = getFirstElement<boolean>([true, false, true]);     // true
const mixed = getFirstElement<number | string>([1, "two", 3]);  // 1

console.log(number, string, boolean, mixed);