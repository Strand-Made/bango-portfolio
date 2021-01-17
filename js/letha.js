const letha = {
  name: "Letha Organic Leather",
  desc: "",
  client: "School project",
  tools: {
    html: `<i class="fab fa-html5"></i>`,
    css: `<i class="fab fa-css3-alt"></i>`,
  },
  image:
    "http://www.bango.one/portfolio/assets/spacex-center-preview-compressed.png",
  link: "http://www.bango.one/portfolio/letha",
  aboutLink: "letha.html",
  id: "letha",
};

console.log(letha);

const projectContainer = document.querySelector(".project-details-container");

projectContainer.innerHTML += `<div class="project-details-img">
                                    <img src= "${letha.image}" alt="image of letha website"/>
                                    </div>
    
                                    <div class="project-details-text">
                                        <p>${letha.desc}</p>
                                        <div class="tools">
                                            <h3> Tools used </h3>
                                            <ul class="tools-list">
                                                <li class="tools-list-item">${letha.tools.html}<small>HTML</small></li>
                                                <li class="tools-list-item">${letha.tools.css}<small>CSS</small></li>
                                            </ul>
                                        </div>
                                    <div>
                                    <h3> Client </h3> 
                                    </div>
                                    </div>
    
    
                                    
                                    
                                    `;
