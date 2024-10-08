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

// imports
import mongoose from 'mongoose'
import app from './app.js'

// port
const port = 3700

// database connection
mongoose
  .connect('mongodb://localhost:27017/dlr-website')
  .then(() => {
    console.log('Database connection established correctly')

    // server creation
    app.listen(port, () => {
      console.log('The server is running correctly in localhost:3700')
    })
  })
  .catch((e) => console.log(e))
