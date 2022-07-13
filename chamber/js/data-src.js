const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    thresholder: 1,
    rootMargin: "10px 20px 30px 40px" 
};

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
      items.forEach((item) => {
        if(item.isIntersecting) {
          loadImages(item.target);
          observer.unobserve(item.target);
        }
      });
    });
    imagesToLoad.forEach((img) => {
      imgObserver.observe(img);
    });
  } 
else {
    imagesToLoad.forEach((img) => {
      loadImages(img);
    });
}
  


