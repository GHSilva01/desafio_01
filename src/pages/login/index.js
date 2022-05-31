import { Button, Container } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Credenciais para login: calendario
// Credenciais para senha: 123



function Login() {
    const [senha, setSenha] = useState('')
    const [login, setLogin] = useState('')
    const navigate = useNavigate()

    function enviarDados(event) {
        event.preventDefault();
        console.log(senha, login)

        if (senha == '123' && login == 'calendario') {
            navigate('/calendario')
        } else {
            alert('Credenciais Inválidas')
        }
    }

    return (
        <form onSubmit={enviarDados}>
            <Container>
                <input required value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Login" />
                <input required value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />

                <Button type="submit">Entrar</Button>
            </Container>
        </form>

    )

}

export default Login