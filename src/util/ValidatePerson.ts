import { PropertyManager } from '../enities/PropertyManager'

export enum ValidationErrors{
    Name = "This name is invalid!",
    Id = "This id is invalid!",
    Address = "This address is invalid!",
}

abstract class ValidatePerson {
    private allowedChars = 'qwertzuiopasdfghjklyxcvbnm. '.split('')

    protected containsSpace(value : string){
        return value.includes(' ')
    }

    protected containsUnallowedChars(value: string): boolean{
        for (const char of value.toLowerCase()){
            if(!this.allowedChars.includes(char)){
                return true;
            }
        }

        return false;
    }

    protected isGreaterThan1(value: string): boolean{
        return value.length > 1;
    }

    protected isLessThan41(value: string): boolean{
        return value.length < 41;
    }

    protected isFloat(value: number): boolean{
        return Number.isFinite(value) && !Number.isInteger(value);
    }
}

export class ValidateName extends ValidatePerson {
    constructor(){
        super();
    }

    validate(name: string) : boolean{
        let isValid : boolean = true;

        if(!this.containsSpace(name)){
            isValid = false;
        }

        if(!this.isGreaterThan1(name)){
            isValid = false;
        }

        if(!this.isLessThan41(name)){
            isValid = false;
        }

        if(this.containsUnallowedChars(name)){
            isValid = false;
        }

        return isValid;
    }
}

export class ValidateId extends ValidatePerson{
    constructor(){ super() }

    validate(id: number) : boolean{
        let isValid = true;

        if(!this.validDigitsLength(id.toString())){
            isValid = false;
        }

        if(this.isFloat(id)){
            isValid = false;
        }

        return isValid;
    }

    private validDigitsLength(value: string){
        return value.length >= 7 && value.length <= 16;
    }
}

export class ValidateAddress extends ValidatePerson{
    constructor(){ super() }

    validate(address: {street: string, city: string, zip: number, }){
        let isValid: boolean = true;

        if(!this.validateStreet(address.street)){
            isValid = false;
        }

        if(!this.validateCity(address.city)){
            isValid = false;
        }

        if(!this.validateZip(address.zip)){
            isValid = false;
        }

        return isValid;
    }

    private validateStreet(street: string) : boolean{
        let isValid: boolean = true;

        if(this.containsUnallowedChars(street)){
            isValid = false;
        }

        if(!this.isLessThan41(street)){
            isValid = false;
        }

        return isValid;
    }

    private validateCity(city: string) : boolean{
        let isValid: boolean = true;

        if(this.containsUnallowedChars(city)){
            isValid = false;
        }

        if(!this.isGreaterThan1(city)){
            isValid = false;
        }

        if(!this.isLessThan41(city)){
            isValid = false;
        }

        return isValid;
    }

    private validateZip(zip: number): boolean{
        let isValid: boolean = true;

        if(this.isFloat(zip)){
            isValid = false;
        }

        if(!this.validDigitsLength(zip.toString())){
            isValid = false;
        }

        return isValid;
    }

    private validDigitsLength(value: string){
        return value.length === 5;
    }
}

