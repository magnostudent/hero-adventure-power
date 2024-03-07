class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
let heroi = new Heroi('Naruto', 17, 'ninja');
heroi.atacar();  // Saída: o ninja atacou usando shuriken
