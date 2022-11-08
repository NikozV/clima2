import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/_servicio/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ciudad = '';
  temperatura = 0;

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  mClima(){
    this.climaService.clima(this.ciudad).subscribe( data => {
      this.temperatura = data.main.temp;
    });
  }

}
