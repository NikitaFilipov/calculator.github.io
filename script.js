const table =document.querySelectorAll('#table td button')
console.log(table)
const input=document.querySelector('input')
const deletebtn=document.querySelector('#deletebtn')
const resetbtn=document.querySelector('#reset')
const equalbtn=document.querySelector('#equal')
for(let td of table ){
    td.addEventListener('click',function(e){
        let value =e.target.dataset.num
        input.value+=value
    })
    equalbtn.addEventListener('click',function(){
        if(input.value ==''){
            input.value=''
        }else{
            let answer=eval(input.value)
            input.value=answer
        }
    })
   resetbtn.addEventListener('click',function(){
    input.value=''
   })
   
   deletebtn.addEventListener('click',function(e){
       if(e.target.innerHTML ='DEL'){
        let string = String(input.value)
        string =string.substring(0,string.length-1)
        input.value=string
       }
       else{
        string+=e.target.innerHTML;
        input.value=string
       }
    })
}
