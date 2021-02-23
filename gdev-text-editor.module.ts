import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GdevTextEditorRoutingModule } from './gdev-text-editor-routing.module';
import { GdevClassicEditorComponent } from './gdev-classic-editor/gdev-classic-editor.component';
import { CKEditorModule } from './ckeditor/ckeditor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GdevClassicEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GdevTextEditorRoutingModule,
    CKEditorModule
  ], 
  exports: [
    GdevClassicEditorComponent  
  ]
})
export class GdevTextEditorModule { }
