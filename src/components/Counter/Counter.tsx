
import Button from 'components/Button/Button';
import { CounterWrapper, ButtonControl, CounterResult } from './styles';
import { useState } from 'react';





function Counter() {
  
  const [value, setValue] = useState<number>(0);

const onMinusClick =  ()=>{
    setValue(prevValue => parseFloat((prevValue-1).toFixed(2)))
};

const onPlusClick =  ()=>{
  setValue(prevValue => parseFloat((prevValue+1).toFixed(2)))
};

const onMultyplyClick =  ()=>{
    setValue(prevValue => parseFloat((prevValue*2).toFixed(2)))
}

const onDivideClick =  ()=>{
  setValue(prevValue => parseFloat((prevValue/2).toFixed(2)));
}

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinusClick} name="-"/>
        <Button onButtonClick={onDivideClick} name="/"/>
      </ButtonControl>
      <CounterResult>{value}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlusClick} name="+" />
        <Button onButtonClick={onMultyplyClick} name="*" />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
