# Markdown to WordPress Readme

[![npm version](https://img.shields.io/npm/v/@wpsh/to-wp-txt.svg)](https://www.npmjs.com/package/@wpsh/to-wp-txt)
[![Build Status](https://travis-ci.com/wpsh/to-wp-txt.svg?branch=master)](https://travis-ci.com/wpsh/to-wp-txt)
[![Coverage Status](https://coveralls.io/repos/github/wpsh/to-wp-txt/badge.svg?branch=master)](https://coveralls.io/github/wpsh/to-wp-txt?branch=master)

A helper library for converting Markdown files to WordPress `readme.txt` format.


## Install

Install using [`npm`](https://www.npmjs.com) as a development dependency:

```bash
npm install --save-dev @wpsh/to-wp-txt
```

## Usage

```js
const fs = require('fs');
const towptxt = require('@wpsh/to-wp-txt').default;

fs.readFile('readme.txt.md', 'utf8', (err, readme) => {
  if (err) throw err;
  fs.writeFile('readme.txt', towptxt(readme), err => {
    if (err) throw err;
  });
});
```


## Credits

Created by [Kaspars Dambis](https://kaspars.net).
