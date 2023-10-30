import { LitElement, html } from 'lit';
import { HeaderComponentStyles } from './header-components-styles';

export class HeaderComponent extends LitElement {
  getStyles() {
    return [HeaderComponentStyles];
  }

  render() {
    return html`
      ${this.getStyles()}
      <header class="header">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__list-li">
              <a
                class="nav__link"
                href="./index.html#about-me"
                title="Proyectos"
                >Sobre mi</a
              >
            </li>
            <li class="nav__list-li">
              <a
                class="nav__link"
                href="./index.html#projects"
                title="Proyectos"
                >Proyectos</a
              >
            </li>
            <li class="nav__list-li">
              <a class="nav__link" href="./index.html#story" title="Mi historia"
                >Mi historia</a
              >
            </li>
            <li class="nav__list-li">
              <a class="nav__link" href="./index.html#contact" title="Contacto"
                >Contacto</a
              >
            </li>
          </ul>
        </nav>
      </header>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('header-component', HeaderComponent);
