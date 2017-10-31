# CNPJ (em desenvolvimento) [![Build Status](https://secure.travis-ci.org/leonardothibes/node-cnpj.png)](http://travis-ci.org/leonardothibes/node-cnpj) [![Package Quality](http://npm.packagequality.com/shield/node-cnpj.svg)](http://packagequality.com/#?package=node-cnpj)

AINDA EM DESENVOLVIMENTO. NO MOMENTO, NÃO HÁ NADA FUNCIONAL PRA VER AQUI NO MOMENTO!

VOLTE OUTRO DIA!

Funções utilitárias para tratamento de CNPJ.

Installation
------------

```bash
npm install node-cnpj --save
```

Examples
--------

* [Cnpj Validation](#cnpj-validation)
* [Cnpj Mask](#cnpj-mask)
* [Cnpj UnMask](#cnpj-unmask)
* [Cnpj is Masked](#cnpj-is-masked)
* [Random Cnpj Generation](#random-cnpj-generation)

Cnpj Validation
--------------

```js
const cnpj = require('node-cnpj');

cnpj.validate('226.088.422-91'); // returns TRUE
cnpj.validate('22608842291');    // returns TRUE

cnpj.validate('11111111111'); // returns FALSE

```

Cnpj Mask
--------

```js
const cnpj = require('node-cnpj');

cnpj.mask('22608842291'); // returns '226.088.422-91'

```

Cnpj UnMask
--------

```js
const cnpj = require('node-cnpj');

cnpj.unMask('226.088.422-91'); // returns '22608842291'

```

Cnpj Is Masked
------------

```js
const cnpj = require('node-cnpj');

cnpj.isMasked('226.088.422-91'); // returns TRUE
cnpj.isMasked('22608842291');    // returns FALSE

```

Random CNPJ Generation
----------------------

```js
const cnpj = require('node-cnpj');

cnpj.generate();     // returns a valid CNPJ without mask
cnpj.generate(true); // returns a valid CNPJ with mask

```

Test and development
--------------------

* Install external dependencies: **``npm install``**
* Run the test suite without coverage: **``npm test``**
* Run the test suite with coverage: **``npm run testdox``**

How to Contribute
-----------------

* Open a pull request or an issue about what you want to implement / change. We're glad for any help!
* Please be aware that we'll only accept fully tested code.

Contributors
------------

 * **Leonardo Thibes <leonardothibes@gmail.com>**

LICENSE
=======

Copyright (c) 2017 Leonardo Thibes

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
