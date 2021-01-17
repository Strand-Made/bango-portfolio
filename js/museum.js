const interactiveMuseum = {
  name: "Interactive Museum",
  desc: `I created this website for a imaginary museum for school children between the ages of 7-15.
          I started by sketching the wireframe on paper and then moving onto designing the website in Adobe xD.
          Since the core audience is children I decided to use color to make the website more appealing for children.`,
  client: "School project",
  tools: {
    html: `<i class="fab fa-html5"></i>`,
    css: `<i class="fab fa-css3-alt"></i>`,
    js: `<i class="fab fa-js"></i>`,
  },

  image:
    "http://www.bango.one/portfolio/assets/interactive-museum-preview-compressed.png",
  link: "http://www.bango.one/portfolio/interactive-museum",
  id: "interactive-museum",
};

console.log(interactiveMuseum);

const projectContainer = document.querySelector(".project-details-container");

projectContainer.innerHTML += `<div class="project-details-img">
                                  <img src= "${interactiveMuseum.image}" alt="image of interactive museum website"/>
                                  </div>
  
                                  <div class="project-details-text">
                                      <p>${interactiveMuseum.desc}</p>
                                      <div class="tools">
                                          <h3> Tools used </h3>
                                          <ul class="tools-list">
                                              <li class="tools-list-item">${interactiveMuseum.tools.html}<small>HTML</small></li>
                                              <li class="tools-list-item">${interactiveMuseum.tools.css}<small>CSS</small></li>
                                              <li class="tools-list-item">${interactiveMuseum.tools.js}<small>JS</small> </li>
                                          </ul>
                                      </div>
                                  <div>
                                  <h3> Client </h3> 
                                  </div>
                                  </div>
  
  
                                  
                                  
                                  `;
