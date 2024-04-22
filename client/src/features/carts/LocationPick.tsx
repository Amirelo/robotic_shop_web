import React from "react";
import { CustomImage, CustomText } from "../../components";
import { TextButton } from "../../components/buttons";
import { ic_clear } from "../../assets/icons";
import themes from "../../preferences/theme/themes";

import roads from "../../utils/roads.json";
import AddressModel from "../../models/AddressModel";
import { addressFormat } from "../../utils/Utilities";
import { useSelector } from "react-redux";

interface Props {
  onSelect?(action: string): void;
  maxHeight?: React.CSSProperties["height"];
  onSelectPressed(address: AddressModel): void;
}

const LocationPick = (props: Props) => {
  const userTheme:keyof typeof themes = useSelector((store:any) => store.user.curTheme)
  const [cities, setCities] = React.useState<Array<any>>([]);
  const [districts, setDistricts] = React.useState<Array<any>>([]);
  const [wards, setWards] = React.useState<Array<any>>([]);
  const [allRoads, setAllRoads] = React.useState<Array<any>>([]);

  const [curCity, setCurCity] = React.useState("");
  const [curDistrict, setCurDistrict] = React.useState("");
  const [curWard, setCurWard] = React.useState("");
  const [curRoad, setCurRoad] = React.useState("");
  const [roadNumber, setRoadNumber] = React.useState("");

  const onClosePressed = () => {
    props.onSelect!("CLOSE");
  };

  const onDistrictChanged = (text: string) => {
    const selectDistrict = roads.districts.filter(
      (item) => item.name == text
    )[0];
    const wards = selectDistrict.wards
      .map((item) => item.name)
      .sort((a, b) => a.localeCompare(b));
    const allRoadsTemp = selectDistrict.streets
      .map((item) => item.name)
      .sort((a, b) => a.localeCompare(b));

    setCurDistrict(selectDistrict.name);
    setWards(wards);
    setAllRoads(allRoadsTemp);
  };

  const onSelectAddressPressed = () => {
    console.log(addressFormat(new AddressModel(
        roadNumber,
        curRoad,
        curWard,
        curDistrict,
        curCity
      )))
    if (
      curCity != "" &&
      curDistrict != "" &&
      curWard != "" &&
      curRoad != "" &&
      roadNumber != ""
    ) {
      const address = new AddressModel(
        roadNumber,
        curRoad,
        curWard,
        curDistrict,
        curCity
      );
      props.onSelectPressed(address);
      console.log("Click")
    }
  };

  React.useEffect(() => {
    setCities([roads.name]);
    setCurCity(roads.name);
    const districtList = roads.districts
      .map((item) => item.name)
      .sort((a, b) => b.localeCompare(a));
    setDistricts(districtList);

    setCurDistrict(districtList[0])
    setCurWard(roads.districts[0].wards[0].name)
    setCurRoad(roads.districts[0].streets[0].name)
  }, []);

  return (
    <div
      style={{
        ...styles.background,
        backgroundColor: themes[userTheme].text + "20",
        maxHeight: props.maxHeight,
        overflow: "hidden",
      }}
    >
      <div style={{ ...styles.body,borderColor: themes[userTheme].primary, backgroundColor: themes[userTheme].background,}}>
        <CustomImage
          onClick={onClosePressed}
          src={ic_clear}
          style={{ position: "absolute", right: 16 }}
        />
        <CustomText
          style={{ textAlign: "center" }}
          preset={"title"}
          color={themes[userTheme].primary}
          fontWeight={"bold"}
          marginBottom={20}
        >
          Select Address
        </CustomText>

        <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
          <CustomText style={{ flex: 1 }}>City</CustomText>
          <select style={{ flex: 1 }}>
            {cities.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
          <CustomText style={{ flex: 1 }}>District</CustomText>
          <select
            style={{ flex: 1 }}
            onChange={(event) => onDistrictChanged(event.target.value)}
          >
            {districts.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
          <CustomText style={{ flex: 1 }}>Ward</CustomText>
          <select style={{ flex: 1 }} onChange={(event) => setCurWard(event.target.value)}>
            {wards ? (
              wards.map((item) => {
                return <option value={item}>{item}</option>;
              })
            ) : (
              <option value="">You must select district first</option>
            )}
          </select>
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 12 }}>
          <CustomText style={{ flex: 1 }}>Road</CustomText>
          <select style={{ flex: 1 }} onChange={(event) => setCurRoad(event.target.value)}>
            {allRoads ? (
              allRoads.map((item) => {
                return <option value={item}>{item}</option>;
              })
            ) : (
              <option value="">You must select district first</option>
            )}
          </select>
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
          <CustomText style={{ flex: 1 }}>Road number</CustomText>
          <input
            onChange={(event) => setRoadNumber(event.target.value)}
            placeholder="Road number"
            style={{ flex: 1 }}
          />
        </div>

        <TextButton onClicked={onSelectAddressPressed}>Select</TextButton>
      </div>
    </div>
  );
};

export default LocationPick;

const styles: { [key: string]: React.CSSProperties } = {
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    transition: "500ms",
    
    display: "flex",
    justifyItems: "center",
  },
  body: {
    width: "50%",
    
    borderWidth: 1,
    borderStyle: "solid",
    padding: 12,
    
    position: "relative",
  },
};
