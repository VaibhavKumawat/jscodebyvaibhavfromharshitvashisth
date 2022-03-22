// undefined  if we declare anything and 
// didnt asign value then it will show us undefined


let firstname;
console.log(typeof firstname);

// we cannot do this with const
// const secondname ;  //this will show us an error
// console.log(secondname);

let thirdname="vaibhav";
console.log(typeof thirdname,thirdname);


//null
let myvar=null;
console.log(myvar);
console.log (typeof null);
            //      |
        //       this will give us type object it is bug in js this will give us type object



//bigint
let mynumber=123;
console.log(mynumber);
 //if we want to store number above kimit of js then use bigint it is primitive datatype
//   we can store small number also in bigint
// to make number bigint we use 
let bignumber=BigInt(12);
// or 
let smallnumber=123n //just add n at the end of number

console.log(typeof bignumber);
console.log(typeof smallnumber);