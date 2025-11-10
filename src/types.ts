export interface User {
  id: number;
  nome: string;
  sobreNome: string;
  email: string;
  senha:string
  cpf: string;
  sexo: string;
  nascimento: string;
  telefone: string;
}
export interface UserRegister extends User {
  senha: string;
}
export interface Contato {
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
  item: Cart[];
  user: User;
  endereco: Address[];
  items: OrderItem[];
}

export interface Cart {
  id: number;
  cartId: number;
  sabor: string;
  descricao: string;
  preco: number;
  precoTotal: number;
  unidades: number;
  adicionais: Adicional[];
  imagem?: string;
}
export interface Adicional {
  id: number;
  nome: string;
  preco: number;
  pizzaId: number;
}
export interface Pizzas {
  id: number;
  sabor: string;
  descricao: string;
  preco: number;
  imagem: string;
  adicionais: Adicional[];
}

export interface Address {
  id: number;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
  complemento?: string;
  userId: number;
}
