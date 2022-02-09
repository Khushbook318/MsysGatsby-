import React from "react"
import { useForm } from "react-hook-form";
import { useMutation, gql } from '@apollo/client'
import Alert from 'react-s-alert'
import "font-awesome/css/font-awesome.min.css"
import SubscribeForm from "./SubscribeForm";

const SectionSeeUsAction = (props) => {

  const CREATE_TALKOUR_QUERY = gql`
  mutation($Name: String!, $Business_Email: String!, $Phone_Number: Long, $How_do_you_know_aboutUs: String, $Requirement_in_Brief: String) {
      createFormSection(
        data: {
          Name: $Name, 
          Business_Email: $Business_Email, 
          Phone_Number:$Phone_Number, 
          How_do_you_know_aboutUs:$How_do_you_know_aboutUs, 
          Requirement_in_Brief:$Requirement_in_Brief,
        }
      ){
        data {
          attributes {
            Business_Email
          }
        }
      }
  }
  `;

  // const CREATE_SUBSCRIBE_QUERY = gql`
  // mutation($Subscription_Email: String!) {
  //     createSubscriptionForm(
  //       data: {
  //         Subscription_Email: $Subscription_Email
  //       }
  //     ){
  //       data {
  //         attributes {
  //           Subscription_Email
  //         }
  //       }
  //     }
  // }
  // `;

      const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
      const [addTalkOurExperts, { data } ] = useMutation(CREATE_TALKOUR_QUERY, {
              onCompleted(data) {
                  // console.log(data)
                  Alert.success('Form Submitted Successfully', {
                      position: 'bottom-right'
                  });
              },onError(errors) {
                  //const errorsslogin = errors.graphQLErrors[0].extensions.exception.data.message[0].messages[0].message            
                  Alert.error('GRAPHQL VALIDATION FAILED!!', {
                      position: 'bottom-right'
                  });
                  //console.log(errors)
              }
          }
      );
      
      const onSubmit = (data) => {
          addTalkOurExperts({ variables: { 
              Name: data.name,             
              Business_Email: data.email,
              Phone_Number: data.phone_number ? data.phone_number : '0',
              How_do_you_know_aboutUs: data.how_you_knowabout,
              Requirement_in_Brief: data.requirement_Inbrief 
          } });
          reset({
            name: "",             
            email: "",
            phone_number: "",
            how_you_knowabout: "",
            requirement_Inbrief: "" 
          })
      };

      // const [addSubscription, { data1 } ] = useMutation(CREATE_SUBSCRIBE_QUERY);

      // const onSubscribe = (data1) => {
      //   addSubscription({ variables: {             
      //     Subscription_Email: data1.subscribe_email
      //   } });
      // }

  return (
    <>
      <section className="sectionSeeUsAction tbPadd80" id="talk-sdc">
        <div className="container containerModified">
          <div className="row justify-content-md-center">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-7 seeInActionLeftCol">
                  <div className=" d-flex h-100 ">
                    <div className="align-self-center w-100">
                      <div className="seeInActionLeftColInner  mx-auto ">
                        <div className="wow slideInLeft" data-wow-duration="1500">
                          <h2 className="h2Title blueTitle">
                            {props.Title}
                          </h2>{" "}
                          <div className="CTAemailPhoneDiv">
                            <div className="CTAemailPhoneDivLeft">
                              <i className="fa fa-envelope" aria-hidden="true"></i>{" "}
                              <a href="/cdn-cgi/l/email-protection#85e8e4f7eee0f1ecebe2c5e8f6fcf6f1e0e6edebeae9eae2ece0f6abe6eae8">
                                <span className="__cf_email__" data-cfemail="2f424e5d444a5b4641486f425c565c5b4a4c474140434048464a5c014c4042">
                                  {props.email}
                                </span>
                              </a>
                            </div>
                            <div className="CTAemailPhoneDivRight">
                              <i className="fa fa-mobile" aria-hidden="true"></i>{" "}
                              <a href="tel:+1 844 415 0777">
                                +{props.phone} (Toll-Free)
                              </a>
                            </div>
                          </div>
                          <div className="stayConnectedDiv">
                            <h4 className="blueTitle">{props.subTitle}</h4>
                            <p>{props.description}
                            </p>
                            <div className="subscribFormBottom">
                              <div className="gf_browser_chrome gform_wrapper gravity-theme" id="gform_wrapper_3">
                                <div id="gf_3" className="gform_anchor" tabindex="-1"></div>
                                <SubscribeForm />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 seeInActionRightCol " data-aos="fade-up" data-aos-duration="1500">
                  <div className=" d-flex h-100 ">
                    <div className="align-self-center w-100 ">
                      <div className="seeInActionRightColInner mx-auto">
                        <div className="wow slideInRight" data-wow-duration="1500">
                          <h4>Talk to Our Engineering Experts</h4>
                          <div className="talkToExpForm">
                            <div className="gf_browser_chrome gform_wrapper gravity-theme" id="gform_wrapper_1">
                              <div id="gf_1" className="gform_anchor" tabindex="-1"></div>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                  <input name="name" className="form-control mb-0" placeholder="Name"
                                    {...register('name', { required: true })}
                                  />
                                  <span className="error_validation">
                                    {errors.name?.type === 'required' && "Field is required!"}
                                  </span>
                                </div>
                                <div className="form-group">
                                  <input name="email" className="form-control mb-0" type="email" placeholder="Business Email Id"
                                    {...register('email', { required: true, pattern: { 
                                      value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                                      message: 'Please enter a valid email!',
                                      }
                                    })}
                                  />
                                  <span className="error_validation">
                                    {errors.email?.type === 'required' && "Email is required!"}
                                    {errors.email?.message}
                                  </span>
                                </div>
                                <div className="form-group">
                                  <input name="phone_number" type="text" className="form-control mb-0" placeholder="Phone Number"
                                    {...register('phone_number', { required: false })}
                                  />
                                </div>
                                <div className="form-group">
                                  <select name="how_you_knowabout" className="form-control mb-0" {...register('how_you_knowabout', { required: false })}>
                                    <option value="">How do you know about us*</option>
                                    <option value="Google or other search">Google or other search</option>
                                    <option value="Word of mouth/ Reference">Word of mouth/ Reference</option>
                                    <option value="Press releases">Press releases</option>
                                    <option value="Corporate newsletter">Corporate newsletter</option>
                                    <option value="Article or blog post">Article or blog post</option>
                                    <option value="Twitter">Twitter</option>
                                    <option value="LinkedIn">LinkedIn</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Other">Other</option>
                                  </select>
                                  <span className="error_validation">
                                    {errors.how_you_knowabout?.type === 'required' && "Field is required!"}
                                  </span>
                                </div>
                                <div className="form-group textArea_style">
                                  <textarea placeholder="Requirement in Brief" name="requirement_Inbrief" className="form-control"
                                    {...register('requirement_Inbrief', { required: true })}>
                                  </textarea>
                                  <span className="error_validation">
                                    {errors.requirement_Inbrief?.type === 'required' && "Field is required!"}
                                  </span>
                                </div>
                                <div className="form-group text-center">
                                  <input type="submit" className="gform_button button" value="Start Free Assessment" />
                                </div>
                              </form>
                            </div>
                            {/* <iframe
                              style={{
                                display: "none",
                                width: "0px",
                                height: "0px",
                              }}
                              src="about:blank"
                              name="gform_ajax_frame_1"
                              id="gform_ajax_frame_1"
                              title="This iframe contains the logic required to handle Ajax powered Gravity Forms."
                            ></iframe> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SectionSeeUsAction
