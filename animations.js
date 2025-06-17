// filepath: animations.js

document.addEventListener('DOMContentLoaded', function() {
  // Thêm class để đánh dấu các phần tử cần animation khi scroll
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('scroll-animate', 'scroll-fadeIn');
  });
  
  // Thêm animation cho các phần tử cụ thể
  const headings = document.querySelectorAll('h2');
  headings.forEach(heading => {
    heading.classList.add('scroll-animate', 'scroll-slideInLeft');
  });
  
  // Xử lý scroll animation
  const scrollElements = document.querySelectorAll('.scroll-animate');
  
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    const elementHeight = el.getBoundingClientRect().height;
    
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add('visible');
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 80)) {
        displayScrollElement(el);
      }
    });
  };
  
  // Chạy lần đầu khi tải trang
  setTimeout(handleScrollAnimation, 300);
  
  // Thêm event listener cho scroll
  window.addEventListener('scroll', () => {
    handleScrollAnimation();
  });
  
  // Xử lý active state cho nav links
  const navLinks = document.querySelectorAll('.nav-link');
  
  const setActiveLink = () => {
    const scrollPosition = window.scrollY;
    
    // Lấy tất cả các section có id
    document.querySelectorAll('section[id]').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
});