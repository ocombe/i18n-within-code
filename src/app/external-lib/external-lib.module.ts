import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EXTERNAL_DEFS} from "./external-lib-i18n-defs";

@NgModule({
  imports: [
    CommonModule
  ],
  translations: [EXTERNAL_DEFS]
})
export class ExternalLibModule { }
