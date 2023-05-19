import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { slideInRight } from 'src/animations/slideInRight';
import { MESSAGES } from 'src/app/constants/snackbar-messages';
import { PROFILE_PICTURE_VALUE } from 'src/app/constants/text';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';
import { getProfileAction } from '../profileStore/profile.action';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
  animations: [slideInRight],
})
export class ProfilePictureComponent implements OnInit {
  uiMessage = PROFILE_PICTURE_VALUE;
  pictureForm!: FormGroup;
  imageSrc;
  constructor(
    private _formBuilder: FormBuilder,
    private utility: UtilityServiceService,
    private _store:Store
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.pictureForm = this._formBuilder.group({
      image: ['', Validators.required],
    });
  }
  readURL(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(file);
    }
  }
  checkbox(event) {
    console.log(event.checked);
    if (event.checked) {
      if (this.imageSrc) {
        console.log('hii');

        this.utility.showError(MESSAGES.removePic, '');
      } else {
        this.utility.showError(MESSAGES.select_picture_error, '');
      }
      console.log('true');
      this.imageSrc = '';
      this._store.dispatch(getProfileAction({profile:this.imageSrc}))
      this.pictureForm.reset();
    }
  }

  remove() {
    this.imageSrc = '';
    this.pictureForm.reset();
  }
  submitHandler() {
    console.log(this.pictureForm);
    if (this.pictureForm.valid) {
      console.log(this.pictureForm);
      this._store.dispatch(getProfileAction({profile:this.imageSrc}))
      this.utility.showSuccess(MESSAGES.uploadPic, '');
    } else {
      this.utility.showError(MESSAGES.select_picture_error, '');
    }
  }
}
