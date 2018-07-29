
var onDomReady = function onDomReady() {
  var rellax = new Rellax('.rellax');
  $('.intro-video').html('<source src="loop.mp4" type="video/mp4">');

  document.querySelector('.gallery-wall .masonry-container').innerHTML = window.obra.sort(()=>Math.round(Math.random())).map(obra => `
    <div class="gallery-item">
      <div class="thumb">
        <img src="obra/${obra.slug}.png" />
      </div>
      <div class="data">
        <div class="title">${obra.title}</div>
        <div class="meta">Autor: ${obra.author}</div>
      </div>
    </div>
  `).join('');
  window.gallery = new Gallery();

  $('.image-gallery').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3
  });

  $('.team-container').html(window.personitas.map(member => `
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
};
