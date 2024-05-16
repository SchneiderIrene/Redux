import styled from "@emotion/styled";


export const FeedbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 600px;
    padding: 30px;
    background: rgb(255, 0, 255, 0.5);
` 

export const FeedbackResultContainer = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 20px;
    width: 100%;
`
   
  export const LikeDislikeContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center; 
  `

  export const Result = styled.div`
    font-size: 34px;
    color: black;
    font-weight: bold;
    border: 2px solid black;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(128, 0, 128); */
  `
   
    export const IconBox = styled.div`
    font-size: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    cursor: pointer;

:hover{
  transform: scale(1.1);
}
    `

