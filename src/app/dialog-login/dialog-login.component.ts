import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Observable, BehaviorSubject, of as observableOf, merge } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {
  public errmsg: string;
  public loginform: FormGroup;
  public loggedIn = new BehaviorSubject<boolean>(false);
  constructor(
    private fb: FormBuilder,
    private authservice: AuthService,
    private router: Router,
    public dialogRef: MatDialogRef<DialogLoginComponent>,
  ) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  login() {
    // console.log(this.loginform.value);
    if (this.loginform.valid) {
      this.authservice.login(this.loginform.value)
        .subscribe(
          (res) => {
            // console.log(res);
            this.close();
            this.router.navigate(['dashboard']);
          },
          (error) => {
            console.log(error);
            this.errmsg = error;
          }
        );
    }
  }
  close(): void {
    this.dialogRef.close();
  }

}
