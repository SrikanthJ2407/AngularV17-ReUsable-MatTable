# AngularReusableMatTable

# This Project is about a Reusable Mat Table in Angular V17

![Default MatTable](https://github.com/SrikanthCIS/AngularV17-ReUsable-MatTable/blob/ceaa21978e383fae9f57ef3b7b0a3240cd8ee337/src/assets/images/Default-MatTable.png)

![Selectable Rows With Action MatTable](https://github.com/SrikanthCIS/AngularV17-ReUsable-MatTable/blob/ceaa21978e383fae9f57ef3b7b0a3240cd8ee337/src/assets/images/Selectable-MatTable.png)

## _Sending Data to the Reusable Table Components_

```
<app-tables [tableColumns]="tableListCols" [tableData]="tableListData" />
```

### _Column Inteface_

```
export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  isLink?: boolean;
  url?: string;
  isAction?: boolean;
  isSelectable?: boolean;
  isDate?: boolean;
  isNumber?: boolean;
  showEdit?: boolean;
  showDelete?: boolean;
}
```

### _Column Format_

```
  tableListCols3: Array<Column> = [
    {
      columnDef: 'select',
      header: '',
      cell: (element: Record<string, any>) => ``,
      isSelectable: true,
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

```

### _Data format_

```
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
```

### _Receiving Data in the Reusable Table Components_

```
  @Input() tableColumns: Array<Column> = [];
  @Input() tableData: Array<any> = [];
  @Output() onEdit = new EventEmitter<any>();
  @Output() onDelete = new EventEmitter<any>();
  @Output() onDataSelect = new EventEmitter<any>();
```

### _Reusable Table Html_

**Looping the Column**

```
  <ng-container
    *ngFor="let disCol of tableColumns; let colIndex = index"
    matColumnDef="{{ disCol.columnDef }}"
  ></ng-container>
```

**Table Header**

```
    <th mat-header-cell *matHeaderCellDef>
      @if (disCol.isSelectable == true) {
      <!-- Selectable Header -->
      <mat-checkbox
        (change)="$event ? masterToggle() : null"
        [checked]="selection.hasValue() && isAllSelected()"
        [indeterminate]="selection.hasValue() && !isAllSelected()"
      >
      </mat-checkbox>
      }
      {{ disCol.header }}
    </th>
```

## **Table Columns**

- _Use ngIf="!disCol.isLink" if you want to show link in all columns_
- _You must use ngIf="!disCol.isLink" if you want to show link in all columns_
- _You can Show/Hide Action Items using showEdit & showDelete in column array_

```
    <td mat-cell *matCellDef="let element">
      <!-- If the Element is not a Link  -->
      <span *ngIf="!disCol.isLink; else link">
        @if (disCol.isDate == true) {
        <!-- If Date Column -->
        {{ disCol.cell(element) }}
        } @else if (disCol.isAction == true) {
        <!-- If Action Column -->
        <a
          class="text-secondary mx-3"
          *ngIf="disCol.showEdit"
          (click)="edit(element)"
        >
          <i class="bi bi-pencil"></i>
        </a>
        <a
          class="text-danger"
          *ngIf="disCol.showDelete"
          (click)="delete(element)"
        >
          <i class="bi bi-trash"></i>
        </a>
        } @else if (disCol.isSelectable == true) {
        <!-- Selectable Rows -->
        <mat-checkbox
          (click)="$event.stopPropagation()"
          (change)="$event ? onSelect(element) : null"
          [checked]="selection.isSelected(element)"
        >
        </mat-checkbox>
        } @else {
        {{ disCol.cell(element) }}
        }
      </span>

      <!-- If the Element is  a Link  -->
      <ng-template #link>
        <a [routerLink]="[disCol.url]" class="text-decoration-none">
          {{ disCol.cell(element) }}
        </a>
      </ng-template>
    </td>
```
