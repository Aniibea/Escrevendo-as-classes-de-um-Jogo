class Heroi {
    constructor(nome, tipo) {
      this.nome = nome;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = "";
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "atacou";
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  let heroi1 = new Heroi("Leonidas", "guerreiro");
  let heroi2 = new Heroi("Dumbledore", "mago");
  let heroi3 = new Heroi("Coen", "monge");
  let heroi4 = new Heroi("Naruto", 1500, "ninja");
  
  heroi1.atacar()
  heroi2.atacar()
  heroi3.atacar()
  heroi4.atacar()
