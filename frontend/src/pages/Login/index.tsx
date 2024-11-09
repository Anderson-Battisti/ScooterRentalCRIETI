export function Login()
{
    return (
        <LoginContainer>
            <LoginTitle>Faça seu login na aplicação</LoginTitle>
            <FormContainer>
                <InputContainer>
                    <label  htmlFor="email"><label />
                    <input type="senha" id="email" />
                </InputContainer>
                <ButtonContainer>
                    <button>Entrar</button>
                </ButtonContainer>
            </FormContainer>
        </LoginContainer>
    );
}