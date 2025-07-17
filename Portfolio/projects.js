import { Projects } from "./project_items.js";

const projectsContainer = document.getElementById("projects");

const handleProjectItemDisplay = () => {
  Projects.forEach((item) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.innerHTML = `
        <div class="project-item-grp-1">
            <img class="image-1" src="${item.image1}" alt="${
      item.projectName
    }" />
            <h3 class="project-name-1">${item.projectName}</h3>
            <p class="project-description-1">${item.projectDescription1}</p>
            
        </div>
        <div class="project-description-wrapper">
            <div class="project-descriptions">
                <div class="close-icon">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="30"
                        height="30"
                    >
                        <path
                        fill="#3b2ef7"
                        d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
                        />
                    </svg>
                    </div>
            <div class="project-description-scroll-area">
            <h3 class="project-name-2">${item.projectName}</h3>
            <p class="project-description-2">${item.projectDescription2}</p>
           <p class="project-link-box">Project Link: 
            <a href="${
              item.projectLink
            }" class="project-link-2" target="_blank">${item.projectLink}</a>
            </p>
            <div class="technologies">
              <p> Technologies Used:
              <div class="technology">  ${item.technologies
                .map((tech) => `<span >${tech}</span>`)
                .join("")}
              </div>
              </p>
            </div>
            <div class="image-wrapper">
                ${item.image2
                  .map(
                    (image) =>
                      `<img src="${image}" alt="${item.projectName} image" class="image-2"/>`
                  )
                  .join("")}
            </div>
            </div>
        </div>
        </div>
    `;
    projectsContainer.appendChild(projectItem);
  });
};
handleProjectItemDisplay();
