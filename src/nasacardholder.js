import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./nasacard";

const NasaCardHolder = () => {
    const [nasaData, setnasaData] = useState({

    });

    useEffect(() => {
        console.log("after");
      
        axios
           .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
          .then(response => {
            console.log(response);
          
            setnasaData(response.data);
          })
          .catch(error => console.log(error));
      }, []);
      console.log(nasaData);
    return (
      <div >
          <h2>nasa card holder</h2>
          <div>
      
      </div>
        <NasaCard
        key="index"
        image={nasaData}

        />
      </div>
    );

  };
  export default NasaCardHolder;



//   {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
// data:
// copyright: "Robert Q. Fugate"
// date: "2020-02-04"
// explanation: "Seeing mountain peaks glow red from inside the Grand Canyon was one of the most incredible sunset experiences of this amateur photographer's life. They appeared even more incredible later, when digitally combined with an exposure of the night sky -- taken by the same camera and from the same location -- an hour later.  The two images were taken last August from the 220 Mile Canyon campsite on the Colorado River, Arizona, USA. The peaks glow red because they were lit by an unusually red sunset.  Later, high above, the band of the Milky Way Galaxy angled dramatically down, filled with stars, nebula, and dark clouds of dust. To the Milky Way's left is the planet Saturn, while to the right is the brighter Jupiter.  Although Jupiter and Saturn are now hard to see, Venus will be visible and quite bright to the west in clear skies, just after sunset, for the next two months.    Astrophotography with Your Computer: NASA's Astrophoto Challenges"
// hdurl: "https://apod.nasa.gov/apod/image/2002/GrandCanyonSunset_Fugate_6586.jpg"
// media_type: "image"
// service_version: "v1"
// title: "A Sunset Night Sky over the Grand Canyon"
// url: "https://apod.nas