import { html } from 'lit-element';

export const HeaderComponentStyles = html`
  <style>
    .header {
      position: fixed;
    }

    .nav__list {
      display: flex;
    }

    .nav__list-li {
      width: 25vw;
    }

    .nav__link {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      padding: 10px;
    }
  </style>
`;
