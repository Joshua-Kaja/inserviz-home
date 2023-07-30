import React from "react";

const FeatureCard = ({ image }) => {
  return (
    <div className="m-4">
      <div className="card border-0 shadow-sm p-3" style={{ width: "24rem" }}>
        <img
          src={
            image ||
            "https://template.inserviz.com/assets/images/bg/job-list-1.png"
          }
          alt=""
          className="rounded"
        />

        <div className="d-flex align-items-start mt-4">
          <div>
            <img
              src="https://template.inserviz.com/assets/images/bg/company-logo/company-01.png"
              alt=""
              className="rounded-circle"
              style={{ width: "3rem", height: "3rem" }}
            />
          </div>
          <div className="d-flex flex-column mx-3">
            <h5 className="mb-0">Wordpress Developer</h5>
            <div className="d-flex">
              <p className="text-secondary text-nowrap">Bistro Tech Ltd</p>
              <p className="text-nowrap mx-4">
                <span>Deadline</span>:{" "}
                <span className="text-secondary">2 April, 2023</span>
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-0" />

        <div className="d-flex align-items-center flex-nowrap mb-3">
          <div
            className="rounded-circle bg-light border"
            style={{ width: "0.8rem", height: "0.8rem" }}
          ></div>
          <div className="mx-2">
            <span className="fw-semibold text-secondary">Salary: </span>{" "}
            <span>$60K-$90K /</span>{" "}
            <span className="text-secondary">Per hour</span>
          </div>
        </div>
        <div className="d-flex align-items-center flex-nowrap mb-3">
          <div
            className="rounded-circle bg-light border"
            style={{ width: "0.8rem", height: "0.8rem" }}
          ></div>
          <div className="mx-2">
            <span className="fw-semibold text-secondary">Experience: </span>{" "}
            <span>3-3.5 Years</span>{" "}
          </div>
        </div>
        <div className="d-flex align-items-center flex-nowrap mb-3">
          <div
            className="rounded-circle bg-light border"
            style={{ width: "0.8rem", height: "0.8rem" }}
          ></div>
          <div className="mx-2">
            <span className="fw-semibold text-secondary">Location: </span>{" "}
            <span>Dhaka,</span> <span>Bangladesh</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button type="button" class="btn_card">
            Full Time
          </button>
          <div className="rounded-circle ">
            <button type="button" class="btn-sm rounded-pill btn btn-outline-primary">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
