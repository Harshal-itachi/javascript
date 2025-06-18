//map 
const arr =[1,2,3,4]

function double(x){
    return x*2;
    
}
const darr= arr.map(double,index)
console.log(darr)
console.log(index)


// filtre
function odd (v){
return v%2
}
const oarr= arr.filter(odd)
console.log(oarr)
//reduce
function sum(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum=sum+arr[index]
        
    }
    return sum
}
console.log(sum(arr))
//reduce mathod
const rsum = arr.reduce(function(accumulator,curr){
    accumulator=accumulator+curr
    return accumulator
})
console.log(rsum)