import styled from "@emotion/styled";

export const WeatherPagesWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
`

export const DeleteButtonWeather = styled.button`
width: 155px;
height: 48px;
border-radius: 50px;
background-color: rgba(255, 255, 255, 0);
border: 1px solid rgba(255, 255, 255, 0.8);
color: rgba(255, 255, 255, 0.8);
font-size: 20px;
cursor: pointer;

:hover{
    transform: scale(1.1);
}
`
export const DeleteButtonWeatherBox = styled.div`
display: flex;
justify-content: center;

`

export const DeleteButtonAllCards = styled.button`
width: 709px;
height: 48px;
border-radius: 50px;
background-color: rgba(54, 120, 180, 1);
border: none;
font-size: 20px;
color: rgba(255, 255, 255, 0.8); ;
cursor: pointer;

:hover{
    transform: scale(1.1);
}
`