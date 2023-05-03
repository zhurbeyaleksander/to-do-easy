
interface AddToDoItemProps {
    value: string;
    handleChangeText: (str: string) => void;
    addToDo: () => void;
    // handleKeyDown: () => void;
}



const InputToDoText: React.FC<AddToDoItemProps> = (props) => {
    // const inputRef = useRef(null)
    const { value, handleChangeText, addToDo } = props;
    return (
        <div>
            <input value={value} onChange={(e) => handleChangeText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') addToDo();
                }} />
            <button onClick={addToDo}>Add Task</button>
        </div>
    );
};

export default InputToDoText;