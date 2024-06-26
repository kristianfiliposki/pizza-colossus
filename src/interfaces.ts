export interface user{
    id : number;
    nome: string;
    anni: number;
    prezzo: number;
    pizze: pizza[]
}

export interface pizza
{
  id:number,
  nome: string,
  prezzo: number,
  ingredienti:string[],
}

