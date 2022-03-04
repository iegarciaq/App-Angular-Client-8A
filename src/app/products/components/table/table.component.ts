import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../interfaces/product.interface';


const ELEMENT_DATA: Product[] = [
  {id: 1, title: "Laptop", price: 5682.40, createdAt: "04-03-2022", updatedAt: "04-03-2022"},
  {id: 2, title: "Smart TV", price: 10200.00, createdAt: "04-03-2022", updatedAt: "04-03-2022"},
  {id: 3, title: "USB 32Gb", price: 120.00, createdAt: "04-03-2022", updatedAt: "04-03-2022"},
  {id: 4, title: "Mouse Gamer", price: 399.99, createdAt: "04-03-2022", updatedAt: "04-03-2022"},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'createdAt', 'updatedAt'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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

  constructor() { }
  
  ngOnInit(): void {
  }

}
