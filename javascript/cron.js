  //primeiro passo, criar as variáveis
  let segundos = 0;
  let minutos = 0;
  let horas = 0;
  let settingTime; 

  //criando a função que vai interpretar que um minuto são 60 segundos e por ai vai

  function interpretador(){

      segundos = segundos + 1;
      if(segundos >=60){
          segundos = 0;
          minutos = minutos + 1;
          if (minutos >= 60){
              minutos = 0;
              horas = horas + 1;
          }
      }

  //mexendo no timer e configurando a string 00:00:00
  document.getElementById("timer").innerHTML = 
  (horas ? (horas > 9 ? horas : "0" + horas) : "00")
  + ":" +
  (minutos ? (minutos > 9 ? minutos : "0" + minutos) : "00")
  + ":" +
  (segundos > 9 ? segundos : "0" + segundos);

  timer()
  }

  //definindo as funções 

  function timer(){
      settingTime = setTimeout(interpretador, 1000);
  }
  // Iniciar o cronometro
  function start(){
      timer();
  }

  // Parar o cronometro
  function pause(){
      clearTimeout(settingTime);
  }

  //resetar o cronometro
  function reset(){
      document.getElementById("timer").innerHTML = "00:00:00";
      segundos = 0;
      minutos = 0;
      horas = 0;
  }

