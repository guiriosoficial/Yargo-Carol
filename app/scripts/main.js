$(document).ready(function () {
  // Verification if the object is in viewport
  function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  $(window).scroll(function () {
    var scroll = $(this).scrollTop()
    // The Parallax
    $('.parallax').each(function () {
      var objPos = $(this).offset().top
      var objHeight = $(this).height()
      if (isInViewport(this)) {
        var ratio = Math.round(((scroll - objPos) / objHeight) * 100);
        $(this).css('background-position', 'center ' + parseInt(-(ratio * 2)) + 'px')
      }
    })
    // The Fly-Ins
    $('.flyin').each(function () {
      var windowHeight = $(window).height()
      var objHeight = $(this).height()
      var objBottom = $(this).offset().top + $(this).outerHeight()
      var windowBottom = scroll + windowHeight
      var diff = objBottom - (objHeight / 1.6)
      if (windowBottom > diff) {
        $(this).animate({ opacity: '1' }, 2500)
      }
    })
  })

  // The Masks
  $('#form-name').css('text-transform', 'capitalize')

  var phoneMask = function (num) {
    return num.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  }
  var options = {
    onKeyPress: function (val, evt, field, options) {
      field.mask(phoneMask.apply({}, arguments), options);
    }
  }
  $('#form-phone').mask(phoneMask, options);

  // The Validators
  var name_format = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/
  var email_format = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  var phone_format = /^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?([9,8,7]|[9,8,7][ .-])?[2-9]\d{3}[ .-]?\d{4}$/

  var name_input = $('#form-name')
  var email_input = $('#form-email')
  var phone_input = $('#form-phone')
  
  function name_valid (name) { return name !== '' ? name_format.test(name.val()) : false }
  function email_valid (email) { return email !== '' ? email_format.test(email.val()) : false }
  function phone_valid (phone) { return phone !== '' ? phone_format.test(phone.val()) : false }

  $('#form-name').keyup(function (evt) { !name_valid(name_input) ? name_input.addClass('isInvalid') : name_input.removeClass('isInvalid') && $('#invalid-name-field').css({ display: 'none' }) })
  $('#form-email').keyup(function (evt) { !email_valid(email_input) ? email_input.addClass('isInvalid') : email_input.removeClass('isInvalid') && $('#invalid-email-field').css({ display: 'none' }) })
  $('#form-phone').keyup(function (evt) { !phone_valid(phone_input) ? phone_input.addClass('isInvalid') : phone_input.removeClass('isInvalid') && $('#invalid-phone-field').css({ display: 'none' }) })
  
  $('#confirmation-form').submit(function (evt) {
    if (name_valid(name_input) && email_valid(email_input) && phone_valid(phone_input)) {
      $('#confirmation-modal').css({ display: 'flex' })
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

  // The Modal Window
  $('[data-modal="gifts-modal"]').click(function (evt) {
    evt.preventDefault()
    $('#gifts-modal').css({ display: 'flex' })
  })
  /*
  $('[data-modal="confirmation-modal"]').submit(function (ev) {
    $('#confirmation-modal').css({display: 'flex'})
  })
  */
  $('.close, .modal-container').click(function (evt) {
    if (evt.target.className === 'close' || evt.target.className === 'modal-container') {
      evt.preventDefault()
      $('#gifts-modal, #confirmation-modal').css({ display: 'none' })
    }
  })

})