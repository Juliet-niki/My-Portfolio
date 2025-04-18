const template = document.createElement("template");
template.innerHTML = `
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: "work-sans-reg";
  src: url("../static/WorkSans-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "work-sans-medium";
  src: url("../static/WorkSans-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "work-sans-bold";
  src: url("../static/WorkSans-Bold.ttf") format("truetype");
}

@font-face {
  font-family: "work-sans-itac";
  src: url("../static/WorkSans-BlackItalic.ttf") format("truetype");
}

/*-------- CSS FOR SIDEBAR  -------*/

.side-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2vh;
  width: 100%;
  
}

.menu-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #989898;
  border-radius: 50%;
  height: 60px;
  width: 60px;
}

.menu-link:hover {
  background-color: #74c0fc;
}

.active-menu {
  background-color: #74c0fc;
}

.icon-text-wrapper {
  display: flex;
  position: relative;
}

.text-hover {
  position: absolute;
  right: 180%;
  top: 20%;
  font-family: "work-sans-reg";
  font-size: 1.2vw;
  color: #fff;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
}

.menu-link:hover .text-hover {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

@media only screen and (max-width: 1100px){
.menu-link {
  height: 55px;
  width: 55px;
}

.menu-link svg{
  height: 30px;
  width: 30px;
}

.text-hover {
  // font-size: 1.4vw;
  right: 175%;

}

}

@media only screen and (max-width: 768px){
.menu-link {
  height: 45px;
  width: 45px;
}

.menu-link svg{
  height: 27px;
  width: 27px;
}

.text-hover {
  // font-size: 1.9vw;
  right: 170%;

}

}

@media only screen and (max-width: 600px){
.menu-link {
  height: 40px;
  width: 40px;
}

.menu-link svg{
  height: 25px;
  width: 25px;
}

}

</style>

 <!-- -------- HTML FOR SIDEBAR  ------- -->
  
<div class="side-bar">
          <a href="../Home/home.html" class="menu-link active-menu" id="home">
            <div class="icon-text-wrapper">
              <p class="text-hover">Home</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width="30"
                height="30"
              >
                <path
                  fill="#ffffff"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </div>
          </a>
          <a href="../About/about.html" class="menu-link" id="about">
            <div class="icon-text-wrapper">
              <p class="text-hover">About</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="30"
                height="30"
              >
                <path
                  fill="#ffffff"
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                />
              </svg>
            </div>
          </a>
          <a href="../Portfolio/portfolio.html" class="menu-link" id="portfolio">
            <div class="icon-text-wrapper">
              <p class="text-hover">Portfolio</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30"
                height="30"
              >
                <path
                  fill="#ffffff"
                  d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z"
                />
              </svg>
            </div>
          </a>
          <a href="../Contact_Me/contact_me.html" class="menu-link" id="contact">
            <div class="icon-text-wrapper">
              <p class="text-hover">Contact Me</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="30"
                height="30"
              >
                <path
                  fill="#ffffff"
                  d="M64 208.1L256 65.9 448 208.1l0 47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5l0-47.4zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"
                />
              </svg>
            </div>
          </a>
        </div>
      
`;

class SideBar extends HTMLElement {
  menuText;
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }

  static get observedAttribute() {
    return ["active"];
  }

  get active() {
    return this.getAttribute("active");
  }

  set active(value) {
    return this.setAttribute("active", value);
  }

  connectedCallback() {
    const currentPath = window.location.pathname;

    this.shadowRoot.querySelectorAll(".menu-link").forEach((link) => {
      if (currentPath.includes(link.getAttribute("href").replace("..", ""))) {
        link.classList.add("active-menu");
      } else {
        link.classList.remove("active-menu");
      }
    });

    switch (this.active) {
      case "home":
        const home = this.shadowRoot.getElementById("home");
        home.setAttribute("class", "active-menu");
        break;
      case "about":
        const about = this.shadowRoot.getElementById("about");
        about.setAttribute("class", "active-menu");
        break;
      case "portfolio":
        const portfolio = this.shadowRoot.getElementById("portfolio");
        portfolio.setAttribute("class", "active-menu");
        break;
      case "contact":
        const contact = this.shadowRoot.getElementById("contact");
        contact.setAttribute("class", "active-menu");
        break;
    }
  }
}

customElements.define("side-bar", SideBar);
