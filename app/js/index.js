var pass = document.getElementById('password');
var message = document.getElementById('message');
var str = document.getElementById('strength');
var btn = document.querySelector('.fa-arrow-right');

pass.addEventListener('input', function () {
  if (pass.value.length > 0) {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
  if (pass.value.length < 4) {
    str.innerHTML = 'weak';
    pass.style.borderColor = '#ff5925';
    message.style.color = '#ff5925';
    btn.style.color = '#ff5925';
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = 'medium';
    pass.style.borderColor = 'orange';
    message.style.color = 'orange';
    btn.style.color = 'orange';
  } else if (pass.value.length >= 8) {
    str.innerHTML = 'strong';
    pass.style.borderColor = '#26d730';
    message.style.color = '#26d730';
    btn.style.color = '#26d730';
  }
});
