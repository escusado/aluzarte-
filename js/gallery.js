class Gallery {
  constructor () {
    this.lightboxEl = document.querySelector('.lightbox');
    this.galleryEl = document.querySelector('.gallery-wall');
    this.masonryEl = document.querySelector('.masonry-container');
    this.closeEl = document.querySelector('.gallery-wall .close');

    this.masonry = new Masonry(this.masonryEl, {
      itemSelector: '.gallery-item'
    });

    this.closeEl.addEventListener('click', this.hide.bind(this));
  }

  show(galleryData) {
    this.buildGallery(galleryData);

    this.lightboxEl.classList.add('enabled');
    this.galleryEl.classList.add('enabled');
    this.masonry.reloadItems();
    this.masonry.layout();
  }

  buildGallery (galleryData) {
    while (this.masonryEl.firstChild) {
      this.masonryEl.removeChild(this.masonryEl.firstChild);
    }

    galleryData.map((piece) => {
      let pieceEl = $(`<div class="gallery-item">
                          <div class="thumb">
                            <img src="obra/3-montanas.png" alt="">
                          </div>
                          <div class="data">
                            <div class="title">3 Montañas</div>
                            <div class="meta">Autor: Someone</div>
                          </div>
                        </div>`);
      pieceEl.click((ev)=>{
        console.log('>>>> zoom piece <<<<')
      });
      this.masonryEl.appendChild(pieceEl[0]);
    }).join('');
  }

  hide () {
    this.lightboxEl.classList.remove('enabled');
    this.galleryEl.classList.remove('enabled');
  }
};
