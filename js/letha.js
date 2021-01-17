function createDesc() {
  const letha = projects[3];
  const projectContainer = document.querySelector(".project-details-container");

  projectContainer.innerHTML += `<div class="project-details-img">
                                      <a href="${letha.link}"><img src= "${letha.image}" alt="image of letha website"/></a>
                                      </div>
      
                                      <div class="project-details-text">
                                      <h2>About this project</h2>
                                          <p>${letha.desc}</p>
                                          <div class="tools">
                                              <h3> Tools used </h3>
                                              <ul class="tools-list">
                                                  <li class="tools-list-item">${letha.tools}</li>
                                              </ul>
                                          </div>
                                      <div>
                                      <h3> Client </h3> 
                                      <p>${letha.client}</p>
                                      </div>
                                      </div>
                                      `;
}
createDesc();
