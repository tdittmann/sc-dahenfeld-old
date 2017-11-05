import {Component, Input} from "@angular/core";
import {PhotoViewer} from "@ionic-native/photo-viewer";
import {environment} from "../../environments/environment";

@Component({
  selector: "leadimage",
  templateUrl: "leadimage.component.html"
})
export class LeadImageComponent {

  @Input('src') imageSrc: string = "";
  @Input('imgPosition') imgPosition: string = "Center";

  constructor(private photoViewer: PhotoViewer) {

  }

  openImageInViewer(): void {
    // Local images does not work with photo viewer
    if (this.imageSrc.includes(environment.siteUrl)) {
      // This regex only uses the link to the image instead of complete css
      this.photoViewer.show(this.imageSrc.match(/"(.*?)"/)[1], "", {share: false});
    }
  }

}
