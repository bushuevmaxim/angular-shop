import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isSidebarShown: boolean = false;

  public showMenu(): void {
    this.isSidebarShown = !this.isSidebarShown;
  }
}
