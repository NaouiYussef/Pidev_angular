import { Component, OnInit } from '@angular/core';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from "../user/user";
import { UserService } from '../user/user.service';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SlaService} from "./sla.service";
import {Sla} from "./Sla";


@Component({
  selector: 'create-sla',
  templateUrl: './sla.component.html',
  styleUrls: ['./sla.component.css']
})
export class SlaComponent implements OnInit {
  file: File;
  form: FormGroup;
  user: User = new User();
  userInfo: User = new User();
  constructor(private http: HttpClient,private userService: UserService, private fb: FormBuilder, private slaService: SlaService) {
    this.form = this.fb.group({
      providerMail: ['', Validators.required],
      file: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    this.userService.getUserInfo().subscribe(
      (data) => {
        this.userInfo = data;


      },
      (error) => {
        console.log(error);
      }
    );
  }

  onFileChange(event: Event): void {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length) {
      this.file = fileInput.files[0];
    }
  }

  onSubmit() {
    const formData = new FormData();
    const userId = this.user.idUser || this.userInfo.idUser;;
    formData.append('file', this.file);
    formData.append('providerMail', this.form.value.providerMail);

    this.http
      .post(`http://localhost:8080/addSla/${userId}`, formData)
      .subscribe(() => {
        console.log('SLA uploaded successfully');
        // Do something on success
      }, (error) => {
        console.error('Error uploading SLA', error);
        // Do something on error
      });
  }

  // edit() {
  //   const formData = new FormData();
  //   const userId = this.user.idUser || this.userInfo.idUser;
  //   const slaId = this.
  //   formData.append('file', this.file);
  //   formData.append('providerMail', this.form.value.providerMail);
  //
  //   this.http
  //     .put(`http://localhost:8081/editSla/${this.slaId}/${userId}`, formData)
  //     .subscribe(
  //       () => {
  //         console.log('SLA edited successfully');
  //         // Do something on success
  //       },
  //       (error) => {
  //         console.error('Error editing SLA', error);
  //         // Do something on error
  //       }
  //     );
  // }

}
