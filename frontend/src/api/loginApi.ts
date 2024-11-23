interface loginApiProps
{
    email: string;
    password: string;
}

export async function loginApi({email, password}: loginApiProps)
{
    console.log(email, password)
    return {
        nome: "Anderson Battisti",
        email: "anderson.battisti@universo.univates.br",
        password: "teste"
    }
}