# JavaScript Objects - Examples & Concepts

This project demonstrates various JavaScript object operations including property access, modification, deletion, computed properties, cloning techniques, JSON methods, the spread/rest operators, and object mutation through functions.

---

## 🧪 Topics Covered

### ✅ 1. Accessing Object Properties
```js
const obj2 = { name: "harshal", age: 20 };
console.log(obj2.name); // Output: "harshal"


### ✅ 2. modifying
obj2.name = "charn";


### ✅ 3. deleting
delete obj2.age;


### ✅ 4. computing property 
let property = "firstname";
const person = { [property]: "harshal" };


### ✅ 5. looping 
for (let key in obj2) {
  console.log(key, obj2[key]);
}



### ✅ 6. JSON method 
JSON.stringify(obj3, ['level', 'health']);


### ✅ 7. sprade operator 
const admin = {
  admin: true,
  ...obj3,
};

### ✅ 8. shellow copy
const copy = user;
copy.age = 28; // Affects original object


### ✅ 9.deep copy
const copy2 = JSON.parse(JSON.stringify(user));


### ✅ 10.cloning
const clone1 = Object.assign({}, obj);
const clone2 = JSON.parse(JSON.stringify(obj));
const clone3 = { ...obj };


### ✅ 11.object mutation via function
function changeAgeAndReference(person) {
  person.age = 25; // Mutates original object
  person = { name: "John", age: 50 }; // New object (doesn't affect original)
  return person;
}


### ✅ OUTPUTS

access
harshal

modified
charn

deleted age
undefined

computed
{ firstname: 'harshal' }

looping
name charn looping

JSON Method
{"level":19,"health":90}

spread operator
{ admin: true, level: 19, health: 90, username: 'harshal' }

shallow copy
28

deep copy
19

cloning
{ a: 1, b: 2, c: 3 }
{ a: 1, b: 2, c: 3 }
{ a: 1, b: 2, c: 3 }

mutation via function
{ name: 'Alex', age: 25 }
{ name: 'John', age: 50 }
