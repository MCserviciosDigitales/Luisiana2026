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
   MODAL DE INSTAGRAM (APERTURA Y COPIADO)
   ========================================== */
window.abrirMiModal = function() {
  const modal = document.getElementById("miModalWeb");
  if (modal) {
    modal.style.setProperty('display', 'flex', 'important');
  }
};

window.cerrarMiModal = function() {
  const modal = document.getElementById("miModalWeb");
  if (modal) {
    modal.style.display = "none";
  }
};

window.copiarUsuarioInsta = function() {
  const spanUser = document.getElementById("insta-username");
  if (!spanUser) return;
  
  const textoACopiar = spanUser.textContent.trim();
  
  navigator.clipboard.writeText(textoACopiar).then(() => {
    const aviso = document.getElementById("avisoCopiado");
    if (aviso) {
      aviso.style.opacity = "1";
      setTimeout(() => {
        aviso.style.opacity = "0";
      }, 2500);
    }
  }).catch(err => {
    console.error("Error al copiar el usuario: ", err);
  });
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

/* ==========================================
   MODAL DE MAPA (GOOGLE MAPS)
   ========================================== */
window.abrirMapaModal = function(urlMapa, tituloLugar) {
  console.log("LOG JS: Abriendo mapa de " + tituloLugar + "...");
  const modal = document.getElementById("modalMapaIframe");
  const iframe = document.getElementById("iframeMapa");
  const tituloSpan = document.getElementById("tituloModalMapa");
  
  if (!modal || !iframe) {
    console.error("ERROR JS: No se encontró el modal o el iframe del mapa.");
    return;
  }

  // Cambia el título dinámicamente arriba en el header del modal
  if (tituloSpan) {
    tituloSpan.textContent = tituloLugar + " - Ubicación";
  }

  // Carga la URL correspondiente
  iframe.src = urlMapa;
  
  modal.style.setProperty('display', 'flex', 'important');
  console.log("LOG JS: Mapa abierto con éxito.");
};

window.cerrarMapaModal = function() {
  console.log("LOG JS: Cerrando mapa...");
  const modal = document.getElementById("modalMapaIframe");
  const iframe = document.getElementById("iframeMapa");
  
  if (modal && iframe) {
    modal.style.display = "none";
    iframe.src = "";
    console.log("LOG JS: Mapa cerrado.");
  }
};

// Cerrar si hacen clic fuera de la tarjeta del mapa
window.addEventListener("click", (e) => {
  const modalMapa = document.getElementById("modalMapaIframe");
  if (e.target === modalMapa) {
    window.cerrarMapaModal();
  }
});

/* ==========================================
   FUNCIÓN PARA ENVIAR formulario POR WHATSAPP
   ========================================== */
function enviarRSVPWhatsApp(event) {
    event.preventDefault(); // Evita que la página se recargue sola

    // 1. Capturamos los valores que escribió el invitado en cada campo
    const nombre = document.getElementById('rsvp-nombre').value;
    const personas = document.getElementById('rsvp-personas').value;
    const asistencia = document.getElementById('rsvp-asistencia').value;
    const mensaje = document.getElementById('rsvp-mensaje').value;

    // 2. TU NÚMERO DE WHATSAPP (Reemplazá esto con tu característica y número real, ej: 549351...)
    const telefono = "5493513765962"; 

    // 3. Armamos el texto ordenado que te va a llegar al chat
    let texto = `¡Hola Clara! Me llamo *${nombre}* y te escribo a través de la web de Luisiana.%0A%0A`;
    texto += `Respuesta: *${asistencia}*.%0A`;
    texto += `Cantidad de asistentes: *${personas}* persona(s).`;
    
    // Si escribieron un mensaje opcional, lo agregamos; si no, lo omitimos
    if (mensaje.trim() !== "") {
        texto += `%0AMensaje: "${mensaje}"`;
    }

    // 4. Creamos el link oficial de WhatsApp y lo abrimos en una pestaña nueva
    const urlWsp = `https://wa.me/${telefono}?text=${texto}`;
    window.open(urlWsp, '_blank');
}

/* ==========================================
   CONTADOR REGRESIVO
   ========================================== */
function actualizarContador() {
  // Fecha objetivo del evento: 11 de Octubre de 2026 a las 12:30 hs
  const fechaEvento = new Date("2026-10-11T12:30:00").getTime();
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia < 0) {
    document.querySelector(".countdown-section").innerHTML = "<h3 class='section-title'>¡L llegó el gran día! 🎉</h3>";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

  const elDias = document.getElementById("days");
  const elHoras = document.getElementById("hours");
  const elMinutos = document.getElementById("minutes");

  if (elDias && elHoras && elMinutos) {
    elDias.textContent = String(dias).padStart(2, '0');
    elHoras.textContent = String(horas).padStart(2, '0');
    elMinutos.textContent = String(minutos).padStart(2, '0');
  }
}

// Ejecutar al cargar y actualizar cada minuto
setInterval(actualizarContador, 60000);
actualizarContador();

//======================
window.copiarAlias = function() {
  const aliasSpan = document.getElementById("alias-texto").textContent;
  navigator.clipboard.writeText(aliasSpan).then(() => {
    alert("¡Alias copiado al portapapeles! ✨");
  });
};