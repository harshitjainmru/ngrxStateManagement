import { Injectable } from '@angular/core';
import { FRESHER_TRAINING_DATA } from '../constants/text';

@Injectable({
  providedIn: 'root'
})
export class TrainingDataService {
headerValue = FRESHER_TRAINING_DATA
  constructor() { }
}
