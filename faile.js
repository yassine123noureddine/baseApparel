const btn=document.getElementsByTagName("button");
const input1=document.getElementById('srch');
const p=document.getElementById("P_validE") ;



function validation(e){
    e.preventDefault();
    const vlidEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
     const v= vlidEmail.test(input1.value)
   
    if(v==true){
        p.innerHTML=" email success"
        input1.value=""
        p.style.color="green"
        p.style.paddingLeft="30px"
    }else{
      
        p.innerHTML=" Email not valid"
        p.style.color="red"
        p.style.paddingLeft="30px"
        input1.value=""
      
    }
  
}
// function clearinput(){
//     if(validation(e)==true){
//         input1.textContent="";

//     }
//     else{
//     }
// }
// console.log( p)
// console.log( btn)
// console.log( input1)