/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { Router } from '@angular/router';
import { Validators, FormBuilder, NgForm, FormControl, FormGroup } from '@angular/forms';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
} from '@angular/material';

import { register } from '../../models/register';


/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-signup',
    templateUrl: './signup.template.html'
})

export class signupComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    registeruser: register;

    constructor(private builder: FormBuilder, private bdms: NDataModelService, private router: Router, private snackBar: MatSnackBar) {
        super();
        this.mm = new ModelMethods(bdms);
    }
    openSnackBar(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 4000,
        });
    }
    loginForm: FormGroup;

    ngOnInit() {
        this.buildForm();
    }
    buildForm() {
        this.loginForm = this.builder.group({
            username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
            firstName: new FormControl('', [Validators.required, Validators.minLength(5)]),
            lastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            userKey: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("^[0-9]{10}$")])
        });
    }

    submit() {
        this.registeruser = this.loginForm.value;
        this.registeruser.displayName = "dsg";
        this.registeruser.groupList = [null];
        //this.registeruser.userKey=JSON.stringify(this.loginForm.value.userKey);
        var User = JSON.stringify(this.registeruser);
        // this.eService.registerUser(this.registeruser).subscribe(data => {
        //   this.router.navigate(['login']);
        //   this.createCart(this.loginForm.value.username);
        this.openSnackBar('User Registered Successfully', 'Dismiss');

        // }, error => {
        //   this.errors = error;
        //   if (this.errors.status === 201) {
        //     this.createCart(this.loginForm.value.username);
        this.router.navigate(['login']);
        //     this.openSnackBar('User Registered Successfully', 'Dismiss');
        //   }
        // });
    }


    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
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
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
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
