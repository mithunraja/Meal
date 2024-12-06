import call from "@/assets/front/images/call.svg";
import contactBackground from "@/assets/front/images/contact-bg.jpg";
import send from "@/assets/front/images/letter-send.svg";
import mail from "@/assets/front/images/mail.svg";
import Layout from "@/components/front/include/Layout";
import Social from "@/components/front/include/Social";
import { contactFormService, contactInfoService } from "@/services/common.service";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import style from "./index.module.scss";

const Contact = ({ contactInfoResponse }) => {

  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {

      const response = await contactFormService(data);
      
      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.response,
      });
      
      console.log("Form Submitted Successfully:", response);
      reset();
    } catch (error) {
      const errorMessage = error.response?.data || "Something went wrong. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Error Submitting Form",
        text: JSON.stringify(errorMessage),
      });

      console.error("Error submitting form:", error.message);
    }

  };

  return (
    <>
      <Layout>
        <section className={style.contactCection}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>צור קשר</h2>
              </div>
              <div className="col-12">
                <div className={`d-flex flex-wrap ${style.contactBg}`}>
                  <div className={style.contactRight}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row g-5">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className={style.contactRightBox}>
                            <label>שם פרטי</label>
                            <input
                              type="text"
                              placeholder=""
                              className={style.input}
                              {...register("fname", { required: true })}
                              aria-invalid={errors.fname ? "true" : "false"}
                            />
                            {errors.fname?.type === 'required' && <p role="alert" className="text-danger">First name is required</p>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className={style.contactRightBox}>
                            <label>שם משפחה</label>
                            <input
                              type="text"
                              placeholder=""
                              className={style.input}
                              {...register("lname", { required: true })}
                              aria-invalid={errors.lname ? "true" : "false"}
                            />
                            {errors.lname?.type === 'required' && <p role="alert" className="text-danger">Last name is required</p>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className={style.contactRightBox}>
                            <label>טלפון</label>
                            <input
                              type="text"
                              placeholder=""
                              className={style.input}
                              {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                  value: /^[0-9]{10,15}$/, // Adjust the regex for your requirements
                                  message: "Phone number must be between 10 and 15 digits",
                                },
                              })}
                            />
                            {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className={style.contactRightBox}>
                            <label>אימייל</label>
                            <input
                              type="text"
                              placeholder=""
                              className={style.input}
                              {...register("email", {
                                required: true,
                                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                              })}
                            />
                              {errors.email && errors.email.type === "required" && (
                                <p className="text-danger">Email is required</p>
                              )}
                              {errors.email && errors.email.type === "pattern" && (
                                <p className="text-danger">Email is not valid</p>
                              )}
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className={style.contactRightBox}>
                            <h4>הודעה</h4>
                            <textarea
                              placeholder="הקלד את הודעתך כאן..."
                              className={style.textarea}
                              {...register("msg")}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="d-flex justify-content-center">
                            <button className={style.sendingBtn}>שליחה</button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* letter-send .svg */}
                    <div className={style.sendIcon}>
                      <Image
                        alt=""
                        src={send}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div
                    className={`d-flex align-content-between flex-wrap ${style.contactLeft}`}
                    style={{ backgroundImage: `url(${contactBackground.src})` }}
                    dir="ltr"
                  >
                    <div className={style.contactLeftTop}>
                      <h3>מוזמנים לדבר ישירות עם שירות הלקוחות שלנו:</h3>
                      <div className={style.contactMail}>
                        <ul>
                          <li>
                            <span>
                              <Image
                                alt=""
                                src={call}
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </span>{" "}
                            {contactInfoResponse?.site_phone || '055-5555555'} 
                          </li>
                          <li>
                            <span>
                              <Image
                                alt=""
                                src={mail}
                                width={0}
                                height={0}
                                sizes="100vw"
                              />
                            </span>{" "}
                            {contactInfoResponse?.site_email || 'Flavoritebizz@gmail.com'}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className={style.contactLeftBottom}>
                      <Social socialLink={contactInfoResponse} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;

export async function getServerSideProps() {
  try {
    const contactInfoResponse = await contactInfoService();
    //console.log("Contact Info Response:", contactInfoResponse);
    return { 
      props: { 
        contactInfoResponse
      } 
    };
  } catch (error) {
    console.error("Error fetching contact info:", error.message);
    return { 
      props: { 
        contactInfoResponse: {},
      } 
    };
  }
}




