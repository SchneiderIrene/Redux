
import Button from 'components/Button/Button';
import { CounterProps } from './types'; 
import { CounterWrapper, ButtonControl, CounterResult } from './styles';





function Counter({countValue, onMinusClick, onPlusClick, disabledMinus, disabledPlus}: CounterProps) {
  

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinusClick} name="-" disabled={disabledMinus}/>
      </ButtonControl>
      <CounterResult>{countValue}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlusClick} name="+" disabled={disabledPlus}/>
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
