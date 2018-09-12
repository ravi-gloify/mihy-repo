import {
  getCommonCard,
  getCommonTitle,
  getCommonParagraph,
  getTextField,
  getSelectTextField,
  getCommonContainer
} from "../../utils";

export const tradeLocationDetails = getCommonCard({
  header: getCommonTitle("Please Provide Trade Location Details"),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  tradeDetailsConatiner: getCommonContainer({
    tradeLocPropertyID: getTextField(
      "Property ID",
      "Enter Property ID",
      false,
      ""
    ),
    tradeLocCity: getSelectTextField("City", "Select City", false, ""),
    tradeLocDoorHouseNo: getTextField(
      "Door/House No.",
      "Enter Door/House No.",
      false,
      ""
    ),
    tradeLocBuilidingName: getTextField(
      "Building/Colony Name",
      "Enter Building/Colony Name",
      false,
      ""
    ),
    tradeLocStreetName: getTextField(
      "Street Name",
      "Enter Street Name",
      false,
      ""
    ),
    tradeLocMohalla: getTextField("Mohalla", "Enter Mohalla", true, ""),
    tradeLocPincode: getTextField("Pincode", "Enter Pincode", false, ""),
    tradeLocGISCoord: getTextField(
      "GIS Coordinates",
      "Select your trade location on map",
      false,
      ""
    ),
    tradeLocElectricity: getTextField(
      "Electricity Connection No.",
      "Enter Electricity Connection No. of Trade Loaction",
      false,
      ""
    )
  })
});