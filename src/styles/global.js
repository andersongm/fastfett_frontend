import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        /* height: 100%; */
        left: 0;
        top: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none
    }

    button {
        cursor: pointer
    }

    .react-confirm-alert-button-group > button {
        background: #ab59c1 !important
    }

    .react-confirm-alert-overlay {
      background: rgba(0, 0, 0, 0.5) !important
    }

    .react-toastify-fastfeet {
      background: #ab59c1;
    }

    .modal-on {
      background: #0000009e;
      position: fixed;
      left: 0px;
      top: 0px;
      display: flex;
      justify-content: center;
      opacity: 1;
    }

    .modal-off {
      display: none;
    }

`;
