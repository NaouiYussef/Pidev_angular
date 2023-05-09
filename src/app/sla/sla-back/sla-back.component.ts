import { Component, OnInit } from '@angular/core';
import {Sla} from "../Sla";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {SlaService} from "../sla.service";
import {User} from "../../user/user";
declare var $: any;

@Component({
  selector: 'app-sla-back',
  templateUrl: './sla-back.component.html',
  styleUrls: ['./sla-back.component.css']
})
export class SlaBackComponent implements OnInit {
  slas: Sla[] = [];
  monsla: Sla;
  file: File;

  constructor(private http: HttpClient, private slaService: SlaService) { }

  ngOnInit(): void {
    this.getSlas();
  }


  public getSlas(): void {
    const url = `http://localhost:8081/admin/SlaAll`; // construct the URL
    this.slaService.getSlas(url).subscribe(
      (response: Sla[]) => {
        this.slas= response;
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa", this.slas)
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )

  }

  public deletesla(id:number)
  {
    this.slaService.DeleteSla(id).subscribe(
      res=>{
        this.getSlas();
      }
    )


  }
  onFileChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length) {
      this.file = fileInput.files[0];
    }
  }
  public edit()
  {
    this.slaService.editsla(this.monsla).subscribe(
      res=>{
        this.getSlas();
      }
    )


  }
  public onOpenModal(employee: Sla): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');


      this.monsla=employee;
      button.setAttribute('data-target', '#updateEmployeeModal');

    // attach event handler to the button
    button.addEventListener('click', () => {
      $(button.getAttribute('data-target')).modal('show');
    });

    container?.appendChild(button);
    button.click();
  }
}
