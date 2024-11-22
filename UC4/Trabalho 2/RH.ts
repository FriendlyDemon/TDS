class Funcionario {
  nome: string;
  CPF: string;
  cargo: string;
  projeto: string;
}

class Horista extends Funcionario {
  horas: Date;
  valorHora: number;
}

class Assalariado extends Funcionario {
  cargaHoraria: string;
  salario: number;
}

class Comissionado extends Funcionario {
  valorComicao: number;
}

class Ativo {
  nome: string;
  quantidade: number;
}

class Equipamento extends Ativo {
  custo: number;
  manutencao() {}
}

class Software extends Ativo {
  mensalidade: number;
}

class BD {
  manutencoesAtivos: object;
  projetosFuncionarios: object;
}

class Manutencao {
  equipamento: Equipamento;
  dataEstrago: Date;
  custo: number;
  dataInicioManutencao: void | Date;
  dataFimManutencao: void | Date;
}

class Projeto {
  private funcionarios: Array<Funcionario>;
  inicio: Date;
  fim: void | Date;
  custo: number;
  adicionarFuncionario(funcionario: Funcionario) {
    if (!this.funcionarios.includes(funcionario)) {
      this.funcionarios.push(funcionario);
    } else {
        console.log('erro, funcionario já está no projeto')
    }
  }
}
