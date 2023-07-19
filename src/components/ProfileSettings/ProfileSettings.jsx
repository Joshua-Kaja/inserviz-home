import Input from "../FormInput/FormInput";
import "../ProfileSettings/ProfileSettings.css"
import lock from "../Pages/assets/lock-2.svg"
import phone from "../Pages/assets/phone-2.svg";
import email from "../Pages/assets/email-2.svg";
import Location from "../Pages/assets/location.svg";
import settings from "../Pages/assets/profile-settings.svg"
import Form from 'react-bootstrap/Form';

function ProfileSettings() {
  return (
  
      <div className="form-wrapper">
        <form className="form">
          <div className="profile-head">
            <img src={settings} alt="settings" />
            <h3> Profile Settings</h3>
          </div>
          <div className="password-update-container">
            <div className="password-container-head">
              <div>Change Your Password</div>
              <div className="header-line"></div>
            </div>
            <div className="password-input-container">
              <div className="password-input1">
                <Input
                  label={"New Password"}
                  type={"password"}
                  placehoder={"Password"}
                  Img={lock}
                />
              </div>

              <div className="password-input2">
                <Input
                  label={"Confirm Password"}
                  type={"password"}
                  placehoder={"Confirm Password"}
                  Img={lock}
                />
              </div>
            </div>
            <button className="update-btn">
              
              <div className="btn-text">Update Changes</div>
            </button>
          </div>

          <div className="phone-email-container">
            <div className="phone-email-head">
              <div>Phone & Email</div>
              <div className="header-line2"></div>
            </div>

            <div className="phone-inputs">
              <div className="phone-input1">
                <Input
                  label={"Primary Number"}
                  type={"tel"}
                  placehoder={"+233*********"}
                  Img={phone}
                />
              </div>

              <div className="phone-input2">
                <Input
                  label={"Secondary Number"}
                  type={"tel"}
                  placehoder={"+233*********"}
                  Img={phone}
                />
              </div>
            </div>

            <div className="email-inputs">
              <div className="email-input1">
                <Input
                  label={"Primary Email"}
                  type={"email"}
                  placehoder={"info@example.com"}
                  Img={email}
                />
              </div>

              <div className="email-input2">
                <Input
                  label={"Secondary Email"}
                  type={"email"}
                  placehoder={"info@example.com"}
                  Img={email}
                />
              </div>
            </div>
          </div>

          <div className=" change-location-container">
            <div className="change-location-head">
              <div>
                
              </div>Change Location</div>

            <div className="locationInput-container">
              <Input
                type={"text"}
                label={"Location"}
                placehoder={"Kumasi, Block-C, Road-3/20"}
                Img={Location}
                
              />
            </div>
            <div className="privacy-security-container">
              <div className="privacy-security-wrapper">
                <div className="privacy-security">Privacy & Security</div>
              
                <div className="header-line"></div>
          
              </div>
              

              <div className="job-resume">
                <div className="job-alert">
                  <div>All Job Alert</div>

                  <div>
                    <label class="toggle-switch">
                    <input type="checkbox" id="toggle-button" />
                    <span class="slider"></span>
                    </label>
                    {/* */}
                  </div>
                </div>

                <div className="resume-visible">
                  <div>Resume Visibility</div>

                  <div>
                  <label class="toggle-switch">
                  <input type="checkbox" id="toggle-button" />
                  <span class="slider"></span>
                  </label>
                  </div>
                </div>
              </div>
              <div className="delect-disable-container">
                <div className="disable-account-container">
                  <div className="disable-account">
                     <div>Disable Account</div> 

                    <div className="label">
                      <label class="toggle-switch">
                      <input type="checkbox" id="toggle-button" />
                      <span class="slider"></span>
                      </label>
                    </div>

                  </div> 
                  <div className="disable-text">
                    If you log in again you will be able to see all the match
                    jobs and get all information
                  </div>

                  <div className="label2">
                      <label class="toggle-switch">
                      <input type="checkbox" id="toggle-button" />
                      <span class="slider"></span>
                      </label>
                    </div>
                </div>

                <div className="delect-account-container">
                  <div className="delect-account-wrapper">
               
                    <div className="delect-account-head">Delect Account</div>
                    {/* <div className="delect-account">Delect Account</div>  */}
                      
                  </div>
                  <div className="delect-account-text">
                  If you delete your account, you will no longer be able to
                      get information about the matched jobs.
                      <span className="delete">Delete Account</span>
                      
                  </div>

                 
                  <button className="update-btn2">Update Changes</button>
                </div>
              </div>
              
            </div>
          </div>

          

        </form>
      </div>
  );
}
export default ProfileSettings
