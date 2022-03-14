import styled from "styled-components";

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;

  .modalContainer {
    position: fixed;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }

  .modalSidebar {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    background-color: ${(props) => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .switcher {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10%;
  }
  .languageSelector {
    width: 120px;
  }
  .hrLine {
    border-top: 1px solid ${(props) => props.theme.colors.main};
    width: 100%;
    margin: 15px 0;
  }

  /* =========== transitions ==================== */

  .overlay-enter {
    opacity: 0;
  }

  .overlay-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  .overlay-exit {
    opacity: 1;
  }

  .overlay-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }

  .modal-enter {
    transform: translateX(80%);
  }

  .modal-enter-active {
    transform: translateX(0);
    transition: transform 200ms ease-in-out;
  }

  .modal-exit {
    transform: translateX(0);
  }

  .modal-exit-active {
    transform: translateX(80%);
    transition: transform 200ms ease-in-out;
  }
`;
