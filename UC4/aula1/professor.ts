import { Funcionario } from "./funcionario";
export class Professor extends Funcionario {
  materia: string;
  constructor(nome: string, salario: number, materia: string) {
    super(nome, salario);
    this.materia = materia;
  }
}
