import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpService } from '../src/app/core/services/http.service';
import { HttpStubService } from './services/http-stub.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [{ provide: HttpService, useClass: HttpStubService }],
  declarations: []
})
export class TestingModule { }
