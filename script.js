const $btn_adc = document.getElementById("adc-tarefa");
const $add_txt_tarefa = document.getElementById("input-tarefa");
const $tarefas = document.getElementById("tarefas");
var id = 0;

$add_txt_tarefa.focus();

$btn_adc.addEventListener("click", function controle(infos_event)
{
    infos_event.preventDefault();
    adctarefa();    
});

$add_txt_tarefa.addEventListener("keypress", function controle(infos_event)
{
    infos_event.preventDefault();
    if (infos_event.key === "Enter") {        
        adctarefa();
    }
    else if($add_txt_tarefa.value.length < 100)
    {
        $add_txt_tarefa.value += infos_event.key;
    }
});

$tarefas.addEventListener("click",(infos_event) =>
{
    
    $click = infos_event.target;
    /* console.log($click.value);    */
    
    if ($click.value == "on")
    {
        if ($click.hasAttribute("checked"))
        {
            $click.removeAttribute("checked", "checked");
            $click.parentNode.classList.remove("tarefa-concluida");

            /* console.log($click); */
            /* console.log($click.parentNode.outerHTML); */

            $tarefas.insertAdjacentHTML("afterbegin", $click.parentNode.outerHTML);
            $click.parentNode.outerHTML = "";
        }
        else
        {
            $click.setAttribute("checked", "checked");
            $click.parentNode.classList.add("tarefa-concluida");
            
            /* console.log($click); */
            /* console.log($click.parentNode.outerHTML); */
            
            $tarefas.insertAdjacentHTML("beforeend", $click.parentNode.outerHTML);
            $click.parentNode.outerHTML = "";
        }
    }
    else if ($click.value == "Excluir")
    {
        $click.parentNode.outerHTML = "";
    }
})

function adctarefa()
{
    if ($add_txt_tarefa.value !== "") {
        txt = $add_txt_tarefa.value;
        $add_txt_tarefa.value = "";
        id ++;

        /* console.log("Valor do input: " + txt); */

        $tarefas.insertAdjacentHTML("afterbegin", `<div class="tarefas-list" id="`+id+`">
        <input type="checkbox" class="tarefa-concluida">
        <label for="tarefa-concluida" class="tarefa-text">`+txt+`</label>
        <input type="button" value="Excluir" class="excluir-tarefa">
    </div>`);

        console.info($tarefas);
    }
}