import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  editToggle = false
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  addCrewMember(nameInput, checkbox){
    this.crew.push({name: nameInput, firstMission: checkbox})
  }

  editCrewName(nameInput, index){
    console.log(index)
  }

  remove(index){
    this.crew.splice(index)
  }

}
