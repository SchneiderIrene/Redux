import styled from "@emotion/styled"

export const WeatherMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 0px;
  gap: 20px;
`

export const WeatherSearchWrapper = styled.div`
  display: flex;
  gap: 14px;
`
interface ButtonStylesProps {
  disabled: boolean
}
export const WeatherButton = styled.button<ButtonStylesProps>`
  width: 146px;
  height: 48px;
  border-radius: 50px;
  background-color: ${({ disabled }) =>
    disabled ? "rgba(54, 120, 180, 0.7)" : "rgba(54, 120, 180, 1)"};
  border: none;
  color: ${({ disabled }) =>
    disabled ? "rgba(255, 255, 255, 0.6)" : "aliceblue"};
  font-size: 20px;
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

  :hover {
    ${({ disabled }) =>
      disabled ? "transform: scale(1.0)" : "transform: scale(1.1)"}
  }
`

export const WeatherInput = styled.input`
  height: 48px;
  width: 550px;
  border-radius: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid aliceblue;
  outline: none;
  padding: 20px;
  color: aliceblue;
  gap: 10px;
  font-size: 20px;
  padding: 20px;
  font-weight: bold;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`

export const WeatherBlock = styled.div`
  width: 100%;
  height: 129px;
  background-color: rgba(47, 72, 111, 0.62);
  border-radius: 18px;
  color: aliceblue;
  width: 709px;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 28px;
`

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconWeatherContainer = styled.div`
  width: 290px;
  height: 74px;
  display: flex;
  gap: 168px;
`

export const IconBox = styled.div`
  display: flex;
`

export const IconWeather = styled.img``

export const Temperatur = styled.p`
  display: flex;
  justify-content: start;
  gap: 30px;
  font-size: 57px;
`
export const City = styled.p`
  font-size: 20px;
`

export const SaveDeleteButton = styled.button`
  width: 155px;
  height: 48px;
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`
export const SaveDeleteButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
`
export const WeatherErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  justify-content: center;
  align-items: center;
  width: 709px;
  height: 220px;
  background-color: rgba(47, 72, 111, 0.62);
  border-radius: 18px;
  padding: 10px;
`

export const ErrorBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`

export const ApiError = styled.h1`
  font-size: 57px;
  color: rgba(243, 94, 94, 1);
  font-family: "Inter";
  font-weight: normal;
`

export const MessageError = styled.p`
  font-size: 18px;
  color: aliceblue;
  font-family: "Inter";
`
