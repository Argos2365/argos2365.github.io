
const obserber = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {
        
        console.log("ENTRY");
        
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });


});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((el) => obserber.observe(el))
