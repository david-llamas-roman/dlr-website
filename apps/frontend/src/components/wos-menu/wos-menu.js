/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License only.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2025 David Llamas Román
 */

'use strict'

import BaseComponent from '@/components/base-component.js'
import { t } from '@/utils/i18n.js'

class WosMenu extends BaseComponent {
  constructor() {
    super()
  }

  #getTemplate() {
    const template = document.createElement('template')

    const loginAccountInformationLabels = Object.values(
      t('footer.wos-menu.login.account-information.labels'),
    )

    const registerAccountInformationLabels = Object.values(
      t('footer.wos-menu.register.account-information.labels'),
    )
    const registerLegalLabels = Object.values(
      t('footer.wos-menu.register.legal.labels'),
    )

    template.innerHTML = `
      ${this.#getStyles()}
      <article class="wos__menu">
        <form method="post" class="login">
          <h2>${t('footer.wos-menu.login.title')}</h2>

          <fieldset class="account">
            <legend>${t('footer.wos-menu.login.account-information.legend')}</legend>

            <label for="email">${loginAccountInformationLabels[0]}</label>
            <input type="email" name="email" id="email" required>

            <label for="password">${loginAccountInformationLabels[1]}</label>
            <input type="password" name="password" id="password" required>
          </fieldset>

          <button type="submit" class="submit">${t('footer.wos-menu.login.submit-button')}</button>

          <p class="question">${t('footer.wos-menu.login.question')} <button type="button">${t('footer.wos-menu.login.question-button')}</button></p>
        </form>

        <form method="post" class="register hide">
          <h2>${t('footer.wos-menu.register.title')}</h2>

          <fieldset class="account">
            <legend>${t('footer.wos-menu.register.account-information.legend')}</legend>

            <div>
              <label for="full-name">${registerAccountInformationLabels[0]}</label>
              <input type="text" name="full-name" id="full-name" required>
            </div>

            <div>
              <label for="email">${registerAccountInformationLabels[1]}</label>
              <input type="email" name="email" id="email" required>
            </div>

            <div>
              <label for="password">${registerAccountInformationLabels[2]}</label>
              <input type="password" name="password" id="password" required>
            </div>

            <div>
              <label for="confirm-password">${registerAccountInformationLabels[3]}</label>
              <input type="password" name="confirm-password" id="confirm-password" required>
            </div>
          </fieldset>

          <fieldset class="legal">
            <legend>${t('footer.wos-menu.register.legal.legend')}</legend>

            <label for="terms">
              <input type="checkbox" name="terms" id="terms" required>

              ${registerLegalLabels[0]}
            </label>

            <label for="privacy">
              <input type="checkbox" name="privacy" id="privacy" required>

              ${registerLegalLabels[1]}
            </label>
          </fieldset>

          <button type="submit" class="submit">${t('footer.wos-menu.register.submit-button')}</button>

          <p class="question">${t('footer.wos-menu.register.question')} <button type="button">${t('footer.wos-menu.register.question-button')}</button></p>
        </form>
      </article>
      </article>
    `

