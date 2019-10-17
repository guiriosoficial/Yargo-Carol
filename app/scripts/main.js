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

  // The Modal Window
  $('[data-modal="gifts-modal"]').click(function (ev) {
    ev.preventDefault()
    $('#gifts-modal').css({display: 'flex'})
  })
  // $('[data-modal="confirmation-modal"]').submit(function (ev) {
  //   $('#confirmation-modal').css({display: 'flex'})
  // })
  $('.close, .modal-container').click(function (ev) {
    if (ev.target.className === 'close' || ev.target.className === 'modal-container') {
      ev.preventDefault()
      $('#gifts-modal, #confirmation-modal').css({display: 'none'})
    }
  })

  // The Masks
  $('#form-name').css('text-transform', 'capitalize')

  var phoneMask = function (num) {
    return num.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  }
  var options = {
    onKeyPress: function (val, e, field, options) {
      field.mask(phoneMask.apply({}, arguments), options);
    }
  }
  $('#form-phone').mask(phoneMask, options);


  // The Validators
  var name_format = /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/
  var email_format = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm
  var phone_format = /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?([9,8]|[9,8][ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm

  function name_valid (name) {
      return name_format.test(name.val())
  }
  function email_valid (email) {
      return email_format.test(email.val())
  }
  function phone_valid (phone) {
      return phone_format.test(phone.val())
  }

  var name_input = $('#form-name')
  var email_input = $('#form-email')
  var phone_input = $('#form-phone')

  $('#form-name').keyup(function (ev) {  
    !name_valid(name_input) ? name_input.addClass('isInvalid') : name_input.removeClass('isInvalid, nameInvalid')
  })
  $('#form-email').keyup(function (ev) {
    !email_valid(email_input) ? email_input.addClass('isInvalid') : email_input.removeClass('isInvalid, emailInvalid')
  })
  $('#form-phone').keyup(function (ev) {
    !phone_valid(phone_input) ? phone_input.addClass('isInvalid') : phone_input.removeClass('isInvalid, phoneInvalid')
  })
  
  $('#confirmation-form').submit(function (ev) {
    if (name_valid && email_valid && phone_valid) {
      
    } else {
      ev.preventDefault()
      !name_valid(name_input) ? name_input.addClass('isInvalid, nameInvalid') : name_input.removeClass('isInvalid, nameInvalid')
      !email_valid(email_input) ? email_input.addClass('isInvalid, emailInvalid') : email_input.removeClass('isInvalid, emailInvalid')
      !phone_valid(phone_input) ? phone_input.addClass('isInvalid, phoneInvalid') : phone_input.removeClass('isInvalid, phoneInvalid')
    }
  })


})