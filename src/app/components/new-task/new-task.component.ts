import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  buttonAddEnabled: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  handleInputChange(event){
    this.buttonAddEnabled = event.length > 0;
  }

}
