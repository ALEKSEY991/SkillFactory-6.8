const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('служит для вывода информации в консоль');
})
const alert1 = document.querySelector('#alert');
alert1.addEventListener('click', () => {
    alert('служит для вывода информации во всплывающем окне');
})
const prompt1 = document.querySelector('#prompt');
prompt1.addEventListener('click', () => {
    prompt('служит для создания поля ввода ');
})