import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [profile, setProfile] = useState(data); // 프로필 데이터
  const [value, setValue] = useState(0); // 프로필 index
  console.log(profile);

  return (
    <section>
      <h2>경력</h2>
      <div className="tabs">
        {
          profile.map((item, key) => {
            return (
              <button 
                key={key}
                onClick={()=>{
                  setValue(key);
                }}
                // .btn | 조건부 .btn-selected 추가
                className={`btn ${key === value && 'btn-selected'}`}
              >{item.company}</button>
            )
          })
        }
      </div>
      <article className='job-info'>
        <h3>{profile[value].title}</h3>
        <p className='date'>{profile[value].dates}</p>
        <p className="company">업체명: {profile[value].company}</p>
        <div className="duty">
          {profile[value].duties.map((duty, key) => {
            return (
              <p key={key}>{duty}</p>
            )
          })}
        </div>
      </article>
    </section>
  );
}

export default App;
