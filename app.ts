// type student={
//     Name:string,
//     lastName:string,
//     age:number,
//     score: number,
// };
// const Students:Array<student>=[
//     {
//     Name:"Ali",
//     lastName:"Alizada",
//     age:23,
//     score:90,
//     },
//     {
//     Name:"Ali aqa",
//     lastName:"Muhamadi",
//     age:28,
//     score:99,
//     },
//     {
//     Name:"Muhammad",
//     lastName:"Qasimi",
//     age:33,
//     score:89,
//     },
//     {
//     Name:"Muhammad Ali",
//     lastName:"Qayomi",
//     age:54,
//     score:69,
//     },
//     {
//     Name:"Wafa Ali",
//     lastName:"Rahimi",
//     age:23,
//     score:98,
//     },
// ]


// const ArrayList:[string,number,boolean,number]=["Ahmad",43,false,45,];

// interface Human {
//      id:number;
//     name:string;
//     lastName:string;
//     age?:number;
//     score:number|string;
//     passed?:boolean;
// }


// const number1:[number,number,number,number,number]=[5,6,7,8,9]
// const numbers:number[]=[1,2,3,4,8];
// type people ={
//     id?:number|string|number[];
//     name:string|boolean;
//     lastName:string;
//     score:number;
//     passed:boolean;
// }
// const person1:Human={
//     id:1,
//     name:"Ahmad",
//     lastName:"Alizada",
//     age:23,
//     score:"99",
//     passed:true,
// }
// const person2:Human={
//     id:2,
//     name:"Ali",
//     lastName:"Raha",
//     age:43,
//     score:59,
   
// }
// const person3:Human={
//     id:3,
//     name:"Layla",
//     lastName:"Nori",
//     age:24,
//     score:79,
//     passed:true,
// }
// type status=boolean;
// const isMarried:status=true;


// interface ComputerInfo {
//     id:string;
//     model:string;
//     company:string;
//     serialNumber:number|string;
//     color:string|number;
//     batteryHealth:string;
//     price:number;
// }
// const myComputer={
//    id: 1,
//    model:"Latitude 7499",
//    company:"DELL",
//    serialNumber:2323,
//    color:"black",
//    batteryHealth:"Exellent",
//    price:25000,
// }

interface person{
    name:string,
    id: number,
}
interface Employee extends person{
    job: string,
}
const employee1:Employee={
    job:"Developer",
    id: 1,
    name: "Ali",
}


interface Human{
    age: number,
    name: string,

}

interface students extends Human{
  id:number,
   grade: number,
}
const studetn1:students[]=
[
    {
    id:1,
    name:"Alina",
    age:15,
    grade: 7,
},
    {
    id:2,
    name:"Layla",
    age:18,
    grade: 12,
}
]