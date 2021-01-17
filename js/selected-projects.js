function showcase() {
  const projectContainer = document.querySelector(
    ".selected-projects-container"
  );
  selectedProjects = projects.slice(1, 4);
  for (let i = 0; i < selectedProjects.length; i++) {
    const project = selectedProjects[i];
    // console.log(project);
    projectContainer.innerHTML += `
      <div class="project-card">
        <div class="project-card-banner">
          ${project.tools}
        </div>
        <div class="project-image-container">
          <a href="${project.aboutLink}">
            <img class="project-card-image" src="${project.image}" alt="preview of ${project.name}"/>
          </a>
        </div>
        </div>
  
      </div>
      </div>
      
      `;
  }
}
showcase();
