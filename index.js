let strng="";
let btns=document.querySelectorAll('.button');
Array.from(btns).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            try{
                strng=eval(strng);
            document.querySelector('input').value=strng;
            }
            catch{
                strng="Please Enter Valid Inputs!";
                document.querySelector('input').value=strng;
            }
            
        }
        else if(e.target.innerHTML=='sqrt'){
            strng=eval(strng)
            num=parseInt(strng)
            num=Math.sqrt(num)
            document.querySelector('input').value=num;
        }
        else if(e.target.innerHTML=='X'){
            strng=strng.slice(0,strng.length-1)
            document.querySelector('input').value=strng;
        }
        else if(e.target.innerHTML=='C'){
            strng=""
            document.querySelector('input').value=strng;
        }
        else{
        strng=strng+btn.innerHTML;
        document.querySelector('input').value=strng;
        }
        
    })
})