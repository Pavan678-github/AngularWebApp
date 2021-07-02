import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  quillConfig = {
    toolbar: [
      ['bold','italic','underline','strike'],
      ['blockquote','code-block'],
      [{list: 'ordered'}, {list: 'bullet'}],
      [{header: [1,2,3,4,5,6,false]}],
      [{color:[]}, {background:[]}],
      ['link'],['clean']
    ]
  }

}
