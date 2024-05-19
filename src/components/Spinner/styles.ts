import styled from "@emotion/styled";

export const SpinnerComponent = styled.div`
 border: 4px solid #1f27f5;
 border-left-color: aliceblue;
 border-radius: 50%;
 width: 50px;
 height: 50px;
 animation: spin 1s linear infinite;

 @keyframes spin {
  to {
    transform: rotate(360deg);
  }
 }
`

export const SpinnerContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
position: absolute;
top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`



