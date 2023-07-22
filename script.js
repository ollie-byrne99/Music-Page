function spinImage(event) {
    const image = event.target;
    image.classList.add('spin-animation');
  
    setTimeout(() => {
      image.classList.remove('spin-animation');
    }, 1000);
  }
  
  const images = document.querySelectorAll('.row_item img');
  images.forEach(image => {
    image.addEventListener('click', spinImage);
  });
