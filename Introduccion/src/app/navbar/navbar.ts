import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from '@angular/router';
/**
 * @title Toolbar overview
 */
@Component({
  selector: 'toolbar',
  templateUrl: 'navbar.html',
  styleUrl: 'navbar.css',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
})
export class ToolbarOverviewExample {}
