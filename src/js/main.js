  var els = document.getElementsByClassName('portfolio-item');
  document.addEventListener("DOMContentLoaded", function() {
  for (var i = 0; i < els.length; i++) {
    els[i].addEventListener('mouseenter', function(e){
      var blah = this.children[0];
      blah.style.display = 'block';
      blah.className += ' animated slideInUp';
    }, false);

    els[i].addEventListener('mouseleave', function(e){
      var blah = this.children[0];
      blah.style.display = 'none';
      blah.className  = 'desc';
    }, false);
  }
});
