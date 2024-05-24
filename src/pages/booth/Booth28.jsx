import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Date28 from '../../components/booth/date/Date28';
import Map from '../../components/booth/map/Map';
import Category from '../../components/booth/category/Category';
import BoothList from '../../components/booth/boothList/BoothList';
import { booth } from '../../apis/api/booth';
import { boothDetail } from '../../apis/api/boothDetail';

const Booth28 = ({ date }) => {
  const [category, setCategory] = useState('부스');
  const [data, setData] = useState([]);
  const [selectedBoothId, setSelectedBoothId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    try {
      const result = await booth(date, category);
      console.log(result);
      if (Array.isArray(result)) {
        setData(result);
      } else {
        // console.error('Expected an array but got:', result);
      }
    } catch (error) {
      // console.error('Fetch data error: ', error);
    }
  };

  const handleLocationClick = async id => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const locationData = await boothDetail(id);
      setData([locationData]);
      setSelectedBoothId(id);
    } catch (e) {
      // console.log(e);
    }
  };

  const handleMarkerClick = async id => {
    try {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      const locationData = await boothDetail(id);
      setData([locationData]);
      setSelectedBoothId(id);
    } catch (e) {
      // console.log(e);
    }
  };

  const resetData = () => {
    setSelectedBoothId(null);
    fetchData();
  };

  return (
    <>
      <Date28 url1={'/booth/29'} url2={'/booth/30'} />
      <Map
        data={data}
        category={category}
        selectedBoothId={selectedBoothId}
        resetData={resetData}
        onMarkerClick={handleMarkerClick}
      />
      <Category
        category={category}
        setCategory={setCategory}
        resetData={resetData}
      />
      <BoothList
        date={date}
        category={category}
        data={data}
        onLocationClick={handleLocationClick}
      />
    </>
  );
};

export default Booth28;
