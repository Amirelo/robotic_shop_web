class AddressModel {
  roadNumber: string;
  road: string;
  ward: string;
  district: string;
  city: string;

  constructor(
    roadNumber: string,
    road: string,
    ward: string,
    district: string,
    city: string
  ) {
    this.roadNumber = roadNumber;
    this.road = road;
    this.ward = ward;
    this.district = district;
    this.city = city;
  }
}

export default AddressModel