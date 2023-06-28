export class foods{
    id!:number;    //without creating constructor
    price!:number;   //initilized here or use constructor id:number=0;
    name!:string;
    favourite:boolean=false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];
}