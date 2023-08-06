import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit{
  
  experienceLab: Experience = null;

  constructor(private expService: ExperienceService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {  
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.detail(id).subscribe(data => {
      this.experienceLab = data;
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }
  

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.expService.update(id, this.experienceLab).subscribe(data => {
    
      this.router.navigate(['']);
    }, err => {
      alert("Error al modificar experiencia");
      this.router.navigate(['']);
    })
  }
  

}
