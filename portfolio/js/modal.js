const modal = document.getElementById('modal');
const btnOpen = document.getElementById('openModal');
const spanClose = document.getElementsByClassName("close")[0];
btnDesc = document.getElementById("btnDesc");

btnOpen.onclick = function(){
    modal.style.display = "block";
};

spanClose.onclick = function() {
    modal.style.display = "none";
};

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      modal.style.display = "none";
    }
  });