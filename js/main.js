'use strict';

{
  const fizznumber = document.getElementById('fizz');
  const buzznumber = document.getElementById('buzz');
  const btn = document.getElementById('actionBtn');
  const numbers = [];
  const ul = document.getElementById('numbers');
  
  function clearNumber() {
    while (ul.firstChild) {
      let remove = ul.removeChild(ul.firstChild);
    }
    numbers.length = 0;
  }
  
  btn.addEventListener('click', () => {
    let fizzNum = Number(fizznumber.value);
    let buzzNum = Number(buzznumber.value);
    
    if (!Number.isInteger(fizzNum) || !Number.isInteger(buzzNum)) {
      alert('整数値を入力してください');
      fizznumber.value = '';
      buzznumber.value = '';
      return;
    }
    else if (!fizznumber.value || !buzznumber.value) {
      alert('整数値を入力してください');
      return;
    }
    
    clearNumber();
    
    for (let i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        numbers.push(`FizzBuzz ${i}`);
      }
      else if (i % fizzNum === 0) {
        numbers.push(`Fizz ${i}`);
      }
      else if (i % buzzNum === 0) {
        numbers.push(`Buzz ${i}`);
      }
    }
    
    numbers.forEach(number => {
      const li = document.createElement('li');
      li.textContent = number;
      ul.appendChild(li);
    });
  });
}