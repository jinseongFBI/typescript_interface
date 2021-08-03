interface HelloPerson{
  (name:string,age?:number):void;
}

const helloPerson: HelloPerson=function(name:string,age?:number){
  console.log(`안녕하세요!${name} 입니다.`)
}
// const helloPerson: HelloPerson=function(name:string,age:number){
//   console.log(`안녕하세요!${name} 입니다.`)
// }-------age:number요거는 작은거라 큰거를 담을 수 없음

helloPerson('Mark',39);