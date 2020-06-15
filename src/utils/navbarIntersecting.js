import $ from './selector'

const navbarIntersecting = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        $('.nav-extended').style.top = '-50%';
      }else{
        $('.nav-extended').style.top = '0%';
      }
    })
  }, {
    threshold: .4
});

export default navbarIntersecting;