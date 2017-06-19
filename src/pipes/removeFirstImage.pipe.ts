import {Pipe} from "@angular/core";

@Pipe({
  name: 'removeFirstImage'
})
export class RemoveFirstImagePipe {

  transform(text) {
    return text.replace(/<img.*?\/>/, '');
  }

}
