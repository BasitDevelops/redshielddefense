"use client";
import Link from "next/link";
import { MdChatBubbleOutline, MdMailOutline } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";

const contact_data = [
  
  {
    id: 1,
    icon: <MdMailOutline />,
    title: "Send Us an Email",
    des: (
      <>
        Simply drop us an email at contact@redshielddefense.com and you&apos;ll
        receive a reply within 24 hours
      </>
    ),
    btn: "Email Us",
  },
  {
    id: 2,
    icon: <TbDeviceLandlinePhone />,
    title: "Make a Call",
    des: (
      <>
        Give us a ring. Our Experts are standing by monday to friday from 9am to
        5pm EST.
      </>
    ),
    btn: "+358 44 5040308",
  },
];

const ContactArea = () => {
  return (
    <section className="contact-area">
      <div className="contact-info-wrapper">
        <div className="container">
          <div className="row justify-content-around">
            {contact_data.map((item) => (
              <div
                key={item.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-8"
              >
                <div className="contact-info-item text-center">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div className="contact-info-content">
                    <h5 className="title">{item.title}</h5>
                    <p>{item.des}</p>
                    <Link href="#" className="contact-info-link">
                      {item.btn}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact-form-wrap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-10">
              <div className="section-title text-center mb-50">
                <h2 className="title">Questions or Comments? Get in Touch</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xxl-8 col-xl-9 col-lg-10">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form text-center"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                      />
                    </div>
                  </div>
                  <div className="form-grp">
                    <textarea
                      name="message"
                      id="message"
                      required
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="btn">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;
