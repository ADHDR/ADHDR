import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

const LoginSignup = () => {
  const navigate = useNavigate();

  const onTextLinkClick = useCallback(() => {
    navigate("/form-forgot-password");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="loginsignup">
      <div className="log-in-sign-up-page" />
      <div className="mask-group">
        <div className="char-10">
          <img className="vector-icon" alt="" src="/vector.svg" />
          <img className="group-icon" alt="" src="/group.svg" />
          <img className="group-icon1" alt="" src="/group1.svg" />
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <img className="group-icon2" alt="" src="/group2.svg" />
          <img className="vector-icon2" alt="" src="/vector2.svg" />
          <img className="group-icon3" alt="" src="/group3.svg" />
          <img className="group-icon4" alt="" src="/group4.svg" />
          <img className="vector-icon3" alt="" src="/vector3.svg" />
          <img className="vector-icon4" alt="" src="/vector4.svg" />
          <img className="vector-icon5" alt="" src="/vector5.svg" />
          <img className="vector-icon6" alt="" src="/vector6.svg" />
          <img className="vector-icon7" alt="" src="/vector7.svg" />
          <img className="vector-icon8" alt="" src="/vector8.svg" />
          <img className="vector-icon9" alt="" src="/vector9.svg" />
          <img className="vector-icon10" alt="" src="/vector10.svg" />
          <img className="vector-icon11" alt="" src="/vector11.svg" />
          <img className="vector-icon12" alt="" src="/vector12.svg" />
          <img className="vector-icon13" alt="" src="/vector13.svg" />
          <img className="vector-icon14" alt="" src="/vector14.svg" />
          <img className="vector-icon15" alt="" src="/vector15.svg" />
          <img className="vector-icon16" alt="" src="/vector16.svg" />
          <img className="vector-icon17" alt="" src="/vector17.svg" />
          <img className="vector-icon18" alt="" src="/vector18.svg" />
          <img className="vector-icon19" alt="" src="/vector19.svg" />
          <img className="vector-icon20" alt="" src="/vector20.svg" />
          <img className="vector-icon21" alt="" src="/vector21.svg" />
          <div className="group">
            <img className="vector-icon22" alt="" src="/vector22.svg" />
            <img className="vector-icon23" alt="" src="/vector23.svg" />
            <img className="vector-icon24" alt="" src="/vector24.svg" />
            <img className="vector-icon25" alt="" src="/vector25.svg" />
            <img className="vector-icon26" alt="" src="/vector26.svg" />
            <img className="vector-icon27" alt="" src="/vector27.svg" />
            <img className="vector-icon28" alt="" src="/vector28.svg" />
            <img className="vector-icon29" alt="" src="/vector29.svg" />
            <img className="vector-icon30" alt="" src="/vector30.svg" />
            <img className="vector-icon31" alt="" src="/vector31.svg" />
            <img className="vector-icon32" alt="" src="/vector32.svg" />
            <img className="vector-icon33" alt="" src="/vector33.svg" />
            <img className="vector-icon34" alt="" src="/vector34.svg" />
            <img className="vector-icon35" alt="" src="/vector35.svg" />
            <img className="vector-icon36" alt="" src="/vector36.svg" />
            <img className="vector-icon37" alt="" src="/vector37.svg" />
            <img className="vector-icon38" alt="" src="/vector38.svg" />
            <img className="vector-icon39" alt="" src="/vector39.svg" />
            <img className="vector-icon40" alt="" src="/vector40.svg" />
            <img className="vector-icon41" alt="" src="/vector41.svg" />
            <img className="vector-icon42" alt="" src="/vector42.svg" />
            <img className="vector-icon43" alt="" src="/vector43.svg" />
            <img className="vector-icon44" alt="" src="/vector44.svg" />
            <img className="vector-icon45" alt="" src="/vector45.svg" />
            <img className="vector-icon46" alt="" src="/vector46.svg" />
            <img className="vector-icon47" alt="" src="/vector47.svg" />
            <img className="group-icon5" alt="" src="/group5.svg" />
            <img className="vector-icon48" alt="" src="/vector48.svg" />
            <img className="vector-icon49" alt="" src="/vector49.svg" />
            <img className="vector-icon50" alt="" src="/vector50.svg" />
            <img className="vector-icon51" alt="" src="/vector51.svg" />
            <div className="div10">05.00</div>
            <img className="group-icon6" alt="" src="/group6.svg" />
          </div>
        </div>
      </div>
      <div className="page-accordion-parent">
        <div className="page-accordion">
          <div className="text-content-heading">
            <div className="heading">Login</div>
            <div className="subheading">Welcome back</div>
          </div>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title">
                <div className="title1">Log in</div>
                <img className="chevron-up-icon" alt="" src="/chevron-up.svg" />
              </div>
              <div className="accordion-content">
                <div className="body">
                  Answer the frequently asked question in a simple sentence, a
                  longish paragraph, or even in a list.
                </div>
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-log-in">
          <div className="input-field">
            <div className="label11">Email</div>
            <div className="description">Description</div>
            <div className="input">
              <div className="value">Value</div>
            </div>
            <div className="error">Error</div>
          </div>
          <div className="input-field">
            <div className="label11">Password</div>
            <div className="description">Description</div>
            <div className="input">
              <div className="value">Value</div>
            </div>
            <div className="error">Error</div>
          </div>
          <div className="button-group">
            <div className="button">
              <img className="star-icon" alt="" src="/star.svg" />
              <div className="button1">Button</div>
              <img className="star-icon" alt="" src="/x.svg" />
            </div>
            <div className="button2">
              <img className="star-icon" alt="" src="/star1.svg" />
              <div className="button1">Sign In</div>
              <img className="star-icon" alt="" src="/x1.svg" />
            </div>
          </div>
          <div className="text-link">
            <div className="text-link1" onClick={onTextLinkClick}>
              Forgot password?
            </div>
          </div>
        </div>
        <div className="page-accordion1">
          <div className="text-content-heading">
            <div className="heading">Sign up</div>
            <div className="subheading" />
          </div>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-title">
                <div className="title1">Log in</div>
                <img className="chevron-up-icon" alt="" src="/chevron-up.svg" />
              </div>
              <div className="accordion-content">
                <div className="body">
                  Answer the frequently asked question in a simple sentence, a
                  longish paragraph, or even in a list.
                </div>
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className="accordion-item1">
              <div className="accordion-title1">
                <div className="title1">Title</div>
                <img
                  className="chevron-down-icon"
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-register">
          <div className="input-field">
            <div className="label11">Email</div>
            <div className="description">Description</div>
            <div className="input">
              <div className="value">Value</div>
            </div>
            <div className="error2">Error</div>
          </div>
          <div className="input-field">
            <div className="label11">Password</div>
            <div className="description">Description</div>
            <div className="input">
              <div className="value">Value</div>
            </div>
            <div className="error2">Error</div>
          </div>
          <div className="checkbox-field">
            <div className="checkbox-and-label">
              <div className="checkbox">
                <img className="check-icon" alt="" src="/check.svg" />
              </div>
              <div className="body">Label</div>
            </div>
            <div className="description-row">
              <div className="check-icon" />
              <div className="body">Description</div>
            </div>
          </div>
          <div className="button-group">
            <div className="button">
              <img className="star-icon" alt="" src="/star2.svg" />
              <div className="button1">Button</div>
              <img className="star-icon" alt="" src="/x2.svg" />
            </div>
            <div className="button6">
              <img className="star-icon" alt="" src="/star3.svg" />
              <div className="button1">Register</div>
              <img className="star-icon" alt="" src="/x3.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="button8" onClick={onButtonContainerClick}>
        <div className="back-to-home">Back to Home</div>
      </div>
    </div>
  );
};

export default LoginSignup;
