
//         let menuButton  =  document.querySelector('.navTrigger')
// let mainMenu  =  document.getElementById('mainListDiv')

// function fadeIn(element)   {
//     let opacity = 0 // initial opacity
//     let timer = setInterval(function()  {
//         if(opacity >=1)  {
//             clearInterval(timer)
//             element.style.display = 'block'
//         }

//         element.style.opacity = opacity
//         element.style.filter = 'alpha(opacity=' + opacity * 100 + ")";
//         opacity +=opacity*0.1
//     }, 10)
// }

// function fadeIn(el, time) {
//     el.style.opacity = 0;
  
//     var last = +new Date();
//     var tick = function() {
//       el.style.opacity = +el.style.opacity + (new Date() - last) / time;
//       last = +new Date();
  
//       if (+el.style.opacity < 1) {
//         (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
//         el.style.display = 'block'
//       }
//     };
  
//     tick();
//   }
  

 
// menuButton.addEventListener('click', function()  {
//     menuButton.classList.toggle('active')
//     mainMenu.classList.toggle('show_list')
//     fadeIn(mainMenu, 1000)
// })


// (function($) { // Begin jQuery
//     $(function() { // DOM ready
//       // If a link has a dropdown, add sub menu toggle.
//       $('nav ul li a:not(:only-child)').click(function(e) {
//         $(this).siblings('.nav-dropdown').toggle();
//         // Close one dropdown when selecting another
//         $('.nav-dropdown').not($(this).siblings()).hide();
//         e.stopPropagation();
//       });
//       // Clicking away from dropdown will remove the dropdown class
//       $('html').click(function() {
//         $('.nav-dropdown').hide();
//       });
//       // Toggle open and close nav styles on click
//       $('#nav-toggle').click(function() {
//         $('nav ul').slideToggle();
//       });
//       // Hamburger to X toggle
//       $('#nav-toggle').on('click', function() {
//         this.classList.toggle('active');
//       });
//     }); // end DOM ready
//   })(jQuery); // end jQuery



// //changing text under the image when hovering on the image

// let firstImage  = document.querySelector(".circle__one")

// let secondImage =  document.querySelector(".circle__two")

// let thirdImage =  document.querySelector(".circle__three")

// firstImage.addEventListener("onmouseover", function(){
// let textOne =  document.createElement("p")
// textOne.textContent = "fundi Kipusa farming 4.0"
// let container =  document.querySelector('.container')
// container.appendChild(textOne)
// })



// document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//      let obj = document.getElementById(id),
//       current = start,
//       range = end - start,
//       increment = end > start ? 1 : -1,
//       step = Math.abs(Math.floor(duration / range)),
//       timer = setInterval(() => {
//        current += increment;
//        obj.innerHTML = current;
//        if (current == end) {
//         clearInterval(timer);
//        }
//       }, step);
//     }

//     counter('count1', 0, 700, 2000);
    
//     counter('count2', 100, 200, 2500);
    
//     counter('count3', 0, 500, 1500);

//     counter('count4', 0 ,135, 4500)

    
//     counter('count5', 0 ,12, 200)
    
//     counter('count6', 0 , 200, 2000)
    
//     counter('count7', 0 ,5, 1000)
    
//     counter('count8', 0 ,100, 1000)

    
//     counter('count9', 0 ,2000, 3500)

    
//     counter('count10', 0 ,4, 4000)

    
//     counter('count11', 0 ,10, 3000)

    
//     counter('count12', 0 , 170, 3000)
//    });
   
