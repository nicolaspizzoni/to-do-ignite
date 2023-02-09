import { NewTaskButton, NewTaskContent, NewTaskInput } from "./styles";
import Add from '../../assets/plus.svg'

export function NewTask(){
    return (
        <NewTaskContent>
            <NewTaskInput
                placeholder="Adicione uma nova tarefa"
            />
            <NewTaskButton
                onClick={() => console.log("Cliquei")}
            >
                Criar
                <img src={Add} alt="" />
            </NewTaskButton>
        </NewTaskContent>
    )
}