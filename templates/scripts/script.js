const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove active de todas as tabs
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // ativa a tab e conteúdo clicado
    tab.classList.add("active");
    const tabId = tab.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});


// Verifica se o usuário já fez uma escolha
window.onload = function () {
  const escolhaCookies = localStorage.getItem('cookieConsent');
  if (escolhaCookies) {
    document.getElementById('cookieBox').style.display = 'none';
  }
};

function aceitarCookies() {
  localStorage.setItem('cookieConsent', 'aceito');
  document.getElementById('cookieBox').style.display = 'none';
}

function rejeitarCookies() {
  localStorage.setItem('cookieConsent', 'rejeitado');
  document.getElementById('cookieBox').style.display = 'none';
}

/*
const checkbox = document.getElementById('aceitoTermos');
const popup = document.getElementById('popup-alerta');

// Função para bloquear o redirecionamento se os termos não forem aceitos
function handleLinkClick(event, linkId) {
  if (!checkbox.checked) {
    event.preventDefault(); // Bloqueia o redirecionamento
    popup.style.display = 'block'; // Exibe o pop-up
    setTimeout(() => {
      popup.style.display = 'none'; // Oculta o pop-up após 3 segundos
    }, 3000);
  }
}

// Ação para verificar os links ao clicar
document.getElementById('linkPagamento').addEventListener('click', function (e) {
  handleLinkClick(e, 'linkPagamento');
});

document.getElementById('linkNota').addEventListener('click', function (e) {
  handleLinkClick(e, 'linkNota');
});

// Quando o checkbox for marcado ou desmarcado
checkbox.addEventListener('change', function () {
  // Se o checkbox for marcado, liberar os links para navegação
  if (checkbox.checked) {
    // Remover os bloqueios de evento nos links
    document.getElementById('linkPagamento').removeEventListener('click', handleLinkClick);
    document.getElementById('linkNota').removeEventListener('click', handleLinkClick);
  } else {
    // Reaplicar os bloqueios de evento nos links
    document.getElementById('linkPagamento').addEventListener('click', function (e) {
      handleLinkClick(e, 'linkPagamento');
    });

    document.getElementById('linkNota').addEventListener('click', function (e) {
      handleLinkClick(e, 'linkNota');
    });
  }
});
*/

