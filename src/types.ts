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
    preco:string,
    imagem?:string,
    precoTotal:string,
    unidades:string,
    adicionais:string,
    cartId:string
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
    preco:string,
    precoTotal:string,
    unidades:string,
    adicionais:string,
    cartId:number,
    imagem?:string
}