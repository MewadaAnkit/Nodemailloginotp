import React ,{ useRef }from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Avatar } from "@mui/material";
import axios from 'axios'
 const Photo = () => {




  const fileInputRef = useRef(null);

//   const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: "dyzq3u7wx",
//   api_key: "427349121523126",
//   api_secret: "USy_zAyMrr8xXLbxuWdv9Cl6WiE",
// });

// const uploadImage = (file) => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(
//       file.path,
//       { folder: "uploads" }, // Optional: Organize uploaded images

//       (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result.url);
//         }
//       }
//     );
//   });
// };



  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log(file)
    const data = new FormData()
    data.append('file', file);
    data.append('upload_preset', "upload")
    try {
      const uploadRes = await
axios.post('https://api.cloudinary.com/v1_1/ankitmewada/image/upload',
data)
    const {url} = uploadRes.data

    } catch (error) {
      console.log(error)
    }

    fileInputRef.current.value = null;

  };
  return (
    <Container
      className="shadow p-3 mb-3 bg-body rounded"
      style={{ width: "65%", backgroundColor: "#e8e5d1", marginTop: "20px" }}
    >


<div
              style={{
                backgroundColor: "skyblue",
                width: "920px",
                borderRadius: "10px",
              }}
            >
              <h5 style={{ padding: "10px",fontFamily:'italic'
,fontSize:'30px'}}>Photo & Signature</h5>
              {/* <hr></hr> */}
            </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <div>





<Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card
          style={{
            width: "15rem",
            height: "15rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        <input
  type="file"
  accept="image/*"
  onChange={handleFileUpload}
  style={{ display: "none" }}
  ref={fileInputRef}
/>
<span
  style={{ fontSize: "7rem", cursor: "pointer" }}
  onClick={() => fileInputRef.current.click()}
>
  +
</span>
        </Card>
      </Card.Body>
    </Card>
          <Card.Text>Upload your photo here</Card.Text>
          <br></br>

        </div>



        <div>
        <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card
          style={{
            width: "15rem",
            height: "15rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <input
  type="file"
  accept="image/*"
  onChange={handleFileUpload}
  style={{ display: "none" }}
  ref={fileInputRef}
/>
<span
  style={{ fontSize: "7rem", cursor: "pointer" }}
  onClick={() => fileInputRef.current.click()}
>
  +
</span>
        </Card>
      </Card.Body>
    </Card>
          <Card.Text>Upload your documents here</Card.Text>
          <br></br>

        </div>

        <div>
        <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card
          style={{
            width: "15rem",
            height: "15rem",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <input
  type="file"
  accept="image/*"
  onChange={handleFileUpload}
  style={{ display: "none" }}
  ref={fileInputRef}
/>
<span
  style={{ fontSize: "7rem", cursor: "pointer" }}
  onClick={() => fileInputRef.current.click()}
>
  +
</span>
        </Card>
      </Card.Body>
    </Card>
          <Card.Text>Upload your signature here</Card.Text>
          <br></br>

        </div>

      </div>

      <Button style={{marginLeft:'400px'}}>Upload</Button>    </Container>
  );
};


export default Photo