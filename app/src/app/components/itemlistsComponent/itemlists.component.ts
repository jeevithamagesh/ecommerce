/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSessionStorageService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {MatSnackBar} from '@angular/material';

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-itemlists',
    templateUrl: './itemlists.template.html'
})

export class itemlistsComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    currentuser;
    cusername;
    username;
    newArray = [];
    // btn = "Add";

    constructor(private bdms: NDataModelService, private session: NSessionStorageService,private snackBar: MatSnackBar) {
        super();
        this.mm = new ModelMethods(bdms);
    }
       openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    }

    ngOnInit() {
        // console.log(this.session,getvalue)
        this.currentuser = this.session.getValue('userObj')
        this.cusername = this.currentuser.displayName;
        this.username = this.currentuser.username;
        this.get('itemsmodel')
    }

    addItem(img) {
        // this.btn = "Added";
        let listitem = {
            name: img.name,
            image: img.image,
            price: img.price,
            username: this.username,
            // productId : unique id for product
            // quantity
            productId: img.productId,
            quantity: 1,
            added:true
        }
        console.log(this.dm)
        this.dm.itemsmodel = listitem;
        // console.log(this.dm.itemsmodel)
        this.put('itemsmodel', this.dm.itemsmodel)
          this.openSnackBar('Item added to cart', 'Dismiss');

    }

    image: any = [

        {
            image: 'Web/Icons/download.jpg', name: "Samsung", price: 67
        },
        {
            image: 'Web/Icons/download.jpg', name: "Nokia", price: 67
        },
        {
            image: 'Web/Icons/download.jpg', name: "Honor", price: 67
        },
        {
            image: 'Web/Icons/download.jpg', name: "Oppo", price: 67
        },
        {
            image: 'Web/Icons/download.jpg', name: "Samsung", price: 67
        },
        {
            image: 'Web/Icons/download.jpg', name: "Nokia", price: 67

        },
        {
            image: 'Web/Icons/download.jpg', name: "Honor", price: 67

        },
        {
            image: 'Web/Icons/download.jpg', name: "Oppo", price: 67

        }
    ]

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                console.log(result)
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        console.log(dataModelName, dataModelObject)
        this.mm.put(dataModelName, dataModelObject,
            result => {
                this.get('userpost')
                console.log('put method', result)
                // On Success code here
            }, error => {
                console.log(error);
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }


}
