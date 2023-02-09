import styled from 'styled-components'

export const ToDoContent = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    max-width: 750px;
    margin: 0 auto;
`

export const TasksContainer = styled.div`
    margin-top: 4rem;
    width: 100%;
`

export const TasksCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    border-bottom: 1px solid ${({theme}) => theme.colors['gray-400']};
    padding-bottom: 24px;

    p {
        color: ${({theme}) => theme.colors.purple};

        &:first-child {
            color: ${({theme}) => theme.colors.blue};
        }
    }

`

export const TaskReplace = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: 4rem 0;

    p {
        color: ${({theme}) => theme.colors['gray-300']};

        &:nth-child(2n) {
            font-weight: bold;
            margin-top: 1rem;
        }
    }
`

