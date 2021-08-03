interface Person3{
  name:string;
  age?:number;//이름이명시하고 이름이 있는 지 없는지 
  [index:string]:any;//어떠한 프로퍼티든지 괜찮아
}

function hello3(person:Person3):void{
  console.log(`안녕하세요! ${perosn.name} 입니다.`)
}

const p31:Person3={
  name: 'Mark',
  age:39,
};

const p32:Person3={
  name:"Anna",
  systers:['Sung',"Chan"]
};

const p33:Person3={
  name:"Bokdaengi",
  father:p31,
  mother:p32,
}
hello3(p33);