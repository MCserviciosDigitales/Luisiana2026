let isPlaying = false;

function toggleAudio() {
  const audio = document.getElementById('bg-audio');
  const musicIcon = document.getElementById('music-icon');
  
  if (!isPlaying) {
    audio.play();
    // Cambia la flechita por las barras de pausa
    musicIcon.classList.remove("fa-play");
    musicIcon.classList.add("fa-pause");
    isPlaying = true;
  } else {
    audio.pause();
    // Vuelve a la flechita de play
    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-play");
    isPlaying = false;
  }
}
/* ==========================================
   MODAL DE INSTAGRAM / PRESENTACIÓN
   ========================================== */
window.abrirMiModal = function() {
  const modal = document.getElementById("miModalWeb");
  if (modal) {
    modal.style.display = "flex";
  }
};

window.cerrarMiModal = function() {
  const modal = document.getElementById("miModalWeb");
  if (modal) {
    modal.style.display = "none";
  }
};

// Cerrar si hacen clic fuera de la cajita blanca
window.addEventListener("click", (e) => {
  const modal = document.getElementById("miModalWeb");
  if (e.target === modal) {
    window.cerrarMiModal();
  }
});

//=======================================================
// Función para copiar el nombre de usuario de Instagram
//=======================================================
function copiarUsuario() {
    const usuario = "mc.serviciosdigitales";
    
    navigator.clipboard.writeText(usuario).then(() => {
        const btnCopiar = document.querySelector('.modal-copy-btn');
        if (btnCopiar) {
            btnCopiar.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
            btnCopiar.style.backgroundColor = '#d4edda';
            btnCopiar.style.color = '#155724';
            
            setTimeout(() => {
                btnCopiar.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
                btnCopiar.style.backgroundColor = '';
                btnCopiar.style.color = '';
            }, 2000);
        }
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}

/* ==========================================
   MODAL DE MI WEB (CON LOGS DE CONTROL)
   ========================================== */
window.abrirWebModal = function() {
  console.log("LOG JS: Intentando abrir el modal web...");
  
  const modal = document.getElementById("modalWebIframe");
  const iframe = document.getElementById("iframeServicios");
  
  if (!modal) {
    console.error("ERROR JS: No se encontró el elemento con ID 'modalWebIframe' en el HTML.");
    return;
  }
  if (!iframe) {
    console.error("ERROR JS: No se encontró el elemento con ID 'iframeServicios' en el HTML.");
    return;
  }

  iframe.src = "https://mcserviciosdigitales.netlify.app/";
  modal.style.display = "flex";
  console.log("LOG JS: Modal web abierto con éxito.");
};

window.cerrarWebModal = function() {
  console.log("LOG JS: Cerrando modal web...");
  const modal = document.getElementById("modalWebIframe");
  const iframe = document.getElementById("iframeServicios");
  
  if (modal && iframe) {
    modal.style.display = "none";
    iframe.src = "";
    console.log("LOG JS: Modal cerrado y fuente del iframe limpiada.");
  }
};

// Cerrar si hacen clic fuera de la tarjeta
window.addEventListener("click", (e) => {
  const modalWeb = document.getElementById("modalWebIframe");
  if (e.target === modalWeb) {
    console.log("LOG JS: Clic detectado fuera del modal. Cerrando...");
    window.cerrarWebModal();
  }
});