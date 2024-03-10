import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  constructor(public dialog: MatDialog) {
  }
  isSidebarShown: boolean = false;

  public showMenu(): void {
    this.isSidebarShown = !this.isSidebarShown;
  }


  public openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      maxWidth: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
