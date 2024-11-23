import { styled } from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.purple};
    height: calc(100vh - 84px);
    margin: 41px 0px;
    border-radius: 16px;
`;

export const LoginTitle = styled.p`
    font-size: 2rem;
    color: ${(props) => props.theme.white};
    margin-bottom: 16px;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 500px;
    padding: 30px;
    background-color: white;
    border-radius: 16px;
`;

export const ButtonContainer = styled.div`
    width: 100%;
    max-width: 500px;

    & button 
    {
        width: 100%;
        padding: 10px;
        background-color: ${(props) => props.theme.purple};
        color: none;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }   
`;