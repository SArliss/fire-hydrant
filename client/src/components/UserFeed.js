import React from 'react'
import FeedForm from './FeedForm'
import Announcements from './Announcements'


export default function UserFeed () {
        return (

          <div className = "user-feed-container">
          <div className="user-feed">
              <FeedForm/>
              </div>
          {/* <div className="user-feed-announcements">
            <Announcements/>
          </div> */}

     </div>
)
}
