export class Empresa {
    id: number;
    nombre: string;
    ruc : string;
    telefono : string;
    description_corta : string;
    description: string;
    direction: string;
    photo_url: string;
    baner_url: string;
    fb_url: string;
    web_url: string;
    map: string;
    slogan: string
    
    constructor(id: number, nombre: string, ruc: string, telefono:string, 
        description_corta: string, description:string, direction:string, photo_url: string, 
        baner_url:string, fb_url: string, web_url:string, map: string, slogan: string) {
        this.id = id;
        this.nombre = nombre;
        this.ruc =ruc;
        this.telefono = telefono;
        this.description_corta = description_corta;
        this.description = description;
        this.direction = direction;
        this.photo_url =photo_url;
        this.baner_url = baner_url;
        this.fb_url= fb_url;
        this.web_url= web_url;
        this.map= map;
        this.slogan = slogan;
    
    }
}
