import { user } from '../src/app/models/user.model';
import { itemsmodel } from '../src/app/models/itemsmodel.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
itemsmodel: itemsmodel;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.itemsmodel = new itemsmodel();
//CREATE NEW DM INSTANCE
    }
}