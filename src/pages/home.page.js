export class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `Home Page`;
  }
}
customElements.define('home-page', HomePage);
