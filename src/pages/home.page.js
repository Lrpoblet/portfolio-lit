import '../components/header-component';

export class HomePage extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header-component></header-component>`;
  }
}
customElements.define('home-page', HomePage);
