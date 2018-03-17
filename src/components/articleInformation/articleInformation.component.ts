import {Component, Input} from "@angular/core";

// TODO tdit0703: ArticleMetadataComponent
@Component({
  selector: 'article-info',
  templateUrl: 'articleInformation.component.html'
})
export class ArticleInformationComponent {

  @Input('subHeading') subHeading: string;
  @Input('title') title: string;
  @Input('author') author: string;
  @Input('date') date: string;
  @Input('showDetails') showDetails: boolean = true;

  constructor() {

  }

}
