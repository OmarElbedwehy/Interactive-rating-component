document.getElementById('btn').onclick = function() {
  document.getElementById('card').style.display = 'none';
  document.getElementById('card-2').style.display = 'block'
}

document.getElementById('one').onclick = function() {
  document.getElementById('selected').innerHTML = 'You Selected 1 out of 5';
  document.getElementById('one').style.background = 'hsl(25, 97%, 53%)';
  document.getElementById('one').style.color = '#fff';
}

document.getElementById('two').onclick = function() {
  document.getElementById('selected').innerHTML = 'You Selected 2 out of 5'
  document.getElementById('two').style.background = 'hsl(216, 12%, 54%)';
  document.getElementById('two').style.color = '#fff';
}

document.getElementById('three').onclick = function() {
  document.getElementById('selected').innerHTML = 'You Selected 3 out of 5'
  document.getElementById('three').style.background = 'hsl(25, 97%, 53%)';
  document.getElementById('three').style.color = '#fff';
}

document.getElementById('four').onclick = function() {
  document.getElementById('selected').innerHTML = 'You Selected 4 out of 5'
  document.getElementById('four').style.background = 'hsl(216, 12%, 54%)';
  document.getElementById('four').style.color = '#fff';
}

document.getElementById('five').onclick = function() {
  document.getElementById('selected').innerHTML = 'You Selected 5 out of 5'
  document.getElementById('five').style.background = 'hsl(25, 97%, 53%)';
  document.getElementById('five').style.color = '#fff';
}
