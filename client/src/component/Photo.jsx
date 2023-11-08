// import React, { useRef, useState } from "react";
// import { Container, Card, Button } from "react-bootstrap";
// import { Avatar } from "@mui/material";
// import axios from 'axios'
// const Photo = () => {

//   const [photo1, setPhoto1] = useState(null);
//   const [photo2, setPhoto2] = useState(null);

//   const fileInputRef1 = useRef(null);
//   const fileInputRef2 = useRef(null);





//   const handleFileUpload = async (e , index) => {
//     const fileInputRef = index === 0 ? fileInputRef1 : fileInputRef2;
//     const file = fileInputRef.current.files[0];
//     console.log(file)
//     const data = new FormData()
//     data.append('file', file);
//     data.append('upload_preset', "upload")
//     try {
//       const uploadRes = await
//         axios.post('https://api.cloudinary.com/v1_1/ankitmewada/image/upload',
//           data)
//       const { url } = uploadRes.data
//       if (index === 0) {
//         setPhoto1(url);
//       } else if (index === 1) {
//         setPhoto2(url);
//       }
//     } catch (error) {
//       console.log(error)
//     }

//     fileInputRef.current.value = null;

//   };

//   const handleUpload = () => {

//     console.log("Photo 1 URL:", photo1);
//     console.log("Photo 2 URL:", photo2);
  
//   };
//   return (
//     <Container
//       className="shadow p-3 mb-3 bg-body rounded"
//       style={{ width: "65%", backgroundColor: "#e8e5d1", marginTop: "20px" }}
//     >


//       <div
//         style={{
//           backgroundColor: "skyblue",
//           width: "920px",
//           borderRadius: "10px",
//         }}
//       >
//         <h5 style={{
//           padding: "10px", fontFamily: 'italic'
//           , fontSize: '30px'
//         }}>Photo & Signature</h5>
//         {/* <hr></hr> */}
//       </div>
//       <div style={{ display: "flex", gap: "30px" }}>
//         <div>





//           <Card style={{ width: "18rem" }}>
//             <Card.Body>
//               <Card
//                 style={{
//                   width: "15rem",
//                   height: "15rem",
//                   borderRadius: "50%",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileUpload}
//                   style={{ display: "none" }}
//                   ref={fileInputRef1}
//                 />
//                 <span
//                   style={{ fontSize: "7rem", cursor: "pointer" }}
//                   onClick={() => fileInputRef1.current.click()}
//                 >
//                   +
//                 </span>
//               </Card>
//             </Card.Body>
//           </Card>
//           <Card.Text>Upload your photo here</Card.Text>
//           <br></br>

//         </div>





//         <div>
//           <Card style={{ width: "18rem" }}>
//             <Card.Body>
//               <Card
//                 style={{
//                   width: "15rem",
//                   height: "15rem",
//                   borderRadius: "50%",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileUpload}
//                   style={{ display: "none" }}
//                   ref={fileInputRef2}
//                 />
//                 <span
//                   style={{ fontSize: "7rem", cursor: "pointer" }}
//                   onClick={() => fileInputRef2.current.click()}
//                 >
//                   +
//                 </span>
//               </Card>
//             </Card.Body>
//           </Card>
//           <Card.Text>Upload your signature here</Card.Text>
//           <br></br>

//         </div>

//       </div>

//       <Button onClick={handleUpload} style={{ marginLeft: '400px' }}>Upload</Button>    </Container>
//   );
// };


// export default Photo

import React, { useRef, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import axios from 'axios';

const Photo = () => {
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);

  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const handleFileUpload = async (e, index) => {
    const fileInputRef = index === 0 ? fileInputRef1 : fileInputRef2;
    const file = fileInputRef.current.files[0];

    if (!file) return;

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', "upload");

    try {
      const uploadRes = await axios.post('https://api.cloudinary.com/v1_1/ankitmewada/image/upload', data);
      const { url } = uploadRes.data;

      if (index === 0) {
        setPhoto1(url);
        console.log(photo1)
      } else if (index === 1) {
        setPhoto2(url);
        console.log(photo2)
      }
    } catch (error) {
      console.log(error);
    }

    // Reset the input field after successful upload
    fileInputRef.current.value = null;
  };

  const handleUpload = async(e ) => {
    e.preventDefault();
     const userData = JSON.parse(localStorage.getItem("currentUser"));
      const studentId = userData.user;
    try {
      const response = await fetch("http://localhost:7786/api/upload/photosign   ", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentId,
          photo:photo1,
          signature:photo2
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Academic Details updated Successfully')
        console.log("Academic details updated successfully:", data);
       
      } else {
        console.error("Failed to update academic details");
      
      }
    } catch (error) {
      console.error("Error updating academic details:", error);
    
    }
  };

  return (
    <Container className="shadow p-3 mb-3 bg-body rounded" style={{ width: "65%", backgroundColor: "#e8e5d1", marginTop: "20px" }}>
      <div style={{ backgroundColor: "skyblue", width: "920px", borderRadius: "10px" }}>
        <h5 style={{ padding: "10px", fontFamily: 'italic', fontSize: '30px' }}>Photo & Signature</h5>
      </div>
      <div style={{ display: "flex", gap: "30px" }}>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card style={{ width: "15rem", height: "15rem", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 0)} style={{ display: "none" }} ref={fileInputRef1} />
                <span style={{ fontSize: "7rem", cursor: "pointer" }} onClick={() => fileInputRef1.current.click()}>+</span>
              </Card>
            </Card.Body>
          </Card>
          <Card.Text>Upload your first photo here</Card.Text>
          <br></br>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card style={{ width: "15rem", height: "15rem", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 1)} style={{ display: "none" }} ref={fileInputRef2} />
                <span style={{ fontSize: "7rem", cursor: "pointer" }} onClick={() => fileInputRef2.current.click()}>+</span>
              </Card>
            </Card.Body>
          </Card>
          <Card.Text>Upload your second photo here</Card.Text>
          <br></br>
        </div>
      </div>
      <Button onClick={handleUpload} style={{ marginLeft: '400px' }}>Upload</Button>
    </Container>
  );
};

export default Photo;
