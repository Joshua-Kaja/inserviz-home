import React from "react";
import author1 from "../Pages/assets/author1.png";
import { ProfileData } from "../Data/Profile";
import "./ProfileJobs.css";
import AppliedJob from "../AppliedJobsTable/AppliedJob";

const ProfileJobs = () => {
  return (
    <div className="profile_Jobs">
      <div className="profile_header">
        <div className="profile_img">
          <img src={author1} alt="" />
        </div>
        <div className="profile_name_header">
          <div className="profile_text">
            <span>Hello, I'm </span>
            <div className="profile_empty" style={{ marginTop: "4px" }}></div>
          </div>
          <div className="profile_name">
            <span>JACOLINE Frankly</span>
          </div>
        </div>
      </div>
      <div className="profile_container">
        {ProfileData.map((profile) => (
          <div className="profile_category" key={profile.id}>
            <div className="profile_inbox">
              <div className="none"></div>
              <img className="profile_icon" src={profile.icon} alt="" />
            </div>
            <div className="profile_desc">
              <span className="profile_title">{profile.title}</span>
              <div className="counter">
                <span className="num_counter">{profile.counter}</span>
                <span>+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="applied_Jobs">
        <AppliedJob />

      </div>
    </div>
  );
};

export default ProfileJobs;
