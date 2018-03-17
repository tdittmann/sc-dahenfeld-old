export class ImageUtils {

  public static createCssBackgroundImageString(img: string): string {
    return "url('" + img + "')";
  }

  public static removeFirstImageFromText(htmlText: string): string {
    return htmlText.replace(/<img[^>]*>/, "");
  }

}
