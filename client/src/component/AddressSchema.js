import * as Yup from "yup";

const   AddressSchema = Yup.object().shape({
    Address1: Yup.string().required("Address1 is required"),
    Address2: Yup.string().required("Address2 is required"),
    Country: Yup.string().required("Country is required"),
    State: Yup.string().required("State is required"),
    District: Yup.string().required("District is required"),
    PinCode: Yup.string().required("Pin Code is required"),





    Address11: Yup.string().required("Address1 is required"),
    Address22: Yup.string().required("Address2 is required"),
    Country1: Yup.string().required("Country is required"),
    State1: Yup.string().required("State is required"),
    District1: Yup.string().required("District is required"),
    PinCode1: Yup.string().max(6).min(6).required("Pin Code is required")
});

export default AddressSchema