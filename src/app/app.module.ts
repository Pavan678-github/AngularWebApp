import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { QuillModule } from 'ngx-quill';
import { NgxSummernoteModule } from 'ngx-summernote';
import { NgxTrumbowygModule } from 'ngx-trumbowyg';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuillComponent } from './quill/quill.component';
import { TrumbowygComponent } from './trumbowyg/trumbowyg.component';
import { SummernoteComponent } from './summernote/summernote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuillComponent,
    TrumbowygComponent,
    SummernoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot(),
    NgxSummernoteModule,
    NgxTrumbowygModule.withConfig({
      //lang: 'hu',
      svgPath: '/assets/icons.svg',
      //removeformatPasted: true,
      autogrow: true,
      // btns: [
      //     ['formatting'],
      //     ['strong', 'em', 'del'],
      //     ['superscript', 'subscript'],
      //     ['link'],
      //     ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
      //     ['unorderedList', 'orderedList'],
      //     ['horizontalRule'],
      //     ['removeformat'],
      //     ['fullscreen']
      // ]
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
