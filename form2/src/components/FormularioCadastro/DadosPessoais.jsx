import React, {useState, useContext} from 'react';

import {TextField, Button, Switch, FormControlLabel} from '@material-ui/core'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosPessoais({aoEnviar}){
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(true)
    const validacoes = useContext(ValidacoesCadastro);


    const [erros, validarCampos, possoEnviar]= useErros(validacoes);

   
    return(
        <form onSubmit={(event) => { 
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
            }
            }}>

            <TextField required value={nome} name="nome" onBlur={validarCampos} error={erros.nome.valido} helperText={erros.nome.texto}
             onChange={ event => { 
                setNome(event.target.value);
            }}
            id="nome" label="Nome" variant="outlined" margin="normal" fullWidth/>
            
            <TextField required value={sobrenome} onChange={ event => { 
                setSobrenome(event.target.value);
                
            }}
            id="sobrenome"  label="Sobrenome" variant="outlined" margin="normal" fullWidth/>
            
            <TextField required value={cpf} name="cpf" onChange={ event => { 
                setCpf(event.target.value);
            }}
            onBlur={validarCampos}
            error={erros.cpf.valido} helperText={erros.cpf.texto}
            id="cpf" label="CPF"variant="outlined" margin="normal" fullWidth/>


            <FormControlLabel label="Promoções" control={<Switch checked={promocoes} onChange={(event) => { setPromocoes(event.target.checked)} } name="promocoes"  color="primary" />}/>
            
            
            <FormControlLabel label="Novidades" control={<Switch checked={novidades} onChange={(event) => { setNovidades(event.target.checked)}} name="novidades"  color="primary" />}/>
            
            

            <Button type="submit" variant="contained" color="primary">Proximo</Button>
            

        </form>
    );
}

export default DadosPessoais;