import React, { useState } from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import "./acc.css"

export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
  };
  return (
    <div className="flex flex-col ">
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500 ">
          Picture
        </div>
        <label for="file" class="label-file">choose a picture</label>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          
          <input id="file" class="input-file" type="file"   multiple onChange={handleImageChange}></input>
          
          <div className="result">{renderPhotos(selectedFiles)}</div>
        
        </div>
       



      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
          Description
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <textarea
            placeholder="write somthing ........."
            className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
          >

          </textarea>

        </div>
      </div>
    </div>
  );
}

