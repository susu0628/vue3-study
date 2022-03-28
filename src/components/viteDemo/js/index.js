import { sum } from './math.js';
import { mult } from '../ts/mult.ts';
// import _ from '../node_modules/lodash-es/lodash.default.js';
import _ from 'lodash-es';
import "../css/index.css";
import "../css/title.less";

console.log('hello vite');
console.log(sum(10, 20));
console.log(_.join(['jiang', 'tlp'], '-'));
console.log(mult(10, 4));

const titleEle = document.createElement('div')
titleEle.className = "title";
titleEle.innerHTML = 'hello vite';
document.body.appendChild(titleEle);