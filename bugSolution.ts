function combine(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const result = combine([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [1, 2, 3, 4, 5, 6]

//More robust example with explicit type annotation
function combineGeneric<T>(arr1: T[], arr2: T[]): T[] {
    return [...arr1,...arr2];
}
const result2 = combineGeneric<number>([1,2,3],[4,5,6]);
const result3 = combineGeneric<string>(['a','b','c'],['d','e','f']);
console.log(result2, result3); // Output: [1, 2, 3, 4, 5, 6] ['a', 'b', 'c', 'd', 'e', 'f']