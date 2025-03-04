import React from "react";

const Resume = ({ resumeData = {} }) => {
  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
        <p>{resumeData?.description ?? ""}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>{resumeData?.summary?.name ?? "N/A"}</h4>
              <p>
                <em>{resumeData?.summary?.intro ?? ""}</em>
              </p>
              <ul>
                {resumeData?.summary?.details?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            {resumeData?.education?.map((edu, index) => (
              <div key={index} className="resume-item">
                <h4>{edu.degree}</h4>
                <h5>{edu.year}</h5>
                <p>
                  <em>{edu.institution}</em>
                </p>
                <p>{edu.description}</p>
              </div>
            ))}
            <h3 className="resume-title">Certifications</h3>
            {resumeData?.certifications?.map((cert, index) => (
              <div key={index} className="resume-item">
                <h4>{cert.name}</h4>
                <h5>{cert.year}</h5>
                <p>
                  <em>{cert.institution}</em>
                </p>
              </div>
            ))}
            <h3 className="resume-title">Languages</h3>
            <ul>
              {resumeData?.languages?.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            {resumeData?.experience?.map((exp, index) => (
              <div key={index} className="resume-item">
                <h4>{exp.title}</h4>
                <h5>{exp.year}</h5>
                <p>
                  <em>{exp.company}</em>
                </p>
                <ul>
                  {exp.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="row mt-4" data-aos="fade-up" data-aos-delay="300">
          <div className="col-lg-6">
            <h3 className="resume-title">Projects</h3>
            <ul>
              {resumeData?.projects?.map((exp, index) => (
                <div key={index} className="resume-item">
                  <h4>{exp.title}</h4>
                  <ul>
                    {exp?.responsibilities?.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ul>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Leadership</h3>
            <ul>
              {resumeData?.leadership?.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
