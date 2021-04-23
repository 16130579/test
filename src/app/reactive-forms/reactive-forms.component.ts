import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  contact: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.contact = this.fb.group({
      name: ['', [ Validators.required, Validators.maxLength(5)]],
      social: this.fb.group({
        facebook: ['', [Validators.required]],
        email: ['', [Validators.email]]
      }),
      test: this.fb.array([''])
    });
  }
  onSubmit(){
    console.log(this.contact.value);
  }
  get test(){
    return this.contact.get('test') as FormArray;
  }
  addTest(){
    this.test.push(this.fb.control(''));
  }
  remove(index: number){
    this.test.removeAt(index);
  }
}
