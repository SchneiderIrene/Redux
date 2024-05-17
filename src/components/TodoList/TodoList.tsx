import Input from 'components/Input/Input';
import {TodoListContainer} from './styles'
import Button from 'components/Button/Button';
import { ChangeEvent, useState } from 'react';

function TodoList(){

    const [task, setTask] = useState<string>('');
    




    return(
        <TodoListContainer>
           <Input 
            name='Task Input'
            placeholder='ToDo'
            onInputChange={(event: ChangeEvent<HTMLInputElement>)=>setTask(event.target.value)}
            value={task}
            />
           <Button name='ToDo' onButtonClick={()=>{}}/>
        </TodoListContainer>
    )
}

export default TodoList;