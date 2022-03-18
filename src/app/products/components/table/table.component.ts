import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';


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

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor( private prodService: ProductService ) { }
  
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

    
    console.log(this.allProducts)
  }


  addProduct(){
    
  }

}
