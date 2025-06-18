
// global context
console.log("global")
console.log(this)

//inside object 
const obj={
    a:10,
    x:function(){
        console.log("object this")
        console.log(this)
       console.log(this.a)
    }
}
obj.x()
//inside function
function z(){
    console.log("function this")
    console.log(this)
}
z()
const obj1 = {
  a: 10,
  x: () => {
    console.log("arrow function")
    console.log(this); 
  },
};
obj.x();

const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
        console.log("arrow function inside Simple function")
      console.log(this);
      
    };
    y();
  },
};
obj2.x();