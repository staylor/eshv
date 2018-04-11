const splash = document.querySelector('.splash-modal');

const stopScroll = e => {
  e.preventDefault();
};

if (splash) {
  if (splash.classList.contains('auto-modal')) {
    document.body.style.overflow = 'hidden';
  }

  const triggerModal = document.getElementById('join-us');

  const dismissCallback = () => {
    splash.style.display = 'none';
    document.body.style.overflow = '';
    document.body.removeEventListener('touchmove', stopScroll, false);
  };

  const modalClose = document.querySelector('.modal-close');
  modalClose.onclick = dismissCallback;

  document.cookie = 'splash=1; path=/;';

  if (triggerModal) {
    let form;
    const bindForm = () => {
      if (form) {
        return form;
      }
      form = document.querySelector('#modal-form-id #new_answer');
      form.onsubmit = dismissCallback;
      return form;
    };

    const clickHandler = e => {
      e.preventDefault();

      bindForm();
      splash.style.display = 'block';
      splash.classList.add('simple-modal');
      document.body.style.overflow = 'hidden';
      document.body.addEventListener('touchmove', stopScroll, false);
    };

    triggerModal.onclick = clickHandler;

    const inlineTriggerModal = document.querySelectorAll('.trigger-modal');
    inlineTriggerModal.forEach(item => {
      item.addEventListener('click', clickHandler);
    });
  }
}
