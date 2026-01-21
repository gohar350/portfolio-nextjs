import React from "react";

const AIExpertise = ({ aiExpertise = [], aiWorkflow = [] }) => {
  return (
    <section id="ai-expertise" className="ai-expertise section">
      <div className="container section-title" data-aos="fade-up">
        <h2>AI & Claude Expertise</h2>
        <p className="highlight-badge">
          <i className="bi bi-lightning-charge-fill"></i> 5x Development Speed
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {aiExpertise?.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <div className="ai-card">
                <div className="ai-card-icon">
                  <i className={item.icon}></i>
                </div>
                <div className="ai-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="ai-card-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {aiWorkflow && aiWorkflow.length > 0 && (
          <div className="ai-workflow-section" data-aos="fade-up" data-aos-delay="400">
            <h3 className="workflow-title">
              <i className="bi bi-diagram-3"></i> AI-Assisted Development Workflow
            </h3>
            <div className="workflow-container">
              {aiWorkflow.map((item, index) => (
                <div key={index} className="workflow-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <span className="step-title">{item.step.replace(/^\d+\.\s*/, "")}</span>
                    <span className="step-desc">{item.desc}</span>
                  </div>
                  {index < aiWorkflow.length - 1 && (
                    <div className="step-arrow">
                      <i className="bi bi-arrow-right"></i>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIExpertise;
