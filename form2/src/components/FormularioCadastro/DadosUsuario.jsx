import React, { useState, useContext} from 'react'

import { TextField, Button } from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'
import useErros from '../../hooks/useErros'



function DadosUsuario({aoEnviar}){
    const [ email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const validacoes = useContext(ValidacoesCadastro);


     const [erros, validarCampos, possoEnviar]= useErros(validacoes);


    

    
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField value={email} onChange={(event) => setEmail(event.target.value) }
            id="email" required label="email" type="email"variant="outlined" margin="normal" fullWidth/>
            
            <TextField onBlur={validarCampos} name="senha" error={erros.senha.valido} helperText={erros.senha.texto}
            value={senha} onChange={(event) => setSenha(event.target.value) }
            id="senha" required label="senha" type="password" variant="outlined" margin="normal" fullWidth/>
            <Button variant="contained" color="primary" type="submit" >Proximo</Button>
        </form>
    );
}

export default DadosUsuario;