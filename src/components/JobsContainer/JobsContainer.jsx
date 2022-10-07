import React from "react";
import "./JobsContainer.css";
// import source from "";

const JobsContainer = ({ jobs }) => {
  return (
    <div className="jobsContainer">
      {jobs.map((job) => (
        <div
          className={`jobContainer ${job.featured ? "featured" : ""}`}
          key={job.id}
        >
          <div className="left">
            <img src={require(`../../Images/${job.logo}`)} alt="" />
          </div>
          <div className="middle">
            <span className="company-name">{job.company}</span>
            {job.new ? <span className="new">New!</span> : <span></span>}
            {job.featured ? (
              <span className="featured-div">Featured</span>
            ) : (
              <span></span>
            )}
            <h6>{job.position}</h6>
            <span className="post-time">{job.postedAt}</span>
            <span className="type">{job.contract}</span>
            <span className="location">{job.location}</span>
          </div>
          <div className="right">
            <p>{job.role}</p>
            <p>{job.level}</p>
            {job.languages.map((language) => (
              <p>{language}</p>
            ))}
            {job.tools.map((tool) => (
              <p>{tool}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsContainer;
