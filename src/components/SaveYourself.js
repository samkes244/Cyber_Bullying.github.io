import React from "react";
import "./SaveYourself.css";
function SaveYourself() {
  return (
    <div className="saveyourself">
      <div className="saveyouself_container">
        <h1>How To Save YourSelf</h1>
        <img
          src="
        http://onlinesense.org/wp-content/uploads/2016/04/How-to-Protect-Yourself-from-Cyberbullies-1.jpg
        "
          alt=""
          className="saveyourself_img"
        />
        <h3>
          The following tips can help you protect yourself from cyberbullying
          and stay safe online:
        </h3>
        <div className="saveyourself_adv">
          <ul>
            <li>keep your passwords private, even from your friends</li>
            <li>
              learn about privacy settings and reporting features on social
              media
            </li>
            <li>be mindful of what you post and share online</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SaveYourself;
