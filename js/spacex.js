const spaceX = projects[2];

const projectContainer = document.querySelector(".project-details-container");

projectContainer.innerHTML += `<div class="project-details-img">
                                <a href="${spaceX.link}"><img src= "${spaceX.image}" alt="image of spaceX website"/></a>
                                </div>

                                <div class="project-details-text">
                                <h2> About this project </h2>
                                    <p>${spaceX.desc}</p>
                                    <div class="tools">
                                        <h3> Tools used </h3>
                                        <ul class="tools-list">
                                            <li class="tools-list-item">${spaceX.tools}</li>
                                            
                                        </ul>
                                    </div>
                                <div>
                                <h3> Client </h3> 
                                <p>${spaceX.client}</p>
                                </div>
                                </div>
                                `;
