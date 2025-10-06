export interface Contact {
    id:number,
    nome: string,
    sobrenome:string,
    email:string,
    assunto:string,
    mensagem:string
}

export interface Orcamento {
    id:number,
    sabor:string,
    descricao:string,
    preco:number,
    imagem?:string,
    precoTotal:number,
    unidades:number,
    adicionais:string,
    cartId:number
}

export interface Checkout extends Orcamento {
  nome: string;
  sobrenome: string;
  cpf: string;
  sexo: string;
  idade: string;
  email: string;
  cep: string;
  numero: string;
}

export interface Cart {
    sabor:string,
    descricao:string,
    preco:number,
    precoTotal:number,
    unidades:number,
    adicionais:string,
    cartId:number,
    imagem?:string
}