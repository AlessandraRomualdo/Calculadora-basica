

const insert=(num)=>{
    let valor = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = valor + num;
};

const limpar=()=>{
    document.getElementById('resultado').innerHTML = '';
};
const apagar=()=>{
  let resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
};
const calcular=()=>{
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }else{
        document.getElementById('resultado').innerHTML = "Nada para calcular"
    }
};