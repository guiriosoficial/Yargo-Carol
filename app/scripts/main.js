$(document).ready(function () {
  // Carrega as configurações (fallback para valores padrão se config.js não estiver carregado)
  const config = window.SiteConfig

  // Verification if the object is in viewport
  function isInViewport(node) {
    const rect = node.getBoundingClientRect();
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  $(window).scroll(function () {
    const scroll = $(this).scrollTop()
    // The Parallax
    if (config.effects.parallax.enabled) {
      const parallax = $('.parallax')
      // parallax.css('background-position', 'top left')
      parallax.css('background-attachment', 'fixed')

      parallax.each(function () {
        const objPos = $(this).offset().top
        const objHeight = $(this).height()
        if (isInViewport(this)) {
          const parallaxSpeed = config.effects.parallax.speed
          const ratio = Math.round(((scroll - objPos) / objHeight) * parallaxSpeed)
          $(this).css('background-position', 'center ' + parseInt(-(ratio * 2)) + 'px')
        }
      })
    }
    // The Fly-Ins
    if (config.effects.flyIn.enabled) {
      const flyin = $('.flyin')
      flyin.css('opacity', '0')

      flyin.each(function () {
        const flyinTiming = config.effects.flyIn.timing;
        const windowHeight = $(window).height()
        const objHeight = $(this).height()
        const objBottom = $(this).offset().top + $(this).outerHeight()
        const windowBottom = scroll + windowHeight
        const diff = objBottom - (objHeight / flyinTiming)
        if (windowBottom > diff) {
          const flyinSpeed = config.effects.flyIn.speed
          $(this).animate({ opacity: '1' }, flyinSpeed)
        }
      })
    }
  })

  const name_input = $('#form-name')
  const email_input = $('#form-email')
  const phone_input = $('#form-phone')

  // The Masks
  if (config.form.masks.name.enabled && name_input.length) {
    if (config.form.masks.name.capitalize) {
      name_input.css('text-transform', 'capitalize');
    }
  }

  if (config.form.masks.phone.enabled && phone_input.length) {
    const masks = config.form.masks.phone.patterns
    const phoneMask = function (num) {
      return num.replace(/\D/g, '').length === 11 ? masks[0] : masks[1]
    }
    const options = {
      onKeyPress: function (val, evt, field, options) {
        field.mask(phoneMask.apply({}, arguments), options)
      }
    }
    phone_input.mask(phoneMask, options);
  }

  // The Validators (apenas se a validação estiver habilitada)
  if (config.form.validation.enabled) {
    const name_format = config.form.validators.name;
    const email_format = config.form.validators.email;
    const phone_format = config.form.validators.phone;

    function name_valid(name) {
      return name.val() !== '' ? name_format.test(name.val().normalize('NFD')) && name.val().split(' ').length > 1 : false;
    }
    function email_valid(email) {
      return email.val() !== '' ? email_format.test(email.val()) : false;
    }
    function phone_valid(phone) {
      return phone.val() !== '' ? phone_format.test(phone.val()) : false;
    }

    // Event listeners para validação em tempo real
    name_input.keyup(function (_evt) {
      !name_valid(name_input) ? name_input.addClass('isInvalid') : name_input.removeClass('isInvalid') && $('#invalid-name-field').css({ display: 'none' });
    });
    email_input.keyup(function (_evt) {
      !email_valid(email_input) ? email_input.addClass('isInvalid') : email_input.removeClass('isInvalid') && $('#invalid-email-field').css({ display: 'none' });
    });
    phone_input.keyup(function (_evt) {
      !phone_valid(phone_input) ? phone_input.addClass('isInvalid') : phone_input.removeClass('isInvalid') && $('#invalid-phone-field').css({ display: 'none' });
    });

    // Validação no envio do formulário
    $('#confirmation-form').submit(function (evt) {
      if (name_valid(name_input) && email_valid(email_input) && phone_valid(phone_input)) {
        if (config.modals.confirmation.enabled) {
          $('#confirmation-modal').css({ display: 'flex' })
        }
        $('.isInvalidAlert').css({ display: 'none' })
        name_input.removeClass('isInvalid')
        email_input.removeClass('isInvalid')
        phone_input.removeClass('isInvalid')
      } else {
        evt.preventDefault()
        $('.isInvalidAlert').css({ display: 'flex' })
        name_input.val() === '' || email_input.val() === '' || phone_input.val() === '' ? $('#invalid-empty-field').css({ display: 'block' }) : $('#invalid-empty-field').css({ display: 'none' })
        !name_valid(name_input) ? name_input.addClass('isInvalid') && $('#invalid-name-field').css({ display: 'block' }) : name_input.removeClass('isInvalid')
        !email_valid(email_input) ? email_input.addClass('isInvalid') && $('#invalid-email-field').css({ display: 'block' }) : email_input.removeClass('isInvalid')
        !phone_valid(phone_input) ? phone_input.addClass('isInvalid') && $('#invalid-phone-field').css({ display: 'block' }) : phone_input.removeClass('isInvalid')
        return false
      }
    })
  }

  // The Modal Windows
  if (config.modals.gifts.enabled) {
    $('[data-modal="gifts-modal"]').click(function (evt) {
      evt.preventDefault()
      $('#gifts-modal').css({ display: 'flex' })
    })
  }

  if (config.modals.closeEnabled) {
    $('.close, .modal-container').click(function (evt) {
      if (evt.target.className === 'close' || evt.target.className === 'modal-container') {
        evt.preventDefault();
        $('#gifts-modal, #confirmation-modal').css({ display: 'none' })
      }
    })
  }

  // The Smooth Scroll
  if (config.scroll.smoothEnabled) {
    $('.scroll').click(function(evt) {
      const scrollSpeed = config.scroll.speed
      evt.preventDefault()
      $('html, body').animate({ scrollTop: $(this.hash).offset().top }, scrollSpeed)
    })
  }
});
