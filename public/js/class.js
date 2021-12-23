export class Heros {
    constructor(pv, atk) {
        this.nom = prompt(`Comment se nomme votre héros ?`);
        this.pv = pv;
        this.atk = atk
    }
    normal = () => {
        this.atk = this.atk
        this.pv = this.pv
        alert(`${this.nom} conserve sa posture normale`)
    }
    attaque = () => {
        this.atk = this.atk * 1.4
        this.pv = this.pv * 0.75
        alert(`${this.nom} adopte la posture d'attaque : son attaque passe à ${this.atk} mais ses PV passent à ${this.pv}`);
    }
    defense = () => {
        this.atk = this.atk * 0.5
        this.pv = this.pv * 2.5
        alert(`${this.nom} adopte la posture de défense : son attaque passe à ${this.atk} mais ses PV passent à ${this.pv}. ${this.nom} a 2 fois plus de chance d'être la cible`);
    }
    atkEnnemi = (target) => {
        alert(`${this.nom} attaque ${target.nom}`)
        target.pv = target.pv - this.atk
        alert(`${this.nom} inflige ${this.atk} de dégats à ${target.nom}`)
    }
}


export class Guerrier extends Heros {
    constructor(pv, atk, rage) {
        super(pv, atk)
        this.rage = rage;
    }
    atkEnnemi = (target) => {
        if (this.rage >= 4) {
            this.atk = this.atk * 1.25
            alert(`${this.nom} dispose de ${this.rage} rage et ses points d'atk passe à ${this.atk} pour le prochain tour`)
            target.pv = target.pv - this.atk
            alert(`${this.nom} inflige ${this.atk} de dégats à ${target.nom}`)
            this.rage = this.rage - 4
            alert(`${this.nom} n'a plus que ${this.rage}`)
            this.rage = this.rage + 1
            alert(`${this.nom} récupère de la rage et passe à ${this.rage} de rage`)
            this.atk = this.atk / 1.25
        } else if (this.rage < 4){
            alert(`${this.nom} ne dispose que de ${this.rage} rage`)
            target.pv = target.pv - this.atk
            alert(`${this.nom} inflige ${this.atk} de dégats à ${target.nom}`)
            this.rage = this.rage + 1
            alert(`${this.nom} récupère de la rage et passe à ${this.rage} de rage`)
        }
    }
}

export class Mage extends Heros {
    constructor(nom, pv, atk, mana) {
        super(nom, pv, atk)
        this.mana = mana;
        let rndMana = Math.floor(Math.random() * (3 - 1) + 1)
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
    atkEnnemi = (target) => {
        if (this.mana >= 2) {
            alert(`${this.nom} dispose de ${this.mana} PM et peut attaquer`)
            target.pv = target.pv - this.atk
            alert(`${this.nom} inflige ${this.atk} de dégats à ${target.nom}`)
        } else if (this.mana < 2){
            alert(`${this.nom} ne dispose que de ${this.mana} PM et ne peut pas attaquer`)
            this.mana = this.mana + 7
            alert(`${this.nom} récupère du mana et passe à ${this.mana} PM`)
        }     
    }
}


export class Archer extends Heros {
    constructor(pv, atk, fleches) {
        super(pv, atk)
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
    atkEnnemi = (target) => {
        if (this.fleches >= 2) {
            alert(`${this.nom} dispose de ${this.fleches} fleches et peut attaquer`)
            target.pv = target.pv - this.atk
            alert(`${this.nom} inflige ${this.atk} de dégats à ${target.nom}`)
        } else if (this.fleches < 2){
            alert(`${this.nom} ne dispose que de ${this.fleches} fleches et ne peut pas attaquer`)
            this.fleches = this.fleches + 6
            alert(`${this.nom} récupère des flèches et passe à ${this.fleches} PM`)
        }
    }
}




export class Boss {
    constructor(nom, pv, atk) {
        this.nom = nom;
        this.pv = pv;
        this.atk = atk;
    }
    atkHeros = (cible) => {
        alert(`${this.nom} attaque ${cible.nom} et lui inflige ${this.atk} points de dégâts`)
        cible.pv = cible.pv - this.atk
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
                if (answ2 != enigme2) {
                    alert(`Vous êtes tous mort. ${this.nom} vous a vaincu !`)
                } else if (answ2 == enigme2) {
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
                if (answ3 != enigme3) {
                    alert(`Vous êtes tous mort. ${this.nom} vous a vaincu !`)
                } else if (answ3 == enigme3) {
                    alert(`Vous avez triomphé de ${this.nom} !`)
                }
                break;
        }
    }
}
