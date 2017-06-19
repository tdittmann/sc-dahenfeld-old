import {Pipe} from "@angular/core";

@Pipe({
  name: 'firstImage'
})
export class FirstImagePipe {

  public static transform(text) {
    // Get first image in content
    let div = document.createElement('div');
    div.innerHTML = text;
    return div.getElementsByTagName("img")[0].src;
  }

}
