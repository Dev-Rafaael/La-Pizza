export interface Account {
  id: number;
  nome: string;
  sobreNome: string;
  email: string;
  senha:string;
  cpf: string;
  sexo: string;
  nascimento: string;
  telefone: string;

}

export interface Contact {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export interface OrderItem {
  id: number;
  sabor: string;
  descricao: string;
  preco: number;
  imagem?: string;
  precoTotal: number;
  unidades: number;
  adicionais: Adicional[];
  cartId: number;
}

export interface Order {
  id: number;
  sabor: string;
  descricao: string;
  preco: number;
  imagem?: string;
  precoTotal: number;
  unidades: number;
  adicionais: string[];
  cartId: number;
  nome: string;
  sobreNome: string;
  cpf: string;
  sexo: string;
  nascimento: string;
  email: string;
  telefone: string;
  cep: string;
  estado: string;
  cidade: string;
  numero: string;
  complemento: string;
  items: OrderItem[],
}

export interface Cart {
  id: number;
    cartId:number;
  sabor: string;
  descricao: string;
  preco: number;
  precoTotal: number;
  unidades: number;
  adicionais: Adicional[];
  imagem?: string;
}
export interface Adicional {
  id:number;
  nome:string;
  preco:number;
  pizzaid:number;
}
export interface Pizzas {
id: number;
  sabor: string;
  descricao:string;
  preco:number;
  imagem: string;
  adicional: Adicional[]
}

