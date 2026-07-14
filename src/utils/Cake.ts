export class Cake {
  title: string;
  imgSrc: string;
  content: string;
  categories: string[];

  constructor(title: string, imgSrc: string, content: string, categories: string[]) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.content = content;
    this.categories = categories;
  }
}
