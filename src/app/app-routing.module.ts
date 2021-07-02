import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuillComponent } from './quill/quill.component';
import { SummernoteComponent } from './summernote/summernote.component';
import { TrumbowygComponent } from './trumbowyg/trumbowyg.component';

const routes: Routes = [
  {path:'quill',component:QuillComponent},
  {path:'trumbowyg',component:TrumbowygComponent},
  {path:'summernote',component:SummernoteComponent},
  {path:'',redirectTo:'/quill',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
