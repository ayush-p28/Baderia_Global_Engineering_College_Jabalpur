const textElement=document.getElementById("text"),text="The goal of education is the advancement of knowledge and the dissemination of truth.",typingSpeed=100;let a=0;function typeWriter(){a<text.length&&(textElement.innerHTML+=text.charAt(a),a++,setTimeout(typeWriter,typingSpeed))}typeWriter(),$("#owl-cor1").owlCarousel({loop:!0,margin:15,nav:!0,navText:["<i class='fa-solid fa-angles-left'></i>","<i class='fa-solid fa-angles-right'></i>"],responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),AOS.init({offset:170,delay:30,duration:700});for(var carouselContainer=document.getElementById("owl-cor2"),i=1;i<=50;i++){var imgTag=document.createElement("img");imgTag.src="images/svg/"+i+".jpg",imgTag.classList.add("img-fluid");var itemDiv=document.createElement("div");itemDiv.classList.add("item"),itemDiv.appendChild(imgTag),carouselContainer.appendChild(itemDiv)}$("#owl-cor2").owlCarousel({loop:!0,margin:10,nav:!1,dots:!0,autoplay:!0,autoplayTimeout:700,navText:["<i class='fa-solid fa-angles-left'></i>","<i class='fa-solid fa-angles-right'></i>"],responsive:{0:{items:4},600:{items:6},1e3:{items:9}}});