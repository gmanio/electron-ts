import { ElectronService } from './electron';
import { Injectable } from '@angular/core';

@Injectable()
export class ElectronServiceRef extends ElectronService {

  constructor() {
    super();
  }
}
