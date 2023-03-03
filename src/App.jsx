import { useEffect } from 'react';
import { useState } from 'react';
import Icons from './components/Icons';
import {IconosSvg} from './components/IconosSvg';



function App() {
  const [search, setSearch] = useState('Príncipe');
  const [values, setValues] = useState('');
  const [icon, setIcon] = useState('');
  const [isDay, setIsDay] = useState(null);

  const APIKEY = '0fe4154f020fc3a77fb75ef4f6adc149';
  const URL = ` https://api.openweathermap.org/data/2.5/weather?q=${search}&lang=es&units=metric&appid=${APIKEY}`;

  const getData = async () => {
    await fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        if (data.cod >= 400) {
          setValues(false);
        } else {
          setIcon(data.weather[0].main);
          setValues(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleSearch = (e) => {
    
    if(e.key === "Enter"){
      console.log(e.target.value);
      setSearch(e.target.value)
      
    }
    
    
  };
  
  useEffect(() => {
    if (values) {
      const now = new Date().getTime() / 1000;
      if (now > values.sys.sunrise && now < values.sys.sunset) {
        setIsDay(true);
      } else {
        setIsDay(false);
      }
    }
  }, [values]);
  

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <div className='bg-white/70 border  shadow-xl flex flex-col gap-8 pt-4 pb-12 items-center justify-center  rounded-3xl w-[26rem] h-[52rem] '>
      <div className=' '>
        <input
          type='text'
          autoFocus
          onKeyDown={handleSearch}
          className='outline-none border rounded-xl text-gray-500 py-1 px-6 bg-gray-100 '
        />
      </div>

      <div className='h-[90%] w-full flex  justify-center '>
        {values ? (
          <div className='text-gray-500 font-bold flex flex-col w-full px-10 items-center h-[80%] '>
            <div className='flex items-end justify-between w-full  '>
              <h1 className='text-6xl text-gray-500 font-bold '>{values.name}</h1>
              <IconosSvg  />
            </div>

<IconosSvg />
            <p className='text-9xl  text-gray-600'>
              {values.main.temp.toFixed(0)}&deg;
            </p>
            <img src={Icons(icon)} alt='icono' className='w-72  mb-10' />

            <div className='text-xl flex justify-evenly w-full'>
              <p className='text-7xl '>
                {values.main.temp_min.toFixed(0)}&deg;
              </p>
              <p className='text-7xl '>
                {values.main.temp_max.toFixed(0)}&deg;
              </p>
              
            </div>
          </div>
        ) : (
          <h2>{'City not found'}</h2>
        )}
      </div>
    </div>
  );
}

export default App;
