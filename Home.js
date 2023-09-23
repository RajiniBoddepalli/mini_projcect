import { useEffect, useState } from "react";
// import image1 from "./hostel8.png"
import image2 from "./hostel2.png"
import image3 from "./hostel3.png"
import image4 from "./hostel6.png"
import './Home.css'

function Home() {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([ image2, image3, image4])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 2 ? selectedImage + 1 : 0)
    }, 3000)
  }, [])

  return (
    <div>
      <img width={1450} height={580} src={allImages[selectedImage]} style={{opacity:0.3}} /> <br />
      
      <div><h1 className="header">VISHNU HOSTEL EMPORIUM</h1>
      <h4 className="sec">Home Away From Home</h4></div>
      {/* <button
        onClick={() => {
          if (selectedImage > 0)
            setSelectedImage(selectedImage - 1)
        }}
      ></button> */}

      {/* <button
        onClick={() => {
          if (selectedImage < allImages.length - 1)
            setSelectedImage(selectedImage + 1)
        }}
      ></button> */}

    </div>
  );
}

export default Home;



