# react-rollup-boilerplate

A simple boilerplate to quickly start building [React](https://reactjs.org/) app.

- [Rollup.js](https://rollupjs.org/guide/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/) + [CSS Modules](https://github.com/css-modules/css-modules)
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [lite-server](https://github.com/johnpapa/lite-server)

## Install

Using npm:

```sh
npm install
```

Now you can start developing your app in `src` folder. There is an app stub that shows all the aspects. You can write in [TypeScript](https://www.typescriptlang.org/), JavaScript or both.

## Styles

You can write your stylesheets in CSS or [SCSS](https://sass-lang.com/). Imported styles will be automatically inserted into document's `head` element:

```js
import './index.scss';
```

or using [CSS Modules](https://github.com/css-modules/css-modules) (note that the filename must have `.module` before extension):

```jsx
import style from './App.module.scss';

// . . .

<div className={style.header} />
```

## Tests

Tests utilize [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). You can write tests in JavaScript or [TypeScript](https://www.typescriptlang.org/). See `jest.config.js` file under `testMatch` for patterns that Jest uses to detect test files.

## Available scripts

Build development version (non-minified, with source maps) in the `dist` folder:

```
npm run build
```

Build development version in the `dist` folder and start watching changes:

```
npm run watch
```

Build production version (minified, no source maps, CSS modules class names obfuscated) in the `dist` folder:

```
npm run build:prod
```

Run tests:

```
npm test
```

Serve app from the `dist` folder at http://localhost:3000/ (with live reload)

```
npm run serve
```
