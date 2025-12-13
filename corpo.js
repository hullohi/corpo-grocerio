


// window.addEventListener('load',() => {
//     const video = document.getElementById('video1');
//     video.play();
// });

// window.addEventListener('scroll',() => {
//     const video1 = document.getElementById('video1');
//     const video2 = document.getElementById('video2');
//     const video3 = document.getElementById('video3');

//     const headcontainer1 = document.querySelector('.headcontainer1');
//     const headcontainer2 = document.querySelector('.headcontainer2');
//     const headcontainer3 = document.querySelector('.headcontainer3');
    
//     // If scrolled down more than 100px, show video2
//     console.log(window.scrollY);


//     if (window.scrollY < 10) {
//         headcontainer1.style.display = 'block';
//         headcontainer2.style.display = 'none';
//         headcontainer3.style.display = 'none';
//         // video1.style.position = 'sticky';
//         video1.style.display = 'block';
//         video2.style.display = 'none';
//         video3.style.display = 'none';
//         video1.play();
//     }
//     else if (window.scrollY <= 100) {
     
//         headcontainer1.style.display = 'none';
//         headcontainer2.style.display = 'block';
//         headcontainer3.style.display = 'none';

//         // video2.style.position = 'sticky'; 
//         video1.style.display = 'none';
//         video2.style.display = 'block';
//         video3.style.display = 'none';
//         video2.play();
//     }
//     else if (window.scrollY <= 200) {

//         headcontainer1.style.display = 'none';
//         headcontainer2.style.display = 'none';
//         headcontainer3.style.display = 'block';
//         // video3.style.position = 'sticky';

//         video1.style.display = 'none';
//         video2.style.display = 'none';
//         video3.style.display = 'block';
//         video3.play();
//     }
// });