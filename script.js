function inserir(numero){
    document.form.resultado.value = document.form.resultado.value + numero;
}
 
function igual(){
    let numero = document.form.resultado.value;
    if(numero){
        document.form.resultado.value = eval(numero);
    }
}

function c(){
    document.form.resultado.value = "";
}
 
function apagar(){
    let numero = document.form.resultado.value;
    document.form.resultado.value = numero.substring(0, numero.length-1);
}