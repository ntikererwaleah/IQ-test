console.log('abc')
document.getElementById('seconds-value').innerHTML=localStorage.getItem('sec');
document.getElementById('minutess-value').innerHTML=localStorage.getItem('min');
document.getElementById('score').innerHTML=localStorage.getItem('score');

document.getElementById('iq').innerHTML=11+localStorage.getItem('score');