export class Heros {
    constructor(pv, atk){
        this.nom = prompt(`Comment se nomme votre héros ?`);
        this.pv = pv;
        this.atk = atk
    }
    normal = () => {
        this.atk = this.atk
        this.pv = this.pv
    }
    attaque = () => {
        this.atk = this.atk * 1.4
        this.pv = this.pv * 0.75
        console.log(`${this.nom} adopte la posture d'attaque : son attaque passe à ${this.atk} mais ses PV passent à ${this.pv}`);
    }
    defense = () => {
        this.atk = this.atk * 0.5
        this.pv = this.pv * 2.5
    }
}


export class Guerrier extends Heros {
    constructor(nom, pv, atk, rage){
        super(nom, pv, atk)
        this.rage = rage;
    }
    rageActivated = () => {

    }
}

export class Mage extends Heros {
    constructor(nom, pv, atk, mana){
        super(nom, pv, atk)
        this.mana = mana;
        let rndMana = Math.floor(Math.random() * 3)
        switch (rndMana) {
            case 1:
                this.mana = 7
                break;
            case 2:
                this.mana = 9
                break;
            case 3:
                this.mana = 11
        }
    }
    atkSansMana = () => {

    }
}


export class Archer extends Heros {
    constructor(nom, pv, atk, fleches){
        super(nom, pv, atk)
        this.fleches = fleches;
        let rndfleches = Math.floor(Math.random() * 5)
        switch (rndfleches) {
            case 1:
                this.fleches = 7
                break;
            case 2:
                this.fleches = 8
                break;
            case 3:
                this.fleches = 9
                break;
            case 4:
                this.fleches = 10
                break;
            case 5:
                this.fleches = 11
                break;
        }
    }
    atk2fleches = () => {
        
    }
}




export class Boss {
    constructor(nom, pv, atk) {
        this.nom = nom;
        this.pv = pv;
        this.atk = atk;
    }
    enigme = () => {
        let enigmeCase = Math.floor(Math.random() * (3 - 1) + 1)
        alert(`${this.nom} vous pose une énigme... la numéro : ${enigmeCase}`)

        switch (enigmeCase) {
            case 1:
                let enigme = prompt("Elles sont jumelles, fragiles comme des ailes de papillons pourtant, elles peuvent effacer le monde. Qui sont-elles?")
                let answ = "les paupières"
                let nbTry = 1
                while (nbTry < 3 && answ != enigme) {
                    enigme = prompt(`Vous vous êtes trompés pour l'essai ${nbTry}. Retentez !`)
                    nbTry = nbTry + 1
                }
                if (answ != enigme) {
                    alert(`Vous êtes tous mort. ${this.nom} vous a vaincu !`)
                } else if (answ == enigme) {
                    alert(`Vous avez triomphé de ${this.nom} !`)
                }
                break;
            case 2:
                let enigme2 = prompt("Quelle est la couleur du cheval blanc de Napoléon ?")
                let answ2 = "blanc"
                let nbTry2 = 1
                while (nbTry2 < 3 && answ2 != enigme2) {
                    enigme2 = prompt(`Vous vous êtes trompés pour l'essai ${nbTry2}. Retentez !`)
                    nbTry2 = nbTry2 + 1
                }
                if (nbTry2 > 3 && answ2 != enigme2) {
                    alert(`Vous êtes tous mort. ${this.nom} vous a vaincu !`)
                } else if (nbTry2 <= 3 && answ2 == enigme2) {
                    alert(`Vous avez triomphé de ${this.nom} !`)
                }
                break;
            case 3:
                let enigme3 = prompt("Mon 1er est une voiture anglaise, mon 2nd est chaud comme un anglais et mon tout est un légume. Qui suis-je")
                let answ3 = "carotte"
                let nbTry3 = 1
                while (nbTry3 < 3 && answ3 != enigme3) {
                    enigme3 = prompt(`Vous vous êtes trompés pour l'essai ${nbTry3}. Retentez !`)
                    nbTry3 = nbTry3 + 1
                }
                if (nbTry3 > 3 && answ3 != enigme3) {
                    alert(`Vous êtes tous mort. ${this.nom} vous a vaincu !`)
                } else if (nbTry3 <= 3 && answ3 == enigme3) {
                    alert(`Vous avez triomphé de ${this.nom} !`)
                }
                break;
        }
    }
}
