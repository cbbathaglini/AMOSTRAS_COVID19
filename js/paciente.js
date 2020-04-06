/*
 *  Author: Carine Bertagnolli Bathaglini
 */

function validaNome(){
     
    var strTipo = document.getElementById("idNome");
    //var tipoAmostra = '<?=$objTipoAmostra->getTipo() ?>';
    var div_feedback = document.getElementById("feedback_nome");
    
    if(strTipo.value.length == 0 || strTipo.value.length > 130 ){ // não digitou nada
        strTipo.classList.add("is-invalid");
        if(strTipo.classList.contains("is-valid")) strTipo.classList.remove("is-valid");
        if(div_feedback.classList.contains("valid-feedback"))
            div_feedback.classList.remove("valid-feedback");
        div_feedback.classList.add("invalid-feedback");
        if(strTipo.value.length == 0 )div_feedback.innerHTML = " Digite um nome. ";
        if(strTipo.value.length > 130 )div_feedback.innerHTML = " Digite um nome com menos 130 caracteres. ";
    }
    else if(strTipo.value.length > 0){
         strTipo.classList.add("is-valid");
        if(strTipo.classList.contains("is-invalid")) strTipo.classList.remove("is-invalid");
        if(div_feedback.classList.contains("invalid-feedback"))
            div_feedback.classList.remove("invalid-feedback");
        div_feedback.classList.add("valid-feedback");
        div_feedback.innerHTML = " Tudo certo. ";
    }
    
}

function validaNomeMae(){
    
    
     
    var strTipo = document.getElementById("idNomeMae");
    //var tipoAmostra = '<?=$objTipoAmostra->getTipo() ?>';
    var div_feedback = document.getElementById("feedback_nomeMae");
    var x = document.getElementById("id_desaparecer_aparecerObsNomeMae");
    
    if(strTipo.value.length == 0 || strTipo.value.length > 130 ){ // não digitou nada
        strTipo.classList.add("is-invalid");
        if(strTipo.classList.contains("is-valid")) strTipo.classList.remove("is-valid");
        if(div_feedback.classList.contains("valid-feedback"))
            div_feedback.classList.remove("valid-feedback");
        div_feedback.classList.add("invalid-feedback");
        if(strTipo.value.length == 0 ){
            div_feedback.innerHTML = " Informe um motivo. ";
            //var div_display = document.getElementById("id_desaparecer_aparecer");
            
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
             
            //else
            //  document.getElementById('id_desaparecer_aparecer').style.display = 'none';
            
        }
        if(strTipo.value.length > 130 ) div_feedback.innerHTML = " Digite o nome da mãe com menos 130 caracteres. ";
    }
    else if(strTipo.value.length > 0){
        x.style.display = "none";
         strTipo.classList.add("is-valid");
        if(strTipo.classList.contains("is-invalid")) strTipo.classList.remove("is-invalid");
        if(div_feedback.classList.contains("invalid-feedback"))
            div_feedback.classList.remove("invalid-feedback");
        div_feedback.classList.add("valid-feedback");
        div_feedback.innerHTML = " Tudo certo. ";
    }
    
}

function validaDataNascimento(){
     
    var strTipo = document.getElementById("idDtNascimetno");
    //var tipoAmostra = '<?=$objTipoAmostra->getTipo() ?>';
    var div_feedback = document.getElementById("feedback_dtNascimento");
    
    
    if(strTipo.value.length == 0 ){ // não digitou nada
        strTipo.classList.add("is-invalid");
        if(strTipo.classList.contains("is-valid")) strTipo.classList.remove("is-valid");
        if(div_feedback.classList.contains("valid-feedback"))
            div_feedback.classList.remove("valid-feedback");
        div_feedback.classList.add("invalid-feedback");
        div_feedback.innerHTML = " Informe a data de nascimento. ";
        
    }
    else if(strTipo.value.length > 0){
         strTipo.classList.add("is-valid");
        if(strTipo.classList.contains("is-invalid")) strTipo.classList.remove("is-invalid");
        if(div_feedback.classList.contains("invalid-feedback"))
            div_feedback.classList.remove("invalid-feedback");
        div_feedback.classList.add("valid-feedback");
        div_feedback.innerHTML = " Tudo certo. ";
    }
    
}

function validaSexo(){
     
    var strTipo = document.getElementById("idSexo");
    //var tipoAmostra = '<?=$objTipoAmostra->getTipo() ?>';
    var div_feedback = document.getElementById("feedback_sexo");
    var x = document.getElementById("id_desaparecer_aparecerObsSexo");
    
    if(strTipo.value.length == 0 || strTipo.value.length > 150 ){ // não digitou nada
        strTipo.classList.add("is-invalid");
        if(strTipo.classList.contains("is-valid")) strTipo.classList.remove("is-valid");
        if(div_feedback.classList.contains("valid-feedback"))
            div_feedback.classList.remove("valid-feedback");
        div_feedback.classList.add("invalid-feedback");
        if(strTipo.value.length == 0 ){
            div_feedback.innerHTML = " Informe um motivo. ";
            //var div_display = document.getElementById("id_desaparecer_aparecer");
            
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        }
        
    }
    else if(strTipo.value.length > 0){
        x.style.display = "none";
         strTipo.classList.add("is-valid");
        if(strTipo.classList.contains("is-invalid")) strTipo.classList.remove("is-invalid");
        if(div_feedback.classList.contains("invalid-feedback"))
            div_feedback.classList.remove("invalid-feedback");
        div_feedback.classList.add("valid-feedback");
        div_feedback.innerHTML = " Tudo certo. ";
    }
    
}

