class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    burgerButton: '[data-js-header-burger-button]',
  };

  stateClasses = {
    isActive: "is-active",
    isLock: "is-lock",
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    
    // Проверяем существование элементов
    if (!this.rootElement) {
      console.error('Root element not found');
      return;
    }
    
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    
    // Проверяем существование элементов перед вызовом bindEvents
    if (this.burgerButtonElement && this.overlayElement) {
      this.bindEvents();
    } else {
      console.error('Burger button or overlay element not found');
    }
 }

 onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
 }

 bindEvents() {
    // Привязываем контекст для обработчика
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick);
    
    // Закрытие меню при клике на ссылку (для мобильной версии)
    const menuLinks = this.overlayElement.querySelectorAll('.header__menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 390) {
          this.burgerButtonElement.classList.remove(this.stateClasses.isActive);
          this.overlayElement.classList.remove(this.stateClasses.isActive);
          document.documentElement.classList.remove(this.stateClasses.isLock);
        }
      });
    });
 }
}

export default Header;