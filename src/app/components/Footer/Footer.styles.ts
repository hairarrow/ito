import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 80px 16px 120px;
  max-width: 600px;
  margin: auto;

  .message {
    padding: 8px 24px;
    line-height: 32px;
    font-size: 18px;
    font-weight: 500;
    opacity: 0;

    & + .message {
      margin-top: 1px;
      margin-bottom: 40px;
    }
  }

  .bt-2 {
    opacity: 0;
  }
`;

export default FooterStyles;
