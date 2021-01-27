function createDesc() {
  const flowerPower = projects[0];
  console.log(flowerPower);

  const projectContainer = document.querySelector(".project-details-container");

  projectContainer.innerHTML += `<div class="project-details-img">
                                  <a href="${flowerPower.link}"<img src= "${flowerPower.image}" alt="image of flowerPower website"/></a>
                                  </div>
  
                                  <div class="project-details-text">
                                  <h2>About this project</h2>
                                      <p>${flowerPower.desc}</p>
                                      <div class="tools">
                                          <h3> Tools used </h3>
                                          <ul class="tools-list">
                                              <li class="tools-list-item">${flowerPower.tools}</li>
                                          </ul>
                                      </div>
                                  <div>
                                  <h3> Client </h3> 
                                  <p>${flowerPower.client}</p>
                                  </div>
                                  </div>
                                  `;
}
createDesc();
