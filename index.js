
$(document).ready(function(){
    // FOR ANIMATION HEADING
    let typed = new Typed('.element',{
        strings:['Vandana Nawhal', 'a Web Developer','a Web Designer'],
        smartBackspace: true,
        typeSpeed:100,
        backSpeed: 100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000,
    });

// Download CV
    $("#downloadCV").click(function (e) {
        e.preventDefault();          
        window.open("resume.pdf", "_blank")
    });

    // ADD DARK BACKGROUND AT SCROLL
      let header = document.querySelector('.navbar')
    window.onscroll = function() {
        var top = window.scrollY;
        if(top >=100) {
            header.classList.add('navbarDark');
        }
        else {
            header.classList.remove('navbarDark');
        }
    }









})