function getPortfolio() {
  const portfolioContainer = document.querySelector(".portfolio-container");
  for (let i = 0; i < projects.length; i++) {
    portfolioContainer.innerHTML += `
    <div class="project-card">
        <div class="project-image-container">
            <a href="${projects[i].aboutLink}">
                <img class="project-card-image" src="${projects[i].image}" alt="preview of ${projects[i].name}"/>
            </a>
            <div class="project-image-text show">
                <h3> ${projects[i].name}</h3>
                <p> ${projects[i].tools}</p>
            </div>
        </div>
    </div>`;
  }
}
getPortfolio();
