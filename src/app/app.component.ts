import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablesComponent } from './components/tables/tables.component';
import { Column } from './interface/column';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-reusable-mat-table';
  selectedRecords: any[] = [];
  tableListCols: Array<Column> = [
    {
      columnDef: 'sno',
      header: 'S.NO',
      cell: (element: any, index: number) => `${index + 1}`,
      isSelectable: false,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      isLink: true,
      url: '/',
    },
    {
      columnDef: 'gender',
      header: 'Gender',
      cell: (element: Record<string, any>) => `${element['gender']}`,
    },
    {
      columnDef: 'age',
      header: 'Age',
      cell: (element: Record<string, any>) => `${element['age']}`,
      isNumber: true,
    },
    {
      columnDef: 'mobile',
      header: 'Mobile',
      cell: (element: Record<string, any>) => `${element['phone']}`,
    },
    {
      columnDef: 'email',
      header: 'E-mail',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
  ];
  tableListData: Array<any> = [
    {
      name: 'John',
      gender: 'Male',
      age: '26',
      phone: '7894561320',
      email: 'test@yopmail.com',
    },
    {
      name: 'Lincon',
      gender: 'Male',
      age: '26',
      phone: '7894561320',
      email: 'lincon@yopmail.com',
    },
    {
      name: 'trump',
      gender: 'Male',
      age: '26',
      phone: '7894561320',
      email: 'trump@yopmail.com',
    },
  ];

  tableListCols2: Array<Column> = [
    {
      columnDef: 'select',
      header: '',
      cell: (element: Record<string, any>) => ``,
      isSelectable: true,
    },
    {
      columnDef: 'sno',
      header: 'S.NO',
      cell: (element: any, index: number) => `${index + 1}`,
      isSelectable: false,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      isLink: true,
      url: '/',
    },
    {
      columnDef: 'gender',
      header: 'Gender',
      cell: (element: Record<string, any>) => `${element['gender']}`,
    },
    {
      columnDef: 'age',
      header: 'Age',
      cell: (element: Record<string, any>) => `${element['age']}`,
      isNumber: true,
    },
    {
      columnDef: 'mobile',
      header: 'Mobile',
      cell: (element: Record<string, any>) => `${element['phone']}`,
    },
    {
      columnDef: 'email',
      header: 'E-mail',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
  ];

  tableListCols3: Array<Column> = [
    {
      columnDef: 'select',
      header: '',
      cell: (element: Record<string, any>) => ``,
      isSelectable: true,
    },
    {
      columnDef: 'sno',
      header: 'S.NO',
      cell: (element: any, index: number) => `${index + 1}`,
      isSelectable: false,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: Record<string, any>) => `${element['name']}`,
      isLink: true,
      url: '/',
    },
    {
      columnDef: 'gender',
      header: 'Gender',
      cell: (element: Record<string, any>) => `${element['gender']}`,
    },
    {
      columnDef: 'age',
      header: 'Age',
      cell: (element: Record<string, any>) => `${element['age']}`,
      isNumber: true,
    },
    {
      columnDef: 'mobile',
      header: 'Mobile',
      cell: (element: Record<string, any>) => `${element['phone']}`,
    },
    {
      columnDef: 'email',
      header: 'E-mail',
      cell: (element: Record<string, any>) => `${element['email']}`,
    },
    {
      columnDef: 'action',
      header: 'Action',
      cell: (element: Record<string, any>) => ``,
      isAction: true,
      showDelete: true,
      showEdit: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  editData(item: any) {
    this.selectedRecords = [];
    this.selectedRecords = item;
  }

  deleteData(item: any) {
    this.selectedRecords = [];
    this.selectedRecords = item;
  }

  onDataChange(item: any) {
    this.selectedRecords = item;
  }
}
