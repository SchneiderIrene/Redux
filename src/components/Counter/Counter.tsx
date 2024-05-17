
import Button from 'components/Button/Button';
import { CounterWrapper, ButtonControl, CounterResult } from './styles';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { counterSliceSelectors, counterSliceActions } from 'store/redux/counter/counterSlice';





function Counter() {

  // Вариант контроля компонента через redux
  //8. Забираем значение count из стора

const count = useAppSelector(counterSliceSelectors.count);

//9. Создать функцию dispatch, которая диспачить экшен
const dispatch = useAppDispatch();


//10. Создаём функции, которые будут диспатчить определённые экшены в
  // ответ на действия эшен криэйтеров (кнопок)
const onPlus = ()=>{
  dispatch(counterSliceActions.add())
}

const onMinus = ()=>{
  dispatch(counterSliceActions.minus())
}

const onDivide = ()=>{
  dispatch(counterSliceActions.divide())
}
const multiValue = 5;

const onMultiply = ()=>{
  dispatch(counterSliceActions.multiply(multiValue))
}

  
//   const [value, setValue] = useState<number>(0);

// const onMinusClick =  ()=>{
//     setValue(prevValue => Number((prevValue-1).toFixed(2)))
// };

// const onPlusClick =  ()=>{
//   setValue(prevValue => Number((prevValue+1).toFixed(2)))
// };

// const onMultyplyClick =  ()=>{
//     setValue(prevValue => Number((prevValue*2).toFixed(2)))
// }

// const onDivideClick =  ()=>{
//   setValue(prevValue => Number((prevValue/2).toFixed(2)));
// }

  return (
    <CounterWrapper>
      <ButtonControl>
        <Button onButtonClick={onMinus} name="-"/>
        <Button onButtonClick={onDivide} name="/"/>
      </ButtonControl>
      <CounterResult>{count}</CounterResult>
      <ButtonControl>
        <Button onButtonClick={onPlus} name="+" />
        <Button onButtonClick={onMultiply} name={`* ${multiValue}`} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
