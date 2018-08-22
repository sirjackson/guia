export class Afiliado {

    id: number;
    cedula: string;
    name: string;
    apellido: string;
    telephone: string;
    direction: string;
    email: string;
    profession: string;

    constructor (id:number, cedula:string, name:string,apellido:string,
    telephone:string,direction:string,email:string,profession:string){
        this.id = id;
        this.cedula = cedula;
        this.name = name;
        this.apellido = apellido;
        this.telephone = telephone;
        this.direction = direction;
        this.email = email;
        this.profession = profession;
    }

}


