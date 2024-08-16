// 返回顶部按钮
window.addEventListener('scroll', function() {
  var backToTop = document.getElementById('totop');
  if (window.pageYOffset > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

document.getElementById('totop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
