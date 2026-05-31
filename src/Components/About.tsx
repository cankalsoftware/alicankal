import React, { useState } from "react";
import { MainData } from "../types/resume";

interface AboutProps {
  data?: MainData;
}

const About = ({ data }: AboutProps) => {
  const [showFullBio, setShowFullBio] = useState(false);

  if (!data) return null;

  const name = data.name;
  const profilepic = "images/" + data.image;
  const bio = data.bio;
  const street = data.address.street;
  const city = data.address.city;
  const state = data.address.state;
  const zip = data.address.zip;
  const phone = data.phone;
  const email = data.email;

  const handlePrint = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.print();
  };

  const getBioContent = () => {
    if (!bio) return null;
    if (showFullBio) return bio;
    // Truncate to ~300 chars or first few sentences
    const limit = 300;
    if (bio.length <= limit) return bio;
    return bio.substring(0, limit) + "...";
  };

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p className="hide-on-print" style={{ whiteSpace: 'pre-line' }}>
            {getBioContent()}
            {bio && bio.length > 300 && (
              <span
                onClick={() => setShowFullBio(!showFullBio)}
                style={{ color: '#11ABB0', cursor: 'pointer', marginLeft: '10px' }}
              >
                {showFullBio ? "Read Less" : "Read More"}
              </span>
            )}
          </p>
          <p className="hide-on-screen" style={{ whiteSpace: 'pre-line' }}>
            {bio}
          </p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={data.resumedownload || '#'} className="button" onClick={handlePrint}>
                  <i className="fa fa-download"></i>Download PDF
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
