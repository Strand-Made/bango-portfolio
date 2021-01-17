function createDesc() {
  const interactiveMuseum = projects[1];
  const projectContainer = document.querySelector(".project-details-container");

  projectContainer.innerHTML += `<div class="project-details-img">
                                  <a href="${interactiveMuseum.link}"><img src= "${interactiveMuseum.image}" alt="image of interactive museum website"/></a>
                                  </div>
  
                                  <div class="project-details-text">
                                  <h2>About this project</h2>
                                      <p>${interactiveMuseum.desc}</p>
                                      <div class="tools">
                                          <h3> Tools used </h3>
                                          <ul class="tools-list">
                                              <li class="tools-list-item">${interactiveMuseum.tools}</li>
                                              
                                          </ul>
                                      </div>
                                  <div>
                                  <h3> Client </h3> 
                                  <p>${interactiveMuseum.client}</p>
                                  </div>
                                  </div>
                                  `;
}
createDesc();
