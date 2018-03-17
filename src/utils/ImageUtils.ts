export class ImageUtils {

  public static createCssBackgroundImageString(img: string): string {
    return "url('" + img + "')";
  }

  public static getFirstImageFromText(htmlText: string): string {
    // Get first image in content
    let div = document.createElement('div');
    div.innerHTML = htmlText;

    if (div.getElementsByTagName("img").length > 0) {
      return ImageUtils.createCssBackgroundImageString(div.getElementsByTagName("img")[0].src);
    }

    return "";
  }

  public static removeFirstImageFromText(htmlText: string): string {
    return htmlText.replace(/<img[^>]*>/, "");
  }

}
