import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpService } from '../src/app/core/services/http.service';
import { HttpStubService } from './services/http-stub.service';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  exports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [
    { provide: ActivatedRoute, useValue: {} },
    { provide: Router, useValue: { navigate: (params) => {}} },
    { provide: HttpService, useClass: HttpStubService }
  ],
  declarations: []
})
export class TestingModule { }
