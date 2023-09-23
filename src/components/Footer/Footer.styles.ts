import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 16px 120px;
  max-width: 600px;
  margin: auto;

  .message {
    padding: 8px 16px;
    font-size: 18px;
    line-height: 1.4;
    opacity: 0;

    & + .message {
      margin-top: 1px;
      margin-bottom: 40px;
    }
  }

  .ms-1 {
    z-index: 2;
  }

  .ms-2 {
    z-index: 1;
  }

  .bt-2 {
    opacity: 0;
  }
`;

export default FooterStyles;
