const spaceX = {
  name: "SpaceX Center",
  desc: `The assignment here was to create a microsite for SpaceX.
        Since its a microsite for SpaceX I went to look at how the SpaceX site looks like to make sure they had some similiarities.
        The target audience for this website is space enthusiasts.
        After I had finished the research & user stories, I went onto sketching the wireframe and user flow.
        The design of the microsite was created in Adobe xD in mobile and desktop screen sizes to make sure that they had a consistent design.
        `,
  client: "School project",
  tools: {
    html: `<i class="fab fa-html5"></i>`,
    js: `<i class="fab fa-html5"></i>`,
    css: `<i class="fab fa-css3-alt"></i>`,
    sass: `<i class="fab fa-sass"></i>`,
  },

  image:
    "http://www.bango.one/portfolio/assets/spacex-center-preview-compressed.png",
  link: "http://www.bango.one/portfolio/spacex-center",
  aboutLink: "space-x.html",
  id: "spaceX",
};

console.log(spaceX);

const projectContainer = document.querySelector(".project-details-container");

projectContainer.innerHTML += `<div class="project-details-img">
                                <img src= "${spaceX.image}" alt="image of spaceX website"/>
                                </div>

                                <div class="project-details-text">
                                    <p>${spaceX.desc}</p>
                                    <div class="tools">
                                        <h3> Tools used </h3>
                                        <ul class="tools-list">
                                            <li class="tools-list-item">${spaceX.tools.html}<small>HTML</small></li>
                                            <li class="tools-list-item">${spaceX.tools.js}<small>JS</small></li>
                                            <li class="tools-list-item">${spaceX.tools.css}<small>CSS</small> </li>
                                            <li class="tools-list-item">${spaceX.tools.sass}<small>Sass</small> </li>
                                        </ul>
                                    </div>
                                <div>
                                <h3> Client </h3> 
                                </div>
                                </div>


                                
                                
                                `;
