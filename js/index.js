
var onDomReady = function onDomReady() {
  var rellax = new Rellax('.rellax');
};

//on dom ready
if (document.readyState != 'loading'){
  onDomReady();
} else {
  document.addEventListener('DOMContentLoaded', onDomReady);
}
