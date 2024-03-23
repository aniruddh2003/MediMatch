"use client"
import GlobalApi from '@/app/_utils/GlobalApi';
import React, {useState, useEffect} from 'react' 
import DoctorDetails from './_components/DoctorDetails';
import Suggestion from './_components/Suggestion';

const Details = ({params}) => {
  const id = params.recordId;
  const [doctor, setDoctor] = useState([]);
  const getDoctor = (id) => {
    GlobalApi.getDoctor(id).then((res) => {
      console.log(res.data.data);
      setDoctor(res.data.data);
    });
  };
  useEffect(() => {
    getDoctor(id);
  }, []);
  return (
    <div className='p-5 md:px-15'>
      <h2 className="font-bold text-2xl py-3">Details</h2>
      <div className="grid grid-cols-1 xl:grid-cols-4">
        <DoctorDetails doctor={doctor} />
        <Suggestion doctor={doctor} id={id} />
      </div>
    </div>
  )
}

export default Details
