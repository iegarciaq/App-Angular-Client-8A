import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {


  // variable
  action: string = '';

  // Create Reactive Form

  formGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    createdAt: new FormControl(''),
    updateAt: new FormControl(''),
  });

  submitForm() {
    //update

    if (this.action === 'add') {
      this.prodService.addProduct(this.formGroup.value).subscribe(resp => {
        this.dialogRef.close();
      });
    }

    if (this.action === 'update') {

      console.log(this.data)

      this.formGroup.setValue(
        {
          id: new FormControl(this.data.product.id),
          title: new FormControl(this.data.product.title, [Validators.required]),
          price: new FormControl(this.data.product.price, [Validators.required]),
          createdAt: new FormControl(this.data.product.createdAt),
          updateAt: new FormControl(this.data.product.updateAt),
        }
      );

      this.prodService.updateProduct(this.formGroup.value).subscribe(resp => {
        this.dialogRef.close();
      });
    }

  }

  constructor(
    private prodService: ProductService,
    private dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    this.action = this.data.action;
    if (this.action === 'update') {

      console.log(this.data.product)

      this.formGroup.setValue(
        {
          id: new FormControl(this.data.product.id),
          title: new FormControl(this.data.product.title, [Validators.required]),
          price: new FormControl(this.data.product.price, [Validators.required]),
          createdAt: new FormControl(this.data.product.createdAt),
          updateAt: new FormControl(this.data.product.updateAt),
        }
      );
    }
  }

}
