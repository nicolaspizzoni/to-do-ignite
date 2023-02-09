import styled from 'styled-components'

export const NewTaskContent = styled.div`
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    width: 100%;
    margin-top: -27px;
`

export const NewTaskInput = styled.input`
    background-color: ${({ theme }) => theme.colors['gray-500']};
    border-radius: 8px;
    padding: 16px;
    width: 100%;
    border: 0;

    ::placeholder {
        color: ${({ theme }) => theme.colors['gray-300']}
    };
`

export const NewTaskButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors['blue-dark']};
    padding: 16px;
    gap: 0.5rem;
    border: 0;
    transition: background-color 0.8s;
    cursor: pointer;

    &:hover{
        background-color: ${({ theme }) => theme.colors.blue};
        transition: background-color 0.8s;
    }
`