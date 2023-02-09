import { Header } from "../../components/Header";
import { NewTask } from "../../components/NewTask";
import { TaskReplace, TasksContainer, TasksCount, ToDoContent } from "./styles";
import Clipboard from '../../assets/clipboard.svg';

export function ToDo() {
    return (
        <div>
            <Header />
            <ToDoContent>
                <NewTask />
                <TasksContainer>
                    <TasksCount>
                        <p>Tarefas criadas</p>
                        <p>Concluídas</p>
                    </TasksCount>
                    <TaskReplace>
                        <img src={Clipboard} alt="" />
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </TaskReplace>
                </TasksContainer>
            </ToDoContent>
        </div>
    )
}