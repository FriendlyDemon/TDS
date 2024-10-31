class Base {
  id: number;
  nome: string;
  função(argumento: number): void;
  função(argumento: string): void;

  função(argumento: string | number): void {
    if (typeof argumento == "string") {
      console.log(argumento);
    } else {
      for (let x = 0; x < argumento; x++) {
        console.log(this.nome);
      }
    }
  }
}
class Filha extends Base {
  propriedade: number;
  função(): void {
    console.log(this.id);
  }
}
