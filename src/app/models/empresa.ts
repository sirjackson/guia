export class Empresa {
    id: number;
    name: string;
    ruc : string;
    telephone: string;
    celular: string;
    description: string;
    direction: string;
    photo_url: string;
    baner_url: string;
    fb_url: string;
    
    constructor(id: number, name: string, ruc: string, telephone:string, 
        celular: string, description:string, direction:string, photo_url: string, 
        baner_url:string, fb_url: string) {
        this.id = id;
        this.name = name;
        this.ruc =ruc;
        this.telephone = telephone;
        this.celular = celular;
        this.description = description;
        this.direction = direction;
        this.photo_url =photo_url;
        this.baner_url = baner_url;
        this.fb_url= fb_url;
    
    }
}
