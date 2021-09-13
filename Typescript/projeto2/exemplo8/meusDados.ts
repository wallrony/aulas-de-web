interface MeusDados {
  nome: string
  idade: number
  cpf: string
  ativo: boolean
}

interface DadosBancarios {
  agencia: number
  numeroDaConta: number
  saldo: number
  get getSaldo(): number
  sacar(valor: number): number
}

class Conta implements MeusDados, DadosBancarios {
  agencia: number;
  nome: string;
  idade: number;
  cpf: string;
  ativo: boolean;

  numeroDaConta: number;
  saldo: number;
  get getSaldo(): number {
    throw new Error("Method not implemented.");
  }
  sacar(valor: number): number {
    throw new Error("Method not implemented.");
  }
}

class Caixa implements DadosBancarios {
  agencia: number;
  numeroDaConta: number;
  saldo: number;
  get getSaldo(): number {
    throw new Error("Method not implemented.");
  }
  sacar(valor: number): number {
    throw new Error("Method not implemented.");
  }
}
