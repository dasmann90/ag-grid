import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingState } from 'src/app/core/components/loading/loading.component';
import { UsersService } from 'src/app/core/services/users.service';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, ColGroupDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  activeUsers:any = [];
  constructor(private usersService:UsersService,private http: HttpClient) { }

  public loading: LoadingState = LoadingState.NotReady;

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList(){
    this.loading = LoadingState.Processing;
    this.usersService.getUsers().subscribe(data=>{
      this.activeUsers = data;
      this.loading = LoadingState.Ready;
    },error=>{
      this.loading = LoadingState.Ready;
    })
  }



   // Each Column Definition results in one Column.
    public columnDefs: (ColDef | ColGroupDef)[] = [
      { field: 'firstName',headerName:'First Name'},
      { field: 'lastName',headerName:'Last Name'},
      { field: 'username',headerName:'User Name' },
      { field: 'phone' },
      { field: 'email' },
      { field: 'domain' },
      { field: 'age' },
      { field: 'macAddress',headerName:'Mac Address' },
      { field: 'ssn' },
      { headerName:'Address', 
        children: [
          
          { field: 'address.address',headerName:'Address' },
          { field: 'address.city', columnGroupShow: 'open',headerName:'city' },
          { field: 'address.postalCode', columnGroupShow: 'open',headerName:'postalCode' },
          { field: 'address.state', columnGroupShow: 'open',headerName:'state' }
        ]
     }
    ];

     // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
      sortable: true,
      filter: true,
    };

     // Data that gets displayed in the grid
    public rowData$!: Observable<any[]>;

     // For accessing the Grid's API
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

     // Example load data from server
    onGridReady(params: GridReadyEvent) {
      this.rowData$ = this.http
        .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    }

     // Example of consuming Grid Event
    onCellClicked( e: CellClickedEvent): void {
      console.log('cellClicked', e);
    }

    // Example using Grid's API
    clearSelection(): void {
      this.agGrid.api.deselectAll();
    }
}
