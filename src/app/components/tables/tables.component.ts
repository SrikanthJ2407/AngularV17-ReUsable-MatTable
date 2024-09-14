import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Column } from '../../interface/column';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSortModule,
  ],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent implements OnInit {
  @Input() tableColumns: Array<Column> = [];
  @Input() tableData: Array<any> = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onDataSelect = new EventEmitter<any>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selection = new SelectionModel(true, []);
  displayedColumns: Array<string> = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  selectedRecords: any;
  constructor() {}

  ngOnInit(): void {
    console.log('tableData:', this.tableData);
    this.displayedColumns = this.tableColumns.map((c: Column) => c.columnDef);
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  // Gets the Selected Records to Display
  ngOnChanges(changes: SimpleChanges) {
    if (changes['tableData'].currentValue) {
      this.dataSource = new MatTableDataSource(
        changes['tableData'].currentValue
      );
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  // Initializes the Paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(item: any) {
    this.onEdit.emit(item);
  }

  delete(item: any) {
    this.onDelete.emit(item);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row: any) => this.selection.select(row));
    // this.selectedRecords = new MatTableDataSource(this.selection.selected);
    this.onDataSelect.emit(this.selection.selected);
  }

  onSelect(row: any) {
    this.selection.toggle(row);
    // this.selectedRecords = new MatTableDataSource(this.selection.selected);
    this.onDataSelect.emit(this.selection.selected);
  }

  // logSelection() {
  //   this.selection.selected.forEach((s: any) => console.log(s.name));
  //   console.log('selected', this.selection.selected);
  // }
}
