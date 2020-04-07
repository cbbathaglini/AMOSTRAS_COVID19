/*
 *  Author: Carine Bertagnolli Bathaglini
 */

function validaTipoAmostra(){
     
    var strTipo = document.getElementById("idTipoAmostra");
    //var tipoAmostra = '<?=$objTipoAmostra->getTipo() ?>';
    
    var div_feedback = document.getElementById("feedback_tipoAmostra");
    //console.log(strTipo.value); 
       
    if(strTipo.value.length == 0 || strTipo.value.length > 50 ){ // não digitou nada
        strTipo.classList.add("is-invalid");
        if(strTipo.classList.contains("is-valid")) strTipo.classList.remove("is-valid");
        if(div_feedback.classList.contains("valid-feedback"))
            div_feedback.classList.remove("valid-feedback");
        div_feedback.classList.add("invalid-feedback");
        div_feedback.innerHTML = "";
        if(strTipo.value.length == 0 )div_feedback.innerHTML = " Digite um tipo de amostra. ";
        if(strTipo.value.length > 50 )div_feedback.innerHTML = " Digite um tipo de amostra com menos de 50 caracteres. ";
    }
    else if(strTipo.value.length > 0){
         strTipo.classList.add("is-valid");
        if(strTipo.classList.contains("is-invalid")) strTipo.classList.remove("is-invalid");
        if(div_feedback.classList.contains("invalid-feedback"))
            div_feedback.classList.remove("invalid-feedback");
        div_feedback.classList.add("valid-feedback");
        div_feedback.innerHTML = "";
        div_feedback.innerHTML = " Tudo certo. ";
    }
    
}
