$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${tarefa}</li>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $("li").click(function(){
            $(this).css('text-decoration', 'line-through' )
        })
        $('#tarefa').val('');
    })
})