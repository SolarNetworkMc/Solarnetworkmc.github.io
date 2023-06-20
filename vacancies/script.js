whypick = document.getElementById('whypick');
  whythis = document.getElementById('whythis');
  scenario1 = document.getElementById('scenario1');
  scenario2 = document.getElementById('scenario2');
  scenario3 = document.getElementById('scenario3');
whypick.addEventListener('input', function(event) {
   reachlimit(whypick, 350, 'picking');
});
whythis.addEventListener('input', function(event) {
   reachlimit(whythis, 200, 'ythis');
});
scenario1.addEventListener('input', function(event) {
   reachlimit(scenario1, 300, 'sone');
});
scenario2.addEventListener('input', function(event) {
   reachlimit(scenario2, 500, 'stwo');
});
scenario3.addEventListener('input', function(event) {
   reachlimit(scenario3, 400, 'sthree');
});
function reachlimit(input, limit, idlimit) {
document.getElementById(idlimit).textContent = limit - input.value.length;
   if (input.value.length > limit) {
    input.value = input.value.slice(0, limit);
     input.setCustomValidity('invalid');
   } else {
     input.setCustomValidity('');
   }
  }