import styled from "@emotion/styled"

export const SpinnerComponent = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.6);
  border-left-color: rgba(54, 120, 180, 0.1);
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
