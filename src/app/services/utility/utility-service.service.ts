import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {
  constructor(private toastrService: ToastrService) {
  }

  public showSuccess(Message:string,Title:string): void {
    this.toastrService.success(Message,Title);
  }

  public showInfo(Message:string,Title:string): void {
    this.toastrService.info(Message,Title);
  }

  public showWarning(Message:string,Title:string): void {
    this.toastrService.warning(Message,Title);
  }

  public showError(Message:string,Title:string): void {
    this.toastrService.error(Message,Title);
  }
}
