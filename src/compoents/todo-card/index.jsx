import { useState } from "react";
import * as S from "./styled";
import { IMAGES } from "../../assets/images";
import { useDispatch } from "react-redux";
import { todoActions } from "../../libs/redux/to-do-list/todo-slice";

const ToDoCard = (props) => {
  const { id, name, status } = props;
  const [activeEditTodo, setActiveEditTodo] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(name);
  const dispatch = useDispatch();

  const deleteTodo = () => {
    dispatch(todoActions.removeTodo(id));
  };

  const changeStatus = (checked) => {
    dispatch(todoActions.changeStatus({ checked, id }));
  };

  const editTodo = ({ id, name }) => {
    setActiveEditTodo({
      [id]: name
    });
    setUpdatedTodo(name);
  };

  const saveTodo = (id) => {
    dispatch(todoActions.editTodo({ id, name: updatedTodo }));
    setActiveEditTodo();
    setUpdatedTodo("");
  };
  

  return (
    <S.TodoItem key={id}>
      <input
        type="checkbox"
        checked={status}
        onChange={(e) => changeStatus(e.target.checked,id)}
      />
      {activeEditTodo?.[id]? (
        <>
          <S.Input
            type="text"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
          />
          
        </>
      ) : (
        <S.TodoTitile>{name}</S.TodoTitile>
      )}
        
        {activeEditTodo?.[id] ? (
          <S.Button onClick={()=>saveTodo(id)}>
            <S.Img src={IMAGES.saveIcon} alt="saveIcon" />
          </S.Button>
        
          ) : (
           
          <S.Button onClick={()=>editTodo({id,name})}>
            <S.Img src={IMAGES.editIcon} alt="editIcon" />
          </S.Button>
            )}
          <S.Button onClick={()=>deleteTodo(id)}>
            <S.Img src={IMAGES.removeIcon} alt="removeIcon" />
          </S.Button>

    
    </S.TodoItem>
  );
};

export default ToDoCard;
