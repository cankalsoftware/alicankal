import React from "react";
import ExpandableSection from "./ExpandableSection";
import {
  ResumeData,
  EducationItem,
  WorkItem,
  SkillItem,
  CertificationItem,
  HonorItem,
  VolunteeringItem,
  CourseItem
} from "../types/resume";

interface ResumeProps {
  data?: ResumeData;
}

const Resume = ({ data }: ResumeProps) => {
  if (!data) return null;

  const { skillmessage, education, work, skills, certifications, honors, volunteering, courses } = data;

  return (
    <section id="resume">
      <div className="resume-section-wrapper">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <ExpandableSection<EducationItem>
                  items={education}
                  renderItem={(edu) => (
                    <div key={edu.school}>
                      <h3>{edu.school}</h3>
                      <p className="info">
                        {edu.degree} <span>&bull;</span>
                        <em className="date">{edu.graduated}</em>
                      </p>
                      <p style={{ whiteSpace: 'pre-line' }}>{edu.description}</p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section-wrapper">
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <ExpandableSection<WorkItem>
              items={work}
              renderItem={(job) => (
                <div key={job.company}>
                  <h3>{job.company}</h3>
                  <p className="info">
                    {job.title}
                    <span>&bull;</span> <em className="date">{job.years}</em>
                  </p>
                  <p style={{ whiteSpace: 'pre-line' }}>{job.description}</p>
                </div>
              )}
            />
          </div>
        </div>
      </div>

      <div className="resume-section-wrapper">
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ExpandableSection<SkillItem>
                items={skills}
                mode="list"
                className="skills"
                renderItem={(skill) => {
                  const className = "bar-expand " + (skill.name ? skill.name.toLowerCase() : '');
                  return (
                    <li key={skill.name}>
                      <span style={{ width: skill.level }} className={className}></span>
                      <em>{skill.name}</em>
                    </li>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section-wrapper">
        <div className="row certifications">
          <div className="three columns header-col">
            <h1>
              <span>Certifications</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <ExpandableSection<CertificationItem>
                  items={certifications}
                  renderItem={(cert) => (
                    <div key={cert.name}>
                      <h3>{cert.name}</h3>
                      <p className="info">
                        {cert.authority}
                        <span>&bull;</span> <em className="date">{cert.date}</em>
                      </p>
                      <p>{cert.license}</p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section-wrapper">
        <div className="row honors">
          <div className="three columns header-col">
            <h1>
              <span>Honors</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <ExpandableSection<HonorItem>
                  items={honors}
                  renderItem={(honor) => (
                    <div key={honor.title}>
                      <h3>{honor.title}</h3>
                      <p className="info">
                        {honor.issuer}
                        <span>&bull;</span> <em className="date">{honor.date}</em>
                      </p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section-wrapper">
        <div className="row volunteering">
          <div className="three columns header-col">
            <h1>
              <span>Volunteering</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <ExpandableSection<VolunteeringItem>
                  items={volunteering}
                  renderItem={(vol) => (
                    <div key={vol.organization}>
                      <h3>{vol.organization}</h3>
                      <p className="info">
                        {vol.role}
                        <span>&bull;</span> <em className="date">{vol.date}</em>
                      </p>
                      <p style={{ whiteSpace: 'pre-line' }}>{vol.description}</p>
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-section-wrapper">
        <div className="row courses">
          <div className="three columns header-col">
            <h1>
              <span>Courses</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <ExpandableSection<CourseItem>
              items={courses}
              mode="list"
              className="courses-list"
              renderItem={(course) => (
                <li key={course.name}>
                  <div className="course-item">
                    <h5>{course.name}</h5>
                    <p className="course-number">{course.number}</p>
                  </div>
                </li>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
