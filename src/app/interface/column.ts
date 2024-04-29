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
