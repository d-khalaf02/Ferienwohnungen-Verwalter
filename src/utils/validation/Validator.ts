import { IAddress } from '../../enities/interfaces/IAddress'
import { ValidateAddress, ValidateId, ValidateName, ValidationErrors } from './ValidatePerson'

export class Validator{
     static validate(name: string, id: number, address: IAddress){
         const nameValidator = new ValidateName()
         const idValidator = new ValidateId()
         const addressValidator = new ValidateAddress()

        name = name.replace('\\', '')
            .replace('(', '')
            .replace(')', '')
            .replace('\'', '')
            .replace('-', '')

        if(!nameValidator.validate(name)){
            console.log(name)
            throw new Error(ValidationErrors.Name)
        }

        if(!idValidator.validate(id)){
            console.log(id)
            throw new Error(ValidationErrors.Id)
        }

        if(!addressValidator.validate(address)){
            console.log(address)
            throw new Error(ValidationErrors.Address)
        }
    }
}