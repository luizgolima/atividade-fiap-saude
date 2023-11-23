import { Insulina } from "../../insulina/model/insulina";
import { Endocrinologia } from "../../endocrinologia/model/endocrinologia";

export interface Usuario {
  nomeCompleto: string
  email: string
  peso: number
  altura: number
  imc: number
  idade: number
  listaDados: Endocrinologia[]
  gerenciamentosInsulina: Insulina[]
}

