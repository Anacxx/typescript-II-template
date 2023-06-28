/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
2. Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades account e permission;
3. Crie exemplos de usuários Admin e Normal;
*/
enum ROLE {
    ADMIN = 'Admin',
    NORMAL = 'Normal'
}
type TPerson = {
    id: string,
    name: string,
    email: string,
    password: string
}

type AdminAccount = {
    account: string,
    permission: ROLE.ADMIN
}

type NormalAccount = {
    account: string,
    permission: ROLE.NORMAL
}

const userAdmin:AdminAccount = {
    account: 'Ana',
    permission: ROLE.ADMIN
}
const userNormal:NormalAccount = {
    account: 'Luana',
    permission: ROLE.NORMAL
}






/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/ 
type TuserAdmin = TPerson & AdminAccount

const admUser:TuserAdmin = {
    id: '001',
    name: 'Ana',
    email: 'ana@email.com',
    password: '121314',
    account: 'Ana',
    permission: ROLE.ADMIN
}
type TuserNorm = TPerson & NormalAccount

const normUser:TuserNorm = {
    id: '002',
    name: 'Amanda',
    email: 'amanda@email.com',
    password: '43245324',
    account: '4324234',
    permission: ROLE.NORMAL
}

const array: Array<TuserAdmin | TuserNorm> = [admUser,normUser]
console.log(array)