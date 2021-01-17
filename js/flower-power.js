const flowerPower = {
  name: "Flower Power",
  desc: `I created a wordpress site for a imaginary company called Flower Power which sells flowers.
        Using the Storefront theme as a base and modifying it as a child theme to be able to make changes without worrying about changes done to the original theme.
        Plugins used to build the website is:  `,
  client: "School project",
  tools: {
    wordpress: `<i class="fab fa-wordpress"></i>`,
    css: `<i class="fab fa-css3-alt"></i>`,
    php: `<i class="fab fa-php"></i>`,
  },
  image:
    "http://www.bango.one/portfolio/assets/flower-power-preview-compressed.png",
  link: "http://www.bango.one/portfolio/flower-power",
  id: 2,
};

console.log(flowerPower);

const projectContainer = document.querySelector(".project-details-container");

projectContainer.innerHTML += `<div class="project-details-img">
                                  <img src= "${flowerPower.image}" alt="image of flowerPower website"/>
                                  </div>
  
                                  <div class="project-details-text">
                                      <p>${flowerPower.desc}</p>
                                      <div class="tools">
                                          <h3> Tools used </h3>
                                          <ul class="tools-list">
                                              <li class="tools-list-item">${flowerPower.tools.wordpress}<small>Wordpress</small></li>
                                              <li class="tools-list-item">${flowerPower.tools.css}<small>CSS</small></li>
                                              <li class="tools-list-item">${flowerPower.tools.php}<small>PHP</small> </li>
                                          </ul>
                                      </div>
                                  <div>
                                  <h3> Client </h3> 
                                  </div>
                                  </div>
  
  
                                  
                                  
                                  `;
