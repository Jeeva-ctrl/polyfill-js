import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { LoadJavascript } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <div id="res">res</div>
  </div>
`;

LoadJavascript();


