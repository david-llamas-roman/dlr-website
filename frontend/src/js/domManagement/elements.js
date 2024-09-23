/*
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2024 David Llamas Román
 */

'use strict'

// IMPORTS
import {
  getIfContainsClass,
  removeClassByClassName,
} from './relatedWithStyles/classes.js'

// GETTERS
export function getElementById(elementId) {
  return document.getElementById(elementId)
}

export function getElementByClassName(elementClassName) {
  return document.getElementsByClassName(elementClassName)
}

export function getElementAttribute(element, attribute) {
  return element.getAttribute(attribute)
}

// ACTIONS
export function hideElement(element) {
  if (getIfContainsClass(element, 'show')) {
    removeClassByClassName(element, 'show')
  }

  element.classList.add('hide')
}

export function showElement(element) {
  if (getIfContainsClass(element, 'hide')) {
    removeClassByClassName(element, 'hide')
  }

  element.classList.add('show')
}
