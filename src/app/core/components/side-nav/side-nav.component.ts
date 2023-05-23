import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  navItems:any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.navItems = [
      {
        name: 'Dashboard',
        link: 'dashboard',
        icon: 'fa fa-tachometer',
        isSubMenu: false,
        items: []
      },
      {
        name: 'Products',
        link: 'products',
        icon: 'fa fa-tachometer',
        isSubMenu: false,
        items: []
      },
      {
        name: 'Documents',
        link: 'documents',
        icon: 'fas fa-fw fa-cog',
        isSubMenu: false,
        items: []
      },
      {
        name: 'Admin',
        link: 'admin',
        icon: 'fas fa-fw fa-cog',
        isSubMenu: false,
        items: []
      },

    ]
  }
  
  menuTap(item:any){
    this.router.navigateByUrl('/' + item.link);
  }

}
