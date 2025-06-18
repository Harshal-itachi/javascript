# JavaScript Array Methods - `map`, `filter`, `reduce`

This project demonstrates the usage of three powerful JavaScript array methods: `.map()`, `.filter()`, and `.reduce()`. These methods are commonly used in functional programming for data transformation and aggregation.

---

## 📋 Array Used

```js
const arr = [1, 2, 3, 4];

🔁 map() Method

✅ Purpose:
Transforms each element in the array based on the provided function.

function double(x) {
  return x * 2;
}

const darr = arr.map(double);
console.log(darr); // Output: [2, 4, 6, 8]

.

🔍 filter() Method

✅ Purpose:
Filters the array based on a condition and returns a new array with elements that satisfy the condition.

function odd(v) {
  return v % 2;
}

const oarr = arr.filter(odd);
console.log(oarr); // Output: [1, 3]

⚙️ reduce() Method
✅ Purpose:
Reduces the array to a single value by applying a function on each element and accumulating the result.
const rsum = arr.reduce(function(accumulator, curr) {
  accumulator = accumulator + curr;
  return accumulator;
});
console.log(rsum); // Output: 10


📝 Summary Table
| Method     | Description                               | Example Result |
| ---------- | ----------------------------------------- | -------------- |
| `map()`    | Applies a function to each element        | `[2, 4, 6, 8]` |
| `filter()` | Returns elements that pass a condition    | `[1, 3]`       |
| `reduce()` | Combines all elements into a single value | `10`           |
