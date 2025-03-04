import "./ViewProfile.css";

const ViewProfile = () => {
  return (
    <div className="view-profile">
      <div className="view-profile-inner">
        <div className="view-profile-inner">
          <div className="view-profile-inner">
            <div className="settings">
              <div className="form">
                <div className="profile">
                  <img className="avatar-icon" alt="" src="/avatar@2x.png" />
                  <div className="helena-hills-parent">
                    <div className="helena-hills">Helena Hills</div>
                    <div className="change-profile-photo">
                      Change profile photo
                    </div>
                  </div>
                </div>
                <div className="input4">
                  <div className="input-title">Username</div>
                  <div className="field">
                    <div className="label27">@username123</div>
                  </div>
                </div>
                <div className="input4">
                  <div className="input-title">Email</div>
                  <div className="field">
                    <div className="label27">email@domain.com</div>
                  </div>
                </div>
                <div className="button9">
                  <div className="save-changes">Save changes</div>
                </div>
              </div>
              <div className="profile1">Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
