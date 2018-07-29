
var onDomReady = function onDomReady() {

  $('.intro-video').html('<source src="loop.mp4" type="video/mp4">');

  axios.get("http://go.javier.xyz:7908/personitas.json").then(res => {
    console.log(res.data)

    $('.team-container').html(res.data.map(member => `
      <div class="member">
        <div class="photo" style="background-image:url('${member.image.url}')"></div>
        <div class="content">
          <h4>${member.name}</h4>
          <p>${member.bio}</p>
        </div>
      </div>
    `).join(''));
  });

  axios.get("http://go.javier.xyz:7908/gallery.json").then(res => {
    window.galeries.map((gallery) => {
      let galleryEl = $(`<div class="gallery-item" style="background-image:url(${gallery.thumbnail.url});">
                          <div class="title">${gallery.name}</div>
                        </div>`);
      galleryEl.click((ev)=>{
        window.gallery.show(gallery.images.slice(0));
      });
      $('.gallery-section .galleries').append(galleryEl);
    }).join('');
  });

  window.gallery = new Gallery();
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
