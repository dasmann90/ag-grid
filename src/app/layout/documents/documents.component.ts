import { Component, OnInit } from '@angular/core';
import { LoadingState } from 'src/app/core/components/loading/loading.component';
import { ProductsService } from 'src/app/core/services/products.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, ColGroupDef, GridReadyEvent, ValueGetterParams,ISetFilterParams  } from 'ag-grid-community';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  public loading: LoadingState = LoadingState.NotReady;
  dataSheet:any = [];
  public columnDefs: (ColDef | ColGroupDef)[] = [
    { headerName:'Title',field: 'DataSheet.Properties.Title',filter: 'agSetColumnFilter'},
    { headerName:'Standard',valueGetter: this.getStandardValue},
    { headerName:'CCN',valueGetter: this.getCCNValue, },
    { headerName:'Size',valueGetter: this.getFormatSizeValue },
    { headerName:'Revision Date',valueGetter: this.getFormatedDate },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    
  };

  constructor(
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.getDataSheet();
  }

  getDataSheet(){
    this.productsService.getDataSheetList().subscribe(data=>{
      this.dataSheet = data;
      this.loading = LoadingState.Ready;
    },error=>{
      this.loading = LoadingState.Ready;
    })
  }

  getCCNValue(params: ValueGetterParams) {
    return params.data.DataSheet.Categories[0].CCN
  }

  getStandardValue(params: ValueGetterParams) {
    return params.data.DataSheet.Categories[0].Standard?params.data.DataSheet.Categories[0].Standard:"---";
  }

  getFormatSizeValue(params: ValueGetterParams) {
    return params.data.DataSheet.Properties.FormattedSize;
  }

  getFormatedDate(params: ValueGetterParams) {
    let date = params.data.DataSheet.Properties.RevisionDate.replace('/Date(', '').replace(')/', '');
    
    return date;
  }
}
