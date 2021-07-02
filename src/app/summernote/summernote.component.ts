import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summernote',
  templateUrl: './summernote.component.html',
  styleUrls: ['./summernote.component.css']
})
export class SummernoteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //requires httpclient module
  config = {
    placeholder: '',
    tabsize: 2,
    height: 200,
    uploadImagePath: '/api/upload',
    toolbar: [
        ['misc', ['codeview', 'undo', 'redo']],
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontname', 'fontsize', 'color']],
        ['para', ['style', 'ul', 'ol', 'paragraph', 'height']],
        ['insert', ['table', 'picture', 'link', 'video', 'hr']]
    ],
    fontNames: ['Helvetica', 'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Roboto', 'Times']
  }

}
