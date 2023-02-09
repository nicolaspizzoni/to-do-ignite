import styled from 'styled-components'

export const HeaderContainer = styled.header`
    background-color: ${({theme}) => theme.colors['gray-700']};
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    padding: 80px 0;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
`