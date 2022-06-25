const userText = document.querySelector('#imputText');
const textShow = document.querySelector('#duplicateField');
const Buttom = document.querySelector('#clearText');

 document.querySelector('button').onclick = newclick

function newclick() {
    let a = document.querySelector('.text1').value;
    console.log(a);
    document.querySelector('#duplicateField').innerHTML = a ;
    console.log (a.value);
}
userText.addEventListener('keyup', function() {
    textShow.textContent=userText.value;
});
Buttom.addEventListener('click', function() {
    console.log (userText.value="");
    textShow.textContent="";    
});
 
