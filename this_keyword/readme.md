# JavaScript `this` Keyword - Contextual Behavior

This project explores how the `this` keyword behaves in different contexts within JavaScript, including global scope, regular functions, object methods, arrow functions, and arrow functions nested inside regular functions.

---

## 🧪 Code Demonstrations

### 🌍 1. Global Context
```js
console.log("global");
console.log(this);


.

🧱 2. Inside an Object Method 

const obj = {
  a: 10,
  x: function () {
    console.log("object this");
    console.log(this);
    console.log(this.a);
  },
};
obj.x();


🧪 3. Inside a Standalone Function
function z() {
  console.log("function this");
  console.log(this);
}
z();

🏹 4. Arrow Function Inside an Object
const obj1 = {
  a: 10,
  x: () => {
    console.log("arrow function");
    console.log(this);
  },
};
obj1.x();

🏹➡️ 5. Arrow Function Inside a Regular Function
const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log("arrow function inside Simple function");
      console.log(this);
    };
    y();
  },
};
obj2.x();

📝 Summary

| Context                                 | `this` refers to                             |
| --------------------------------------- | -------------------------------------------- |
| Global scope (browser)                  | `window`                                     |
| Global scope (Node.js)                  | `{}` or module exports                       |
| Inside object method (regular function) | That object                                  |
| Standalone function                     | `window` (non-strict) / `undefined` (strict) |
| Arrow function                          | Lexical `this` (surrounding scope)           |
| Arrow function inside object method     | The object, if parent is regular function    |
