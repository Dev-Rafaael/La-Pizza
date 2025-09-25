export interface Contato {
    id:number,
    nome: string,
    sobrenome:string,
    email:string,
    assunto:string
}

export interface Orcamento {
    id:number,
    nome:string,
    descricao:string,
    preco:string,
    imagem:string,
    precoTotal:string,
    unidades:string,
    adicionais:string,
    cartId:string
}

export interface Checkout {
    id:number,
    nome:string,
    sobrenome:string,
    cpf:string,
    sexo:string,
    idade:string,
    email:string,
    cep:string,
    numero:string,
}

export interface Cart {
    id:number,
    produto:string,
    preco:string,
    quantidade:string
}