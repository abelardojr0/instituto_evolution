document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu_hamburguer');
  const nav = document.querySelector('.cabecalho_nav');

  menuBtn.addEventListener('click', function () {
    nav.classList.toggle('ativo');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.cabecalho_menu_item');

  menuItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      menuItems.forEach((el) => {
        if (el !== item) {
          el.style.opacity = '0.5';
        }
      });
    });

    item.addEventListener('mouseleave', () => {
      menuItems.forEach((el) => {
        el.style.opacity = '1';
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  function checkScroll() {
    const triggerBottom = window.innerHeight * 0.6; // Reduzindo a altura do gatilho

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < triggerBottom) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
        section.classList.add('hide');
      }
    });
  }

  function handleHeaderVisibility() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
  }

  window.addEventListener('scroll', () => {
    checkScroll();
    handleHeaderVisibility();
  });

  checkScroll();
});

const swiper = new Swiper('.swiper-container', {
  loop: true, // Faz o carousel reiniciar automaticamente sem espaço em branco
  spaceBetween: 10, // Espaçamento entre as imagens
  slidesPerView: 'auto', // Mantém o tamanho correto das imagens
  centeredSlides: false, // Remove centralização forçada que causa espaçamento extra
  loopFillGroupWithBlank: false, // Impede que o Swiper adicione espaços vazios
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000, // Muda a cada 3s
    disableOnInteraction: false, // Continua rodando mesmo após interação do usuário
  },
});

document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.sobre .swiper-container', {
    // Removemos a variável
    slidesPerView: 1, // Apenas uma imagem por vez
    autoplay: {
      delay: 2000, // Muda automaticamente a cada 3 segundos
      disableOnInteraction: false, // Continua rodando mesmo se o usuário interagir
    },
    loop: true, // Faz o carrossel voltar ao início automaticamente
    pagination: {
      el: '.sobre .swiper-pagination',
      clickable: true, // Permite clicar na paginação para navegar
    },
  });
});
