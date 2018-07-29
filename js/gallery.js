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

  show() {
    this.lightboxEl.classList.add('enabled');
    this.galleryEl.classList.add('enabled');
    this.masonry.layout();
  }

  hide () {
    this.lightboxEl.classList.remove('enabled');
    this.galleryEl.classList.remove('enabled');
  }
};
