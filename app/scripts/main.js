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
      let objPos = $(this).offset().top
      let objHeight = $(this).height()
      if (isInViewport(this)) {
        let ratio = Math.round(((scroll - objPos) / objHeight) * 100)
        $(this).css('background-position', 'center ' + parseInt(-(ratio * 2)) + 'px')
      }
    });
    // The Fly-Ins
    $('.flyin').each(function () {
      let windowHeight = $(window).height()
      let objHeight = $(this).height()
      let objBottom = $(this).offset().top + $(this).outerHeight()
      let windowBottom = scroll + windowHeight
      let diff = objBottom - (objHeight / 1.6)
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
  $('[data-modal="confirmation-modal"]').submit(function (ev) {
    $('#confirmation-modal').css({display: 'flex'})
  })
  $('.close, .modal-container').click(function (ev) {
    if (ev.target.className === 'close' || ev.target.className === 'modal-container') {
      ev.preventDefault()
      $('#gifts-modal, #confirmation-modal').css({display: 'none'})
    }
  })

  // The Masks
  var phoneMask = function (num) {
    return num.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  }
  var options = {
    onKeyPress: function (val, e, field, options) {
      field.mask(phoneMask.apply({}, arguments), options);
    }
  }
  $('#form-phone').mask(phoneMask, options);
})