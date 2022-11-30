
//Inserir um numero na tela.
const insert=(num)=>{
    let valor = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = valor + num;
};
//Limpar os valores na tela.
const limpar=()=>{
    document.getElementById('resultado').innerHTML = '';
};
//Remover os valores na tela um por vez.
const apagar=()=>{
  let resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
};
//Fazer calculos.
const calcular=()=>{
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Nada para calcular"
    }
};