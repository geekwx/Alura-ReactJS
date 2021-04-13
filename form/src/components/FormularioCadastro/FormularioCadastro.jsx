import React from 'react';

import {TextField, Button, Switch, FormControlLabel} from '@material-ui/core'


function FormularioCadastro(){
    let nome = "";
    return(
        <form onSubmit={(event) => { 
            event.preventDefault();
            console.log(nome)}}>

            <TextField  onChange={ event => { 
                nome = event.target.value
            }}
            id="nome" label="Nome" variant="outlined" margin="normal" fullWidth/>
            <TextField id="sobrenome"  label="Sobrenome" variant="outlined" margin="normal" fullWidth/>
            <TextField id="cpf" label="CPF"variant="outlined" margin="normal" fullWidth/>


            <FormControlLabel label="Promoções" control={<Switch name="promocoes" defaultChecked={true} color="primary" />}/>
            
            
            <FormControlLabel label="Novidades" control={<Switch name="novidades" defaultChecked={true} color="primary" />}/>
            
            

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
            

        </form>
    );
}

export default FormularioCadastro;