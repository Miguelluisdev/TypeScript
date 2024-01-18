function firstElement<T>(array: T[] ,) : T {
  return array[0]
}

const first = firstElement([1,2,23,3,4,4,5,5,,7,8,8,9,9])
console.log(first)