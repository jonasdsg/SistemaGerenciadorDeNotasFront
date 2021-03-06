import { LoginService } from './components/topo/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService:LoginService){}
  link = 'https://exame.com/wp-content/uploads/2018/10/gettyimages-658984513-e1539285852569.jpg';
  public estaLogado():boolean{
    return this.loginService.estaLogado();
  }
}
