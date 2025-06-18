//OBJECTS

//access
const obj2={
    name:"harshal",
    age:20
}
console.log("access")
console.log(obj2.name)

// modify
obj2.name="charn"
console.log("modified",obj2.name)
//delete
delete obj2.age
console.log("deleted age",obj2.age)

// computed properties
let property = "firstname"
let person={
    [property]:"harshal"

}
console.log("computed", person)

//looping object
for(let key in obj2){
    console.log(key,obj2[key],"looping")
}

//JSON method


const obj3={
    level:19,
    health :90,
    username:"harshal"
}
console.log("JSON Method")
console.log(JSON.stringify(obj3,['level','health']))

//spread operator
const admin={
    admin:true,
    ...obj3
}
console.log("spread operator")
console.log(admin)


//rest operator


// shallow copy
const user = {
  name: "harshal",
  age: 20,
};
const copy = user;
copy.age = 28;
console.log("shallow copy");
console.log(user.age);

//deep copy
const copy2 = JSON.parse(JSON.stringify(user));
copy2.age = 19;
console.log("deep copy");
console.log(copy2.age);

//coloning technique
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const clone1 = Object.assign({}, obj);
const colne2 = JSON.parse(JSON.stringify(obj));
const clone3 = { ...obj };
console.log("cloning");
console.log(clone1);
console.log(colne2);
console.log(clone3);

//object mutation via function

function changeAgeAndReference(person) {
  person.age = 25;
  person = { name: "John", age: 50 };
  return person;
}
const personObj1 = {
  name: "Alex",
  age: 30,
};
const personObj2 = changeAgeAndReference(personObj1);
console.log("mutation via function")
console.log(personObj1);
console.log(personObj2)
