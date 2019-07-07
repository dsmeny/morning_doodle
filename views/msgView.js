const fs = require("fs");

exports.template = () =>
  fs.readFileSync(`${__dirname}/../public/template.html`, "utf-8");

exports.replaceTemplate = (file, elem, str) => file.replace(elem, str);

exports.stringObject = obj => `<p>${obj.message}</p>`;
