import { useState } from "react";
import { useStepperContext } from "../../contexts/StepperContext";
import DateTimePicker from 'react-datetime-picker';
export default function Payment() {
  const { userData, setUserData } = useStepperContext();
  const [value, onChange] = useState(new Date());
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Coast
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
          type={"number"}
          required
            onChange={handleChange}
            value={userData["coast"] || ""}
            name="coast"
            placeholder="Coast"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
        realization Date
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
        <DateTimePicker   
        onChange={onChange} 
        value={value} 
        />
        </div>
      </div>
      
    </div>
  );
}
