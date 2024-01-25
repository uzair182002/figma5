// let mainF=()=>{
//     console.log("hello world");
// }
// let child=(_callback,)=>{
// mainF();
// }
// child(mainF)

//callback

// let greet= (callback,name)=>{
// console.log(`hello ${name}`);
// callback();
// }
// let GoodMorning=()=>{
//     console.log("hello World");


// }
// greet(GoodMorning,"Mahnoor");

// let parent=(callback,name)=>{

//     setTimeout(() => {
//         console.log(`welcom to ${name}`);
//         callback();
//     }, 1000);
// }
// let child=()=>{
//     console.log("hello world");
// }
// parent(child,"Karchi uni");

let scriptLoad= (src,callback)=>{
    let script = document.createElement('script');
    script.src= src
    script.onload = callback("Mahnoor")
    document.head.append(script)
}
let gm =(a)=>{
    alert(a)
}
scriptLoad("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",gm)