console.log("Vinayak Sharma");

const projectContent = document.querySelector(".project--content");


const projectContentData = [
    {image: "assets/img/Minimal Music Player.png", title: "Spotify - Home Page", Discription: "A minimal Spotify-inspired music player built using HTML, CSS, and JavaScript.", mode: "🟢 Online", demo: "https://minimal-music-player-ui.netlify.app/", github: "https://github.com/VinayakSharmaDev/minimal-music-player"},
    {image: "assets/img/Portfolio.png", title: "First Portfolio", Discription: "My First ever portfolio", mode: "🟢 Online", demo: "https://vinayaksharmadev.netlify.app/", github: "https://github.com/VinayakSharmaDev/Portfolio"},
]

projectContentData.forEach(card =>{

projectContent.insertAdjacentHTML("beforeend", 

        `     <div class="project--card">

                    <div class="project--card__img">
                        <img src="${card.image}" alt="Vinayak Sharma project" width="400" height="300"></a>
                    </div>

                    <div class="project--card__about">

                        <h3>${card.title}</h3>
                        <p>${card.Discription}</p>
                        <div>

                            <p>${card.mode}</p>
                            <div>
                                <a class="btn" href="${card.demo}" target="_blank">Demo</a>
                               <a class="btn" href="${card.github}" target="_blank">GitHub</a>
                            </div>

                        </div>
                    </div>

                </div>`

    )


});


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // observer.unobserve(entry.target); // animate once
      }

      // if (!entry.isIntersecting) {
      //   entry.target.classList.remove("active");
      //   // observer.unobserve(entry.target); // animate once
      // }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach(el => observer.observe(el));


// Hamberger

const hamBtn = document.querySelector(".hamberger");
const hamBtnActive = document.querySelector(".hamberger-active");
const hamActive = document.querySelector(".hamberger--content");


  
  hamBtn.addEventListener("click", ()=> {

hamActive.classList.add("hamberger--content--active");

})

 hamBtnActive.addEventListener("click", ()=> {

hamActive.classList.remove("hamberger--content--active");

})










