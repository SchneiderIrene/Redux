
import Button from 'components/Button/Button';
import { CounterWrapper, ButtonControl, CounterResult } from './styles';
import { useState } from 'react';





function Counter() {
  
  const [value, setValue] = useState<number>(0);

const onMinusClick =  ()=>{
    setValue(prevValue => Number((prevValue-1).toFixed(2)))
};

const onPlusClick =  ()=>{
  setValue(prevValue => Number((prevValue+1).toFixed(2)))
};

const onMultyplyClick =  ()=>{
    setValue(prevValue => Number((prevValue*2).toFixed(2)))
}

const onDivideClick =  ()=>{
  setValue(prevValue => Number((prevValue/2).toFixed(2)));
}

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinusClick} name="-"/>
        <Button onButtonClick={onDivideClick} name="/2"/>
      </ButtonControl>
      <CounterResult>{value}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlusClick} name="+" />
        <Button onButtonClick={onMultyplyClick} name="*2" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
