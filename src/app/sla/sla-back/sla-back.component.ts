import { Component, OnInit } from '@angular/core';
import {Sla} from "../Sla";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {SlaService} from "../sla.service";
import {User} from "../../user/user";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  form: FormGroup;
  user: User = new User();
  userInfo: User = new User();

  constructor(private http: HttpClient, private fb: FormBuilder, private slaService: SlaService) {
    this.form = this.fb.group({
      providerMail: ['', Validators.required],
      file: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getSlas();
  }


  public getSlas(): void {
    const url = `http://localhost:8080/admin/SlaAll`; // construct the URL
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
   edit() {
     const formData = new FormData();
    const userId = this.user.idUser || this.userInfo.idUser;
    formData.append('file', this.file);
    formData.append('providerMail', this.form.value.providerMail);
  
    this.http
     .put(`http://localhost:8080//sla/updateSLA`, formData)
     .subscribe(
       () => {
           console.log('SLA edited successfully');
          // Do something on success
      },
         (error) => {
          console.error('Error editing SLA', error);
         // Do something on error
         }
       );
   }

  downloadSla(id: number) {
    const headers = new HttpHeaders().set('Accept', 'application/pdf');
    return this.http.get('http://localhost:8080/downloadSla/' + id, { headers, responseType: 'arraybuffer' })
      .subscribe(response => {
        const blob = new Blob([response], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `sla-${id}.pdf`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
  }
  
  public onOpenModal(employee: Sla): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    //this.downloadSla(employee.id);

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
