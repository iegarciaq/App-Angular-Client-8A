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

  displayedColumns: string[] = ['id', 'title', 'price', 'createdAt', 'updatedAt', 'actions'];
  dataSource = new MatTableDataSource(this.allProducts);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor( private prodService: ProductService ) { }
  
  ngOnInit(){
    this.loadTable();
  }
  
  loadTable(){
    this.prodService.getAllProduct().subscribe( data => {
      console.log(data)
      this.allProducts = data;
      console.log(this.allProducts)
    });

    
    console.log(this.allProducts)
  }


  addProduct(){
    
  }

}
