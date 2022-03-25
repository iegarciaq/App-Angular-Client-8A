import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  allProducts : Product[] = [];
  dataSource!: MatTableDataSource<Product>;

  displayedColumns: string[] = ['id', 'title', 'price', 'createdAt', 'updatedAt', 'actions'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor( 
    private prodService: ProductService, 
    private dialog: MatDialog 
    
    ) { }
  
  ngOnInit(){
    this.loadTable();
  }
  

  // Carga los datos del API 
  loadTable(){
    this.prodService.getAllProduct().subscribe( data => {
      this.allProducts = data;
      this.dataSource = new MatTableDataSource(this.allProducts);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    
  }


  addProduct(){
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {
        action: 'add'
      }
    });

    dialogRef.afterClosed().subscribe( result => {
      // Aqui va el codigo que se va a ejecutar cada que el dialog
      // se cierre

      this.loadTable();
    } );
  }
  
  
  deleteProduct(id: number){
    // Llamar al servicio para eliminar el prod
    this.prodService.deleteProduct(id).subscribe( resp => {
      this.loadTable();
    } );
  }
  
  updateProduct(product: Product){
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {
        action: 'update',
        product: product
      }
    });

    dialogRef.afterClosed().subscribe( result => {
      // Aqui va el codigo que se va a ejecutar cada que el dialog
      // se cierre

      this.loadTable();
    } );
    
  }

}
