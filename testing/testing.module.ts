import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpService } from '../src/app/core/services/http.service';
import { HttpStubService } from './services/http-stub.service';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HttpClientModule],
  providers: [{ provide: HttpService, useClass: HttpStubService }],
  declarations: []
})
export class TestingModule { }
