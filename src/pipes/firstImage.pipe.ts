import {Pipe} from "@angular/core";

@Pipe({
  name: 'firstImage'
})
export class FirstImagePipe {

  public static transform(text) {
    // Get first image in content
    let div = document.createElement('div');
    div.innerHTML = text;

    if (div.getElementsByTagName("img").length > 0) {
      return div.getElementsByTagName("img")[0].src;
    }

    return "";
  }

}
