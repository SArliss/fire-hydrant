import React from 'react'

const announcements = () => {
  return (
    <div>
      <h1>Global Announcements</h1>
      <div className="announcement">
        <div className="announcement-photo">
          <img src="https://image4.owler.com/ceo/Olivier_Pomel_owler_20190822_020224_original.jpg" alt="Oliver Pomel DataDog CEO"></img>
        </div>
        <div>
          <h3>Olivier Pomel</h3>
          <h4>Alpha Dog, CEO & Co-Founder<br></br>New York</h4>
          <p>Apr. 19, 2020<br></br>Covid 19 Update: In light of the global pandemic, all Datadog employees may work remotely in accordance with local health and safety regulations. Please reach out to your managers with individual questions. </p>
        </div>
      </div>
      <div className="announcement">
        <div className="announcement-photo">
          <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Business Partner"></img>
        </div>
        <div>
          <h3>Sinead O'Ryan</h3>
          <h4>HR Business Partner<br></br>Dublin</h4>
          <p>Mar. 17, 2020<br></br>Happy St.Patrick’s Day everyone! Have fun and stay safe!</p>
        </div>
      </div>
    </div>
  )
}

export default announcements;

