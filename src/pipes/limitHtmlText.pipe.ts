import {Pipe} from "@angular/core";

@Pipe({
  name: 'limitHtmlText'
})
export class LimitHtmlText {

  transform(text, limit) {
    // Get first image in content
    let div = document.createElement('div');
    div.innerHTML = text;

    let content = "";
    let changedString = String(text).replace(/<[^>]+>/gm, '');

    if (changedString.length > limit) {
      content += changedString.substr(0, limit - 1) + " ...";
    } else {
      content += changedString;
    }

    return content;
  }

}
