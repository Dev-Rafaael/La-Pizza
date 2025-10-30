import UseAccount from "../hooks/useAccount";
import accountHook from "../hooks/useAccount";
import type { Account } from "../types";
import { render, screen, fireEvent } from "@testing-library/react";

const MockUseAccount = ()=>{
    const { account,nome,
    setNome,
    sobreNome,
    setSobreNome,
    nascimento,
    setNascimento,
    sexo,
    setSexo,
    telefone,
    setTelefone,
    deletarAccount,
    edit,
    handleCloseModal,
    isModalOpen,
    handleEdit} = UseAccount()
describe('Name of the group', () => {

    test('should get an account', () => {()}
    render()   
    

}