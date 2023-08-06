import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit {
  nameExp: string = '';
  descriptionExp: string = '';

  constructor(private experienceServ: ExperienceService, private router: Router){}

  ngOnInit(): void{}

  onCreate(): void{
    const exp = new Experience(this.nameExp,this.descriptionExp);
    this.experienceServ.save(exp).subscribe(data => {
      alert("Formación añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("La carga falló");
      this.router.navigate(['']);
    })
  }
}
