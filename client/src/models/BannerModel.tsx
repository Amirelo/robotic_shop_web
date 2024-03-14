class BannerModel {
  id: string;
  title: string;
  description: string;
  image: string;
  status: boolean;
  constructor(
    id: string,
    title: string,
    description: string,
    image: string,
    status: boolean
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.status = status;
  }
}

export default BannerModel;
