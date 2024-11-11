import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { StoreServiceService } from '../../services/store-service.service';
import { NotificationService } from '../../services/notifications.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  error: string = '';
  registration_form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private store: StoreServiceService,
    private notificationService: NotificationService,
    private router : Router) { }

  ngOnInit(): void {
    this.registration_form = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      phone: [''],
      password: ['', Validators.required],
      passwordCheck: ['', Validators.required],
    },
      {
      validators: this.passwordsMatchValidator()
    });
    
  }

  passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const password = control.get('password');
    const passwordCheck = control.get('passwordCheck');
    if (password && passwordCheck && password.value !== passwordCheck.value) {
      return { 'passwordsMismatch': true };
    }
    return null;
  };
  }
  
  register() {
    let data: any = {};
    if (this.registration_form.valid) {
      data = {
        first_name: this.registration_form.value.first_name,
        last_name: this.registration_form.value.last_name,
        email: this.registration_form.value.email,
        phone: this.registration_form.value.phone,
        address: this.registration_form.value.address,
        password: this.registration_form.value.password
      }

      this.store.postData('registration', data).subscribe(
        response => {
          this.router.navigate(['/login']).finally(() =>{
            this.notificationService.show(response.message);
          })
        },
        error => { console.log(error) }
      )
    }
  }
}
