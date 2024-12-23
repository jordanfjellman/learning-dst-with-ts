import assert from "node:assert"

export function isEven(num: number): boolean {
  return num % 2 === 0
}

function main() {
  assert(isEven(0))
  assert(!isEven(1))
  assert(isEven(2))

  console.debug("'isEven' is working correctly.")
}

main()
