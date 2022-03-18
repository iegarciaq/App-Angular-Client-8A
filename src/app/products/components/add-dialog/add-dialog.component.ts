import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  // Create Reactive Form

  formGroup = new FormGroup(
    {
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    }
  );

  submitForm(){
    this.prodService.addProduct(this.formGroup.value).subscribe(resp => {
      console.log(resp)
    });
  }

  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
  }

}
