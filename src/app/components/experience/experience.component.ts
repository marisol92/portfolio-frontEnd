import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent implements OnInit{
  expModel: Experience[] = [];

  constructor(private experienceServ: ExperienceService, private tokenService: TokenService){}

  isLogged = false;

  ngOnInit(): void{
    this.loadExperience();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  loadExperience(): void {
    this.experienceServ.list().subscribe(data => {this.expModel = data})
  };
  
  delete(id?: number): void{
    if(id != undefined){}
    this.experienceServ.delete(id).subscribe(data => {
      this.loadExperience();
    }, err => {
      alert("Error al borrar la experiencia");
    })
  }
}


