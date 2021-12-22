export class Boss {
    constructor(nom, pv, atk) {
        this.nom = nom;
        this.pv = pv;
        this.atk = atk;
    }
    enigme = () => {
        let enigmeCase = Math.floor(Math.random() * 3)
        console.log(`${this.nom} vous pose une énigme...`)
        switch (enigmeCase) {
            case 1:
                let enigme = prompt("Elles sont jumelles, fragiles comme des ailes de papillons pourtant, elles peuvent effacer le monde. Qui sont-elles?")
                let answ = "les paupières"
                let nbTry = 1
                while (nbTry < 3 && answ != enigme) {
                    enigme = prompt(`Vous vous êtes trompés pour l'essai ${nbTry}. Retentez !`)
                    if (nbTry > 3 && answ != enigme) {
                        alert(`Vous êtes tous mort. ${this.nom} vous a vaincu !`)
                    } else if (nbTry <= 3 && answ == enigme) {
                        alert(`Vous avez triomphé de ${this.nom} !`)
                    }
                    nbTry = nbTry + 1
                }
                break;
            case 2:
                let enigme2 = prompt("Quelle est la couleur du cheval blanc de Napoléon ?")
                let answ2 = "blanc"
                let nbTry2 = 1
                while (nbTry2 < 3 && answ2 != enigme2) {
                    enigme2 = prompt(`Vous vous êtes trompés pour l'essai ${nbTry2}. Retentez !`)
                    if (nbTry2 > 3 && answ2 != enigme2) {
                        alert(`Vous êtes tous mort. ${this.nom} vous a vaincu !`)
                    } else if (nbTry2 <= 3 && answ2 == enigme2) {
                        alert(`Vous avez triomphé de ${this.nom} !`)
                    }
                    nbTry2 = nbTry2 + 1
                }
                break;
            case 3:
                let enigme3 = prompt("Mon 1er est une voiture anglaise, mon 2nd est chaud comme un anglais et mon tout est un légume. Qui suis-je")
                let answ3 = "carotte"
                let nbTry3 = 1
                while (nbTry3 < 3 && answ3 != enigme3) {
                    enigme3 = prompt(`Vous vous êtes trompés pour l'essai ${nbTry3}. Retentez !`)
                    if (nbTry3 > 3 && answ3 != enigme3) {
                        alert(`Vous êtes tous mort. ${this.nom} vous a vaincu !`)
                    } else if (nbTry3 <= 3 && answ3 == enigme3) {
                        alert(`Vous avez triomphé de ${this.nom} !`)
                    }
                    nbTry3 = nbTry3 + 1
                }
                break;
        }
    }
}
