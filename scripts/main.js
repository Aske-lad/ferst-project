import Header from './header.js';

document.addEventListener('DOMContentLoaded', () => {
  new Header();
});

document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.querySelector('.header__country-select');
    const selectedCountry = document.querySelector('.header__selected-country');
    const dropdown = document.querySelector('.header__country-dropdown');
    
    // Обработчик открытия/закрытия dropdown
    selectedCountry.addEventListener('click', function(e) {
      e.stopPropagation();
      countrySelect.classList.toggle('open');
    });
    
    // Обработчик выбора страны
    const countryOptions = document.querySelectorAll('.header__country-option');
    countryOptions.forEach(option => {
      option.addEventListener('click', function() {
        const flagSrc = this.querySelector('.header__flag-img').src;
        const countryCode = this.querySelector('.header__country-code').textContent;
        
        // Обновляем выбранное значение
        document.querySelector('.header__selected-country .header__flag-img').src = flagSrc;
        document.querySelector('.header__selected-country .header__country-code').textContent = countryCode;
        
        // Закрываем dropdown
        countrySelect.classList.remove('open');
      });
    });
    
    // Закрытие dropdown при клике вне элемента
    document.addEventListener('click', function(e) {
      if (!countrySelect.contains(e.target)) {
        countrySelect.classList.remove('open');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.main__faq-item-header');
    
    accordionHeaders.forEach(header => {
      header.addEventListener('click', function() {
        // Находим соответствующий контент и иконку
        const content = this.nextElementSibling;
        const icon = this.querySelector('.main__faq-item-header-icon');
        
        // Закрываем все другие аккордеоны
        document.querySelectorAll('.main__faq-content').forEach(item => {
          if (item !== content) {
            item.classList.remove('active');
          }
        });
        document.querySelectorAll('.main__faq-item-header').forEach(item => {
          if (item !== this) {
            item.classList.remove('active');
          }
        });
        document.querySelectorAll('.main__faq-item-header-icon').forEach(item => {
          if (item !== icon) {
            item.classList.remove('active');
          }
        });
        
        // Переключаем текущий аккордеон
        this.classList.toggle('active');
        content.classList.toggle('active');
        icon.classList.toggle('active');
      });
    });
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.main__luck-email');
    const checkButton = document.querySelector('.main__luck-button');
    
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
    
    function handleSubmit() {
      const email = emailInput.value.trim();
      
      if (!email) {
        alert('Пожалуйста, введите ваш email');
        return;
      }
      
      if (!validateEmail(email)) {
        alert('Пожалуйста, введите корректный email адрес');
        return;
      }
      
      // Имитация отправки (можно заменить на реальный запрос к серверу)
      emailInput.value = '';
      alert('Проверьте вашу почту! Специальное предложение от Azimut уже на пути к вам.');
    }
    
    checkButton.addEventListener('click', handleSubmit);
    
    emailInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    });
  });