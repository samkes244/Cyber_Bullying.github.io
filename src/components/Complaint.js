import React from "react";
import "./Complaint.css";
function Complaint() {
  return (
    <div className="complaint">
      <div className="complaint_content_holder">
        <h1>Ways To Complaint </h1>
        <img
          src="https://media.istockphoto.com/vectors/complaint-document-concept-vector-id985558462?k=6&m=985558462&s=612x612&w=0&h=iGZ6izOkSk58YC1BE8Mod3FP0_GdSargHn1uLRHpGSM="
          alt=""
          className="complaint_img"
        />
      </div>

      {/* 1st image and step */}

      <div className="complaint_container">
        <h2>Step 1</h2>
        <img
          src="https://www.wikihow.com/images/thumb/3/33/Report-Cyberbullying-Step-1.jpg/v4-460px-Report-Cyberbullying-Step-1.jpg.webp"
          alt=""
          className="complaint_images"
        />
        <h3>
          <strong>Send a message telling the bully to stop.</strong>
          Make sure that the bully knows that what they have done is not
          appropriate. This probably won’t stop the bullying, but it will help
          you make your case to the authorities. Make sure to save the message.
        </h3>
        <ul>
          <li>
            Keep your message simple and direct. Write, “Please do not contact
            me again. I will report any emails, texts, calls, messages, or posts
            from you.”
          </li>
          <li>Avoid profanity, name calling, or using all caps.</li>
        </ul>
      </div>

      {/* 2nd image and step */}
      <div className="complaint_container">
        <h2>Step 2</h2>
        <img
          src="
          https://www.wikihow.com/images/thumb/7/78/Report-Cyberbullying-Step-2.jpg/v4-460px-Report-Cyberbullying-Step-2.jpg.webp
          "
          alt=""
          className="complaint_images"
        />
        <h3>
          <strong>
            End communication with the bully after telling them to stop.
          </strong>
          Even if you’ve asked the bully to stop, you might continue to receive
          messages. It’s normal to be tempted to respond and stick up for
          yourself, but don’t. It might take some willpower, but you should
          refuse to engage.
        </h3>
        <ul>
          <li>
            Put down your phone or walk away from your computer. Take a walk
            around the block to cool off, if you need to.
          </li>
        </ul>
      </div>
      {/* 3rd image and step  */}
      <div className="complaint_container">
        <h2>Step 3</h2>
        <img
          src="
          https://www.wikihow.com/images/thumb/3/38/Report-Cyberbullying-Step-3.jpg/v4-460px-Report-Cyberbullying-Step-3.jpg.webp
          "
          alt=""
          className="complaint_images"
        />
        <h3>
          <strong>Block the bully.</strong>
          Change the settings on your email, cell phone, and social media
          accounts so that the bully can’t contact you. This will make it harder
          for the bully to contact you. If they still find a way to reach you,
          you’ll know that it is definitely time to talk to the authorities.
        </h3>
      </div>
      {/* 4th image and step  */}
      <div className="complaint_container">
        <h2>Step 4</h2>
        <img
          src="
          https://www.wikihow.com/images/thumb/b/b1/Report-Cyberbullying-Step-4.jpg/v4-460px-Report-Cyberbullying-Step-4.jpg.webp
          "
          alt=""
          className="complaint_images"
        />
        <h3>
          <strong>Make copies of contacts from the bully.</strong>
          Do not delete messages or posts in hopes that the bullying will just
          stop. Instead, collect the evidence to use when you make a report to
          the authorities. If you have a printer, make copies of all emails,
          messages, and posts.
        </h3>
        <ul className="complaint_ul_last">
          <li>
            Take screenshots of all electronic communications from the bully.
            Save them in a file on your computer or phone.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Complaint;
