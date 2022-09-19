

'use strict';
let btn = document.getElementsByTagName('button');
for (let i = 0; i < btn.length; i++){
    btn[i].onclick =(e)=>{

        try {
            if(e.target.value !== '=' && e.target.value !== 'clear'){
                if(display.innerText === '0') {
                    display.innerHTML ='';
                    display.innerHTML = e.target.value;
                }else{
                    display.innerHTML += e.target.value;
                }
            }else if(e.target.value === '='){
                let result = eval(display.innerText);
                if(result %1 !== 0){
                    display.innerHTML = result.toFixed(2)
                }else {
                    display.innerHTML = result;
                }
            }else{
                display.innerHTML = ' 0 ';
            }
        }catch (error) {
            alert(error.message);
            display.innerHTML = ' 0 ';
        }

    }
}


window.onload = (e)=> {
    setInterval(() => {
        let date = new Date();
        time.innerHTML = `${date.getHours() % 12}:${date.getMinutes()}:${date.getSeconds()}`;
        document.getElementById('date').innerHTML = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`;
    }, 1000)
}
