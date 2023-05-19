import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ABS_LAYOUT_DSR } from 'src/app/constants/absolute-routes';
import { DSR_DETAIL, EDIT_DSR } from 'src/app/constants/text';
import { UtilityServiceService } from 'src/app/services/utility/utility-service.service';
import { getUpdateDsrDataAction } from '../../store/dsr.action';
import { GET_DSR_DATA_SELECTOR } from '../../store/dsr.selector';

@Component({
  selector: 'app-edit-dsr',
  templateUrl: './edit-dsr.component.html',
  styleUrls: ['./edit-dsr.component.scss'],
})
export class EditDsrComponent implements OnInit {
  uiText = EDIT_DSR;
  editDSRForm!: FormGroup;
  detailId;
  trainingDetailData;
  table_data: any;
  dataSource = new MatTableDataSource<any>();

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _store: Store<{ Data }>,
    private _router:Router,
    private notificationService:UtilityServiceService
  ) {}

  ngOnInit(): void {
    this.detailId = this._activatedRoute.snapshot.paramMap.get('id');
    this.makeForm();

    this._store.select(GET_DSR_DATA_SELECTOR).subscribe((data: any) => {
      this.table_data = data[this.detailId - 1];
      this.editDSRForm.patchValue(this.table_data);
    });
  }

  makeForm() {
    this.editDSRForm = this._formBuilder.group({
      projectname: [''],
      date: [''],
      hours: [''],
      dsr: [''],
    });
  }
  get editFormControl() {
    return this.editDSRForm.controls;
  }

  onUpdate() {
    this.notificationService.showSuccess("DSR Updated SuccesFully", "");
    this.table_data = {
      ...this.table_data,
      ...this.editDSRForm.value,
    };
    let upDatedDSR = {
      value: this.table_data,
      id: this.detailId,
    };
    console.log(upDatedDSR,'upDatedDSR');

    this._store.dispatch(getUpdateDsrDataAction(upDatedDSR));
    this._router.navigate([ABS_LAYOUT_DSR.fullUrl]);
  }
}
