import React, {useState, useEffect } from 'react';

import { Step, StepLabel, Stepper,Typography} from '@material-ui/core'
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';


function FormularioCadastro({aoEnviar}){
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [ dadosColetado, setDados] = useState({});
  
   
  const formulario = [
    <DadosUsuario aoEnviar={coletarDados}  />,
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
  ];

  useEffect(() => {
    if(etapaAtual === formulario.length - 1)
    aoEnviar(dadosColetado)
    
  })

  function coletarDados(dados){
    setDados({...dadosColetado, ...dados})
    proximo();
  }

function proximo(){
  setEtapaAtual(etapaAtual+1);
}



    return(
        <>
        <Stepper activeStep={etapaAtual}>
          <Step><StepLabel>Login</StepLabel></Step>
          <Step><StepLabel>Pessoal</StepLabel></Step>
          <Step><StepLabel>Entrega</StepLabel></Step>
          <Step><StepLabel>Finalização</StepLabel></Step>
          
        </Stepper>

        {formulario[etapaAtual]}
      </>
    );
}


export default FormularioCadastro;