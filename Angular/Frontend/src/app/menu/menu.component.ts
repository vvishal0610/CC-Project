import { Component, OnInit, ViewChild} from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES} from '../shared/dishes';
import { DishService } from '../services/dish.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Feedback, academics,architecture,jobrating, degree } from '../shared/feedback';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('fform') feedbackFormDirective;

  feedbackForm: FormGroup;
  feedback: Feedback;
  degree = degree;
  academics = academics;
  architecture = architecture;
  jobrating = jobrating;

  formErrors = {
    'studentid' : '',
    'firstname': '',
    'lastname': '',
    'phone': '',
    'email': '',  
    
  };
  validationMessages = {
    'studentid': {
      'required':      'Student id is required.',
      'pattern':       'Student id must contain only numbers.'

    },
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'phone': {
      'required':      'Phone number is required.',
      'pattern':       'Phone number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      studentid: ['', [Validators.required, Validators.pattern] ],
      degree: 'Undergrad',
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      phone: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      academics: 'Very Good',
      architecture: 'Very Good',
      job: false,
      jobrating: 'Very Good',
      feedback: ''

    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now

  }
  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      studentid: '',
      degree: 'Undergrad',
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      academics: 'Very Good',
      architecture: 'Very Good',
      job: false,
      jobrating: 'Very Good',
      feedback: '',
    });this.feedbackFormDirective.resetForm();
  }
 

}