    return template
  }

  #getStyles() {
    return `
      <style>
        :host {
          position: fixed;
          bottom: 0;
          left: 50%;

          display: grid;
          place-items: center;

          transform: translateX(-50%) translateY(100%);
          transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

          visibility: hidden;
          opacity: 0;
        }

        :host(.visible) {
          transform: translateX(-50%) translateY(0);

          opacity: 1;
        }

        .wos__menu {
          display: grid;
          place-items: center;

          aspect-ratio: 9/11;
          height: clamp(715px, 75dvh, 1132.5px);

          margin-bottom: max(4rem, 2.9vmax);

          background-color: rgba(41, 41, 41, 0.6);
          backdrop-filter: blur(10px);

          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          -ms-border-radius: 10px;
          -o-border-radius: 10px;

          box-shadow: 0 0 1rem rgba(0, 0, 0, 0.6);

          .login, .register {
            width: var(--max-percentage, 100%);

            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto auto;
            gap: 1rem;

            padding: 1rem;

            & h2 {
              color: var(--pantone-red, #da291c);

              font-style: 'Open Sans';
              font-weight: 700;
              font-size: max(40px, 2.5vmax);

              text-align: center;
              text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
            }

            & fieldset {
              display: flex;
              flex-direction: column;
              gap: 0.25rem;

              padding: 0.5rem;

              border-radius: 6px;
              border: 1px solid var(--light-grey-4, rgba(255, 255, 255, 0.78));

              & legend {
                padding: 0.25rem;

                color: var(--light-grey-4, rgba(255, 255, 255, 0.78));

                font-family: 'Open Sans';
                font-size: max(14px, 0.75vmax);
              }

              & div {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
              }

              & label {
                padding-left: 0.25rem;

                color: var(--white, #fff);

                font-family: 'Open Sans';
                font-size: max(16px, 0.9vmax);
                font-weight: 700;

                text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
              }

              & input {
                padding: 0.25rem 0.5rem;

                color: var(--white, #fff);
                background-color: var(--light-grey-2, rgba(255, 255, 255, 0.28));

                font-family: 'Open Sans';
                font-size: max(16px, 0.9vmax);

                text-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

                outline: none;
                border-radius: 4px;
                border: 1px solid var(--black, #000);

                &[type="checkbox"] {
                  appearance: none;
                  -webkit-appearance: none;

                  border: 1px solid var(--black, #000);

                  cursor: pointer;

                  &:checked {
                    background-color: var(--pantone-red, #da291c);
                  }
                }
              }
            }

            .submit {
              width: 160px;

              padding: 0.25rem 1rem;
              margin: 0 auto;

              background: var(--pantone-red, #da291c);
              color: var(--white, #fff);

              font-family: 'Open Sans';
              font-size: max(16px, 0.9vmax);
              font-weight: 700;

              border-radius: 4px;
              border: none;

              transition: transform 0.2s, background 0.2s, color 0.2s;

              cursor: pointer;

              &:hover {
                background: var(--white, #fff);
                color: var(--pantone-red, #da291c);

                transform: scale(1.1);
              }
            }

            .question {
              padding-top: 0.5rem;

              color: var(--white, #fff);

              font-family: 'Open Sans';
              font-size: max(14px, 0.75vmax);

              text-align: center;

              & button {
                padding-left: 0.25rem;

                background-color: transparent;
                color: var(--pantone-red, #da291c);

                font-family: 'Open Sans';
                font-size: max(14px, 0.75vmax);
                font-weight: 700;

                border: none;

                transition: transform 0.2s;

                cursor: pointer;

                &:hover {
                  transform: scale(1.1);
                }
              }
            }

            &.hide {
              display: none;
            }

            &.show {
              display: grid;
            }
          }
        }
      </style>
    `
  }

  render() {
    const sheets = this.shadowRoot.adoptedStyleSheets

    this.shadowRoot.replaceChildren()

    this.shadowRoot.adoptedStyleSheets = sheets

    this.shadowRoot.appendChild(this.#getTemplate().content.cloneNode(true))
  }

  connectedCallback() {
    this.render()

    this.#setupFormSwitcher()

    this.addEventListener('transitionend', (event) => {
      if (
        event.propertyName === 'transform' &&
        !this.classList.contains('visible')
      ) {
        this.style.visibility = 'hidden'
      }
    })

    const observer = new MutationObserver(() => {
      if (this.classList.contains('visible')) {
        this.style.visibility = 'visible'
      }
    })
    observer.observe(this, { attributes: true, attributeFilter: ['class'] })
  }

  #setupFormSwitcher() {
    const loginForm = this.shadowRoot.querySelector('.login')
    const registerForm = this.shadowRoot.querySelector('.register')

    const loginSwitchButton = loginForm.querySelector('.question button')
    const registerSwitchButton = registerForm.querySelector('.question button')

    loginSwitchButton.addEventListener('click', () => {
      loginForm.classList.add('hide')
      loginForm.classList.remove('show')

      registerForm.classList.remove('hide')
      registerForm.classList.add('show')
    })

    registerSwitchButton.addEventListener('click', () => {
      registerForm.classList.add('hide')
      registerForm.classList.remove('show')

      loginForm.classList.remove('hide')
      loginForm.classList.add('show')
    })
  }
}

customElements.define('wos-menu', WosMenu)
