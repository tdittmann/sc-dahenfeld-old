import {Component, Input} from "@angular/core";

@Component({
  selector: 'article-metadata',
  templateUrl: 'articleMetadata.component.html'
})
export class ArticleMetadataComponent {

  @Input('subHeading') subHeading: string;
  @Input('title') title: string;
  @Input('author') author: string;
  @Input('date') date: string;
  @Input('showDetails') showDetails: boolean = true;

  constructor() {

  }

}
