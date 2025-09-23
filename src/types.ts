export interface Contato {
    id:number,
    nome: string,
    sobrenome:string,
    email:string,
    assunto:string
}

export interface Orcamento {
    id:number,
    pedacos: string,
    sabores:string,
    preco:string,
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