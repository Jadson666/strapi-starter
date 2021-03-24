const fs = require("fs");
const { parse } = require("node-html-parser");
require('dotenv').config()

const env = {
  RICHTEXT_EDITOR: process.env.RICHTEXT_EDITOR
}

const html = fs.readFileSync("./build/index.html", {
  encoding: "utf8",
  flag: "r",
});
const root = parse(html);
const appEle = root.querySelector('#app')
appEle.insertAdjacentHTML('afterend', `<script> window.env = ${JSON.stringify(env)}</script>`)
fs.writeFileSync("./build/index.html", root.toString());
