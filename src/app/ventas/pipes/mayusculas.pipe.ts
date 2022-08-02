import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    transform(valor: string, enMayuscula: boolean = true): string {

        // if (enMayuscula) {
        //     return valor.toUpperCase();
        // } else {
        //     return valor.toLowerCase();
        // }
        return (enMayuscula) ? valor.toUpperCase() : valor.toLowerCase()

    }
}