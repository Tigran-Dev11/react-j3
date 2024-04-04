import { useRef, useState } from "react";
import * as S from "./styled";
import { IMAGES } from "../../assets/images";

const ToDoCard = (props) => {
  const { item, onRemove, updateTodo, complated,isChecked,handleToggleChecked  } = props;
  const inputRef = useRef(null);
  const [editValue, setEditValue] = useState(item.item); // State to manage the value of the input field
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode

  const handleRemove = () => {
    onRemove(item.id);
  };

  const changeFocus = () => {
    setIsEditing(!isEditing);
  };


  const handleEdit = (id, value, e) => {
    if (e.which === "Enter") {
      updateTodo({ id, item: editValue });
      setIsEditing(false);
    }
  };

  const handleSave = () => {
    complated(item);
    setIsEditing(false);
  };

  return (
    <S.TodoItem key={item.id}>
          <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleToggleChecked(item.id)}
    
        />
      {isEditing ? (
        <>
 
          <S.Input
            type="text"
            ref={inputRef}
            onKeyPress={(e) => handleEdit(item.id, editValue, e)}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <S.Button onClick={handleSave}>
            <S.Img src={IMAGES.saveIcon} alt="saveIcon"></S.Img>
          </S.Button>
        </>
      ) : (
        <>
          <S.TodoTitile>{item.item}</S.TodoTitile>
          <S.Button onClick={changeFocus}>
            <S.Img src={IMAGES.editIcon} alt="editIcon" />
          </S.Button>
          <S.Button onClick={handleRemove}>
            <S.Img src={IMAGES.removeIcon} alt="removeIcon" />
          </S.Button>
        </>
      )}
    </S.TodoItem>
  );
};

export default ToDoCard;
