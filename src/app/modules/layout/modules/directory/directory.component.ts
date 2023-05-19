import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import {
  DIRECTORY_DROPDOWN_VALUE,
  DIRECTORY_EMPLOYEE_DATA,
  DIRECTORY_VALUE,
} from 'src/app/constants/text';
import { TITLE } from 'src/app/constants/title';
import { FormServiceService } from 'src/app/services/common/form-service.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss'],
})
export class DirectoryComponent implements OnInit {
  headerValue = DIRECTORY_VALUE;
  empData = DIRECTORY_EMPLOYEE_DATA;
  dropDownData = DIRECTORY_DROPDOWN_VALUE;
  directoryFilterformGroup!: FormGroup;
  filterData;
  constructor(
    private _formBuilder: FormBuilder,
    private _formService: FormServiceService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.title.setTitle(TITLE.directory_title);
  }
  createForm() {
    this.directoryFilterformGroup = this._formBuilder.group({
      employeename: this._formService.getControl('employeename'),
      departmentname: this._formService.getControl(
        'departmentname',
        true,
        this.dropDownData[0]
      ),
    });
  }
  get directoryFilterformGroupControl() {
    return this.directoryFilterformGroup.controls;
  }

  keyup(value: any) {
    this.filterData = value.target.value;
    // this.filter(value)
  }

  filter(e: any) {
    this.empData = DIRECTORY_EMPLOYEE_DATA;
    if (e == 'All') {
      this.empData = DIRECTORY_EMPLOYEE_DATA;
      return;
    }
    if (this.filterData) {
      console.log(this.filterData, 'filterdata');

      this.empData = this.empData.filter((item) => {
        item.EMP_TECHNOLOGY == e && item.EMP_NAME == this.filterData;
      });
      this.onSubmit();
    }
    this.empData = this.empData.filter((item) => item.EMP_TECHNOLOGY == e);
  }

  onSubmit() {
    this.empData = DIRECTORY_EMPLOYEE_DATA;
    const filterValue = this.filterData.trim();
    const filterData = [];
    this.empData?.filter((option: any) => {
      if (this.directoryFilterformGroupControl.departmentname.value === 'All') {
        if (option.EMP_NAME?.toLowerCase()?.includes(filterValue)) {
          filterData.push(option);
        }
      } else {
        if (
          option.EMP_NAME?.toLowerCase()?.includes(filterValue) &&
          option.EMP_TECHNOLOGY ==
            this.directoryFilterformGroupControl.departmentname.value
        ) {
          filterData.push(option);
        }
      }
    });
    this.empData = filterData;
    return this.empData;
  }
  reset() {
    this.directoryFilterformGroup.reset();
    this.directoryFilterformGroup.controls['departmentname'].patchValue(
      this.dropDownData[0]
    );
    this.empData = DIRECTORY_EMPLOYEE_DATA;
  }
}
