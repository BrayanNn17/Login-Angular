import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { dataRegister } from 'src/app/interfaces/interfaces.interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  public formRegister: FormGroup = this.fb.group({
  name:['', Validators.required],
  email:['', [Validators.required,Validators.email ]],
  password:['', Validators.required],
  cpassword:['',Validators.required],
  tyc:[,Validators.required]
})
  constructor(private auth: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    ///console.log(this.formRegister.value)
    if (this.formRegister.get('password')?.value != this.formRegister.get('cpassword')?.value){
     console.log("las contraseñas deben ser iguales")
     return;
    }
    const data: dataRegister = {
      nombre:this.formRegister.get('name')?.value,
      email:this.formRegister.get('email')?.value,
      password:this.formRegister.get('password')?.value


    }
    

    this.auth.register(data).subscribe(resp => {
      localStorage.setItem('token', resp.token)
    });

}


}
