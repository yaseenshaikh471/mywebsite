// // let submit = document.getElementById("submit");
// // console.log(submit);
// // let firstpara = document.querySelector("p");
// // console.log(firstpara);
// // //querySelector are auto detect the tag, id and class name,
// // let para = document.querySelectorAll("p");
// // console.log(para);

// // // /n is used for new line in the string
// // let str = "Hello\nWorld";
// // console.log(str);

// // // /t is used for tab space in the string
// // let str1 = "Hello\tWorld";
// // console.log(str1);

// // let div =document.querySelectorAll("p");
// // console.dir(div);


// // //innerText is used to get the text content of the element
// // //innerHTML is used to get the HTML content of the element
// // //textContent is used to get the text content of the element, but it does not return the hidden text

// // let newbtn = document.createElement("button");
// // newbtn.innerText = "Click Me";

// // // document.body.prepend(newbtn);
// // // document.body.remove(newbtn);

// // let modebtn= document.querySelector("#mode");
// // let cuurectmode = "light";
// // modebtn.addEventListener("click", ()=>{
// //     console.log("Button Clicked");
// //     if(cuurectmode === "light"){
// //         cuurectmode = "dark";
// //         document.body.style.backgroundColor = "black";
// //     }
// //         else{cuurectmode = "light";
// //         document.body.style.backgroundColor = "white";
// //         }
// //         console.log(cuurectmode);
// // }

// // );


// const student = {
//     fullName: 'Yaseen Shaikh',
//     marks: 94,
//     details: function () {
//         console.log('marks = ',this.marks)
//     }
// }

// class cars {
// constructor(brand,milage){
//         this.brand=brand
//         this.milage=milage
//         console.log(this.brand)
//         console.log(this.milage)}
        

//     start(){
//         console.log("strat the car")
//     }
//     stop(){
//         console.log('stop the car')
//     }
    
//     }
// let toyota = new cars("Toyota",12);
// console.log(toyota)


// // const thisfunction = ()=>{
// //     console.log('is it working')
// // }

// // const child = new thisfunction()
// // child()

// class students{
//     constructor(username,user_std){
//         this.username=username
//         this.user_std=user_std
//     }
    
//     name(){
//         console.log(this.username)
//     }
//     std(){
//         console.log(user_std)
//     }
// }

// const yaseen= new students('yaseen','graduate')
// console.log(yaseen.name())


// class user{
//     constructor(name,email){
//         this.name=name
//         this.email=email
//     }
//     username(){
//         console.log(this.name)
//     }
//     useremail(){
        
//             console.log(this.email)
//         }

//     viewData(){
//         console.log('Sorry please contact admin')
//     }
// }
// const user1= new user('Asad','asad@asp.com')

let a = 5;
let b = 10;

console.log(a + b)
console.log(a - b)
console.log(a / b)
console.log(a * b)
try {
    console.log(a + c)
   }   catch (err){
        console.log(err)
    }

console.log(a % b)