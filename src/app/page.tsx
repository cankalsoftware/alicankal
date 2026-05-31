"use client";

import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import About from "../Components/About";
import Resume from "../Components/Resume";
import Portfolio from "../Components/Portfolio";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import { FullResumeSchema } from "../types/resume";

export default function Home() {
  const [resumeData, setResumeData] = useState<Partial<FullResumeSchema>>({});

  useEffect(() => {
    fetch(`/resumeData.json?v=${new Date().getTime()}`)
      .then((res) => res.json())
      .then((data: FullResumeSchema) => {
        setResumeData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Contact data={resumeData.main} />
      <Footer data={resumeData.main} />
    </div>
  );
}
