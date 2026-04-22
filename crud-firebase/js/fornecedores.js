const ref = eb.ref("fornecedores");

$("#salvar").click( function (){
    let nome = $("#nome").val();
    let email = $("#email").val();
    let cnpj = $("#cnpj").val();
    let estado = $("#estado").val();

    if(nome === "" || email ==="" || cnpj ==="" || estado ==="")
    {
        alert('Prencha todos os campos');
        return;
    }
        ref.push({nome, email, cnpj, estado});
        limpar();
    });

    function limpar()
    {
        $("#nome").val("");
        $("#email").val("");
        $("#cnpj").val("");
        $("input[name='estado']").prop("checked", false);        
        $("#nome").focus("");
    }
