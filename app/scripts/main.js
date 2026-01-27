document.addEventListener('DOMContentLoaded', () => {
  const config = window.SiteConfig || {}

  /* =========================
     Utils
  ========================= */
  const qs = (s, c = document) => c.querySelector(s)
  const qsa = (s, c = document) => [...c.querySelectorAll(s)]

  function isInViewport(el) {
    const rect = el.getBoundingClientRect()
    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= window.innerHeight &&
        rect.left <= window.innerWidth
    )
  }

  /* =========================
     Scroll Effects
  ========================= */
  let ticking = false

  function onScroll() {
    const scrollTop = window.scrollY

    /* Parallax */
    if (config.effects?.parallax?.enabled) {
      qsa('.parallax').forEach(el => {
        el.style.backgroundAttachment = 'fixed'

        if (isInViewport(el)) {
          const speed = config.effects.parallax.speed
          const offsetTop = el.offsetTop
          const height = el.offsetHeight
          const ratio = ((scrollTop - offsetTop) / height) * speed
          el.style.backgroundPosition = `center ${-(ratio * 2)}px`
        }
      })
    }

    /* Fly-in */
    if (config.effects?.flyIn?.enabled) {
      const windowBottom = scrollTop + window.innerHeight
      const timing = config.effects.flyIn.timing
      const speed = config.effects.flyIn.speed

      qsa('.flyin').forEach(el => {
        el.style.opacity = '0'

        const elBottom = el.offsetTop + el.offsetHeight
        const diff = elBottom - (el.offsetHeight / timing)

        if (windowBottom > diff) {
          el.style.transition = `opacity ${speed}ms ease`
          el.style.opacity = '1'
        }
      })
    }

    ticking = false
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll)
      ticking = true
    }
  })

  /* =========================
     Form Elements
  ========================= */
  const nameInput  = qs('#form-name')
  const emailInput = qs('#form-email')
  const phoneInput = qs('#form-phone')
  const form       = qs('#confirmation-form')

  /* =========================
     Masks
  ========================= */
  if (config.form?.masks?.name?.enabled && config.form.masks.name.capitalize && nameInput) {
    nameInput.style.textTransform = 'capitalize'
  }

  if (config.form?.masks?.phone?.enabled && phoneInput) {
    phoneInput.addEventListener('input', e => {
      let v = e.target.value.replace(/\D/g, '')
      if (v.length > 11) v = v.slice(0, 11)

      if (v.length === 11) {
        v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
      } else if (v.length >= 7) {
        v = v.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3')
      } else if (v.length >= 3) {
        v = v.replace(/(\d{2})(\d+)/, '($1) $2')
      }

      e.target.value = v
    })
  }

  /* =========================
     Validators
  ========================= */
  if (config.form?.validation?.enabled) {
    const nameRegex  = config.form.validators.name
    const emailRegex = config.form.validators.email
    const phoneRegex = config.form.validators.phone

    const nameValid = () =>
        nameInput.value &&
        nameRegex.test(nameInput.value.normalize('NFD')) &&
        nameInput.value.trim().split(' ').length > 1

    const emailValid = () =>
        emailInput.value && emailRegex.test(emailInput.value)

    const phoneValid = () =>
        phoneInput.value && phoneRegex.test(phoneInput.value)

    const liveValidation = (input, validator, errorId) => {
      input.addEventListener('keyup', () => {
        if (!validator()) {
          input.classList.add('isInvalid')
        } else {
          input.classList.remove('isInvalid')
          qs(errorId).style.display = 'none'
        }
      })
    }

    liveValidation(nameInput, nameValid, '#invalid-name-field')
    liveValidation(emailInput, emailValid, '#invalid-email-field')
    liveValidation(phoneInput, phoneValid, '#invalid-phone-field')

    form.addEventListener('submit', evt => {
      if (nameValid() && emailValid() && phoneValid()) {
        qs('.isInvalidAlert').style.display = 'none'
        qsa('.isInvalid').forEach(el => el.classList.remove('isInvalid'))

        if (config.modals?.confirmation?.enabled) {
          qs('#confirmation-modal').style.display = 'flex'
        }
      } else {
        evt.preventDefault()
        qs('.isInvalidAlert').style.display = 'flex'

        nameInput.value ? null : qs('#invalid-empty-field').style.display = 'block'

        if (!nameValid()) {
          nameInput.classList.add('isInvalid')
          qs('#invalid-name-field').style.display = 'block'
        }
        if (!emailValid()) {
          emailInput.classList.add('isInvalid')
          qs('#invalid-email-field').style.display = 'block'
        }
        if (!phoneValid()) {
          phoneInput.classList.add('isInvalid')
          qs('#invalid-phone-field').style.display = 'block'
        }
      }
    })
  }

  /* =========================
     Modals
  ========================= */
  if (config.modals?.gifts?.enabled) {
    qsa('[data-modal="gifts-modal"]').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault()
        qs('#gifts-modal').style.display = 'flex'
      })
    })
  }

  if (config.modals?.closeEnabled) {
    qsa('.close, .modal-container').forEach(el => {
      el.addEventListener('click', e => {
        if (e.target.classList.contains('close') || e.target.classList.contains('modal-container')) {
          e.preventDefault()
          qs('#gifts-modal')?.style.setProperty('display', 'none')
          qs('#confirmation-modal')?.style.setProperty('display', 'none')
        }
      })
    })
  }

  /* =========================
     Smooth Scroll
  ========================= */
  if (config.scroll?.smoothEnabled) {
    qsa('.scroll').forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault()
        const target = qs(el.getAttribute('href'))
        if (!target) return

        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
        })
      })
    })
  }
})
