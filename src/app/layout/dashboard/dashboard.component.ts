import { Component, OnInit } from '@angular/core';
import { LoadingState } from 'src/app/core/components/loading/loading.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public loading: LoadingState = LoadingState.NotReady;

  ngOnInit(): void {
    this.loading = LoadingState.Processing;
    setTimeout(()=>{
      this.loading = LoadingState.Ready;
    },500)
  }



}
