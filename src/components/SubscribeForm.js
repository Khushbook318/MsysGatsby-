import React from 'react';
import { useForm } from "react-hook-form";
import { useMutation, gql } from '@apollo/client';
// import Alert from 'react-s-alert'
// import { useHistory } from "react-router-dom";

const SubscribeForm = () => {

    const CREATE_SUBSCRIBE_QUERY = gql`
    mutation($Subscription_Email: String!) {
        createSubscriptionForm(
          data: {
            Subscription_Email: $Subscription_Email
          }
        ){
          data {
            attributes {
              Subscription_Email
            }
          }
        }
    }
    `;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

//     const [addSubscription, { data } ] = useMutation(CREATE_SUBSCRIBE_QUERY, {
//         onCompleted(data) {
//             // console.log(data)
//             Alert.success('Form Submitted Successfully', {
//                 position: 'bottom-right'
//             });
//         },onError(errors) {
//             //const errorsslogin = errors.graphQLErrors[0].extensions.exception.data.message[0].messages[0].message            
//             Alert.error('GRAPHQL VALIDATION FAILED!!', {
//                 position: 'bottom-right'
//             });
//             //console.log(errors)
//         }
//     }
// );

    
    const [addSubscription, {data}  ] = useMutation(CREATE_SUBSCRIBE_QUERY);

    // const history = useHistory();

    const onSubscribe = (data) => {
      addSubscription({ variables: {             
        Subscription_Email: data.subscribe_email
      } });
      reset({
        subscribe_email : ""
      })
      window.location.href = '/ThankYou'
      // history.replace('./pages/ThankYou');
    }
     
    return (
        <>
            <form onSubmit={handleSubmit(onSubscribe)} id="nameForm" action="./pages/ThankYou" method="GET">
                <div className="gform_body gform-body">
                    <div id="gform_fields_3" className="gform_fields top_label form_sublabel_below description_below">
                        <div id="field_3_1" className="gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible">
                            <label className="gfield_label" for="subscribe-email">
                                Enter your business email*
                                <span className="gfield_required">
                                    <span className="gfield_required gfield_required_text"></span>
                                </span>
                                <div className="ginput_container ginput_container_email form-group">
                                    <input name="subscribe_email" className="form-control-lg" type="email" placeholder="Enter your business email*" size="40"
                                        {...register('subscribe_email', { required: true, pattern: { 
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                                                message: 'Please enter a valid email!',
                                            }
                                        })}
                                    />
                                    <span className="gfield_description validation_message gfield_validation_message">
                                        {errors.subscribe_email?.type === 'required' && "This field is required.!"}
                                        {errors.subscribe_email?.message}
                                    </span>
                                    <div className="form-group gform_footer top_label">
                                        <input type="submit" id="gform_submit_button_3" className="gform_button button" value="Subscribe"/>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SubscribeForm
