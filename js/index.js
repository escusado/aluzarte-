
var onDomReady = function onDomReady() {
  var rellax = new Rellax('.rellax');

  $('.intro-video').html('<source src="loop.mp4" type="video/mp4">');

  const imageGalleryEl = document.querySelector('.image-gallery');

  imageGalleryEl.innerHTML = window.obra.map(obra => `
    <div class="image-gallery-el">
      <img src="obra/${obra.slug}.png" />

      <div class="image-gallery-el_title">
        ${obra.title}
      </div>

      <div class="image-gallery-el_data">
        ${obra.data}
      </div>

      <div class="image-gallery-el_author">
        ${obra.author}
      </div>
    </div>
  `).join('');

  $('.image-gallery').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
  });

  $('team-container').html(window.personitas.map(member => `
    <div class="member">
      <div class="photo" style="background-image:url('team/${member.slug}.png')"></div>
      <div class="content">
        <h4>${member.name}</h4>
        <h5>${member.position}</h5>
        <p>${member.info}</p>
      </div>
    </div>
  `).join(''));

};

//on dom ready
if (document.readyState != 'loading'){
  onDomReady();
} else {
  document.addEventListener('DOMContentLoaded', onDomReady);
}
console.log('wat');

const playIntroVideo = function(){
  var videoEl = $('.intro-video');
  videoEl.prop('currentTime', 0);
  videoEl.prop('controls', true);
  videoEl.css('z-index', 3);

  videoEl.find('source').attr('src', 'intro.mp4');
  videoEl[0].load();

  setTimeout(function(){
    videoEl[0].muted = false;
  },0);

  console.log('sup');
};
