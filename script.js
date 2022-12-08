
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");

//verificando se os ítens existem na página específica pra não ocorrer erros
// Só vai ocorrer se for verdadeiro, se existirem esses ítens na página
if(tabMenu.length && tabContent.length){

    tabContent[0].classList.add("ativo"); //ativando o primeiro elemento, para iniciar com texto


    function activeTab(index) { // O índex da tab que quero ativar nas sections do HTML
        tabContent.forEach((section) => { //percorrendo todas as sections
            section.classList.remove("ativo"); //removendo a classe ativo de todas
        });

    tabContent[index].classList.add("ativo"); //adicionando a classe na section
        
    };

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener("click", () => { // uma função que vai executar outra função
            activeTab(index);
        }); //chamando a função ActiveTab no callcbak
        // e passando o index da img, que será o mesmo index do conteúdo 
    });

}   