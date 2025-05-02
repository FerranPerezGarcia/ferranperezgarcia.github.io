document.addEventListener('DOMContentLoaded', function() {
    const miCard = document.getElementById("eoe_modal");
    const modalOverlay = document.getElementById("miModalOverlay");
    const modalContent = document.getElementById("miModalContent");
    const cerrarModal = document.getElementById("cerrarModal");
  
    if (miCard) {
      miCard.addEventListener("click", function() {
        modalOverlay.style.display = "block"; // Muestra el fondo oscuro
        modalContent.style.display = "block"; // Muestra el contenido del modal
      });
    } else {
      console.error("No se encontró el elemento con el ID 'miCard'.");
    }
  
    if (cerrarModal) {
      cerrarModal.addEventListener("click", function() {
        modalOverlay.style.display = "none"; // Oculta el fondo oscuro
        modalContent.style.display = "none"; // Oculta el contenido del modal
      });
    } else {
      console.error("No se encontró el elemento con el ID 'cerrarModal'.");
    }
  
    // Ocultar el modal si se hace clic fuera del contenido del modal
    modalOverlay.addEventListener("click", function(event) {
      if (event.target === modalOverlay) {
        modalOverlay.style.display = "none";
        modalContent.style.display = "none";
      }
    });
  });