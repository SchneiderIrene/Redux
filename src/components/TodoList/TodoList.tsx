import Input from 'components/Input/Input';
import {TodoListContainer, TaskContainer} from './styles'
import Button from 'components/Button/Button';
import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { todoListSliceActions, todoListSliceSelectors } from 'store/redux/todoSlice/todoSlice';
import { v4 } from 'uuid';

function TodoList(){

    const [task, setTask] = useState<string>('');
    const dispatch = useAppDispatch();
    const taskArray = useAppSelector(todoListSliceSelectors.todoList)

    
    const onClick = ()=>{
       dispatch(todoListSliceActions.addTask(task))
       setTask('');
    }

    const tasksMap = taskArray.map(task => {
        return <div key={v4()}>{task}</div>
    })

    return(
        <TodoListContainer>
           <Input 
            name='Task Input'
            placeholder='ToDo'
            onInputChange={(event: ChangeEvent<HTMLInputElement>)=>setTask(event.target.value)}
            value={task}
            />
           <Button name='ToDo' onButtonClick={onClick}/>
           <TaskContainer>{tasksMap}</TaskContainer>
        </TodoListContainer>
    )
}

export default TodoList;