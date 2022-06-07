// Destructuring de objetos
const aprendiendoJS = {
 version: {
  nueva: 'ES6',
  anterior: 'ES5',
 },
 frameworks: ['React', 'VueJS', 'AngularJS'],
}

// Destructuring es extraer valores de un objeto

// console.log(aprendiendoJS)

// Versión anterior
// let version = aprendiendoJS.version.nueva
// let framework = aprendiendoJS.frameworks[1]

// Destructuring forma nueva
let { version, frameworks } = aprendiendoJS
console.log(version)
console.log(frameworks)
