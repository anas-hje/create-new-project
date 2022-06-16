import React, { useState   }  from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import "./acc.css"


export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  //////////////////////////////////////////////////////
 
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
    <div className="divcfirst ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Project Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          required
            onChange={handleChange}
            value={userData["name"] || ""}
            name="name"
            placeholder="project name ....."
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="divsecond">
        <div className="divthird ">
          Picture
        </div>
        <label for="file" class="label-file">choose a picture</label>
        <div className="divforth">
          
          <input id="file" class="input-file" type="file"   multiple onChange={handleImageChange}></input>
          
          <div className="result">{renderPhotos(selectedFiles)}</div>
        
        </div>
       



      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        benifits
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          required
            onChange={handleChange}
            value={userData["benifits"] || ""}
            name="benifits"
            placeholder="benifits ....."
            type="text"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="divfirst">
        <div className="divthird">
           Description
        </div>
        <div className="divthird">
          <textarea
            placeholder="Describe your Project idea ..............."
            className="divforth"
          >

          </textarea>

        </div>
      </div>
    </div>
  );
}

