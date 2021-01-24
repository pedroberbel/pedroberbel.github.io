ID_SAUDACAO = "cumprimento"
ID_TEXTOAPP = "apresentacao"
ID_COFFEELOAD = "coffeeLoading"



class CumprimentosComponent {
    constructor(){
        this.iniciarTela()
    }

    refreshImage({elementoCoffeeLoading, }) {

    }
    coffeeLoading() {

        const imgPath = "./imagens/coffee-loading/"
        const elementoCoffeeLoading = document.getElementById(ID_COFFEELOAD)

        let image = (imgPath+ "coffe-loading1.png")

        


        elementoCoffeeLoading.innerHTML = ('<img src=\"'+image+'\" width=\"248px\" height=\"204.5px\">')


    }

    cumprimentos() {
        const elementoCumprimento = document.getElementById(ID_SAUDACAO)
        const elementoApresentacao = document.getElementById(ID_TEXTOAPP)
        let data = new Date()
        let hora = data.getHours()
        let cumprimento = ''

        if (hora < 6){
            cumprimento = 'Boa noite,'
        } else if (hora < 12) {
            cumprimento = 'Bom dia,'
        } else if (hora < 18) {
            cumprimento = 'Boa tarde,'
        } else {
            cumprimento = 'Boa noite,'
        }

        elementoCumprimento.innerHTML = cumprimento

        let textoApp = ''
        elementoApresentacao.innerHTML = textoApp
    }

    iniciarTela(){
        console.log('Bem vindo ao console!')
        console.log('Esta página foi desenvolvida e idealizada por mim, Pedro Berbel. Conheça meu gitHub: https://github.com/pedroberbel')
        console.log('Ao longo de 2021, enviarei diversos novos projetos!')
        this.cumprimentos()
        this.coffeeLoading()
    }



}