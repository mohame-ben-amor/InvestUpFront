import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  styles: [`.router-link-active { background-color: #19B3D3; }`]
})
export class SidebarComponent implements OnInit {

  ngOnInit() {

  }

}
