import React, { useEffect } from "react";
import {
  Container,
  Button,
  TextField,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { signInStart } from "../../redux/user/user.action";
import Alert from "@material-ui/lab/Alert";
import { URL } from "../../config";
import { Helmet } from "react-helmet";
import "./privacy-policy.styles.css";

const useStyles = makeStyles((theme) => {
  return {
    btnRoot: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      fontSize: 16,
    },
    btnFacebook: {
      backgroundColor: "#3B5998",
    },
    btnGoogle: {
      backgroundColor: "#CD2900",
    },
  };
});

function PrivacyPolicy() {
  const { currentUser, isFetching, error } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      history.push(`${URL}/customer`);
    }
  }, [currentUser]);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Privacy Policy | Pix Me A Drink`}</title>
        <link rel="canonical" href={`https://pixmeadrink.com/privacy-policy`} />
      </Helmet>
      <div className="container">
         
          <Container maxWidth="lg">
          <h1 className="page-heading">Privacy Policy</h1>
              <div className="content">
              <p className="para">The following is the Privacy Policy of Pix Me A Drink which describes and informs the site visitors about our policies of collection, use, and disclosure of Personal Information if anyone decides to use our Service.</p>
              <p className="para">If you choose to use our Service, you agree to the collection and use of the information described in this Policy. Please note that the Personal Information we collect is used for providing and improving our Service. Moreover, we will not use or share your information with anyone except as described in this Privacy Policy. </p>
              <h3 className="para">Personal Information We Collect</h3>
              <p className="para">We have the right to collect your Personal Information, which you provide us while browsing our site, app or using our Service. The Personal Information that we collect includes your device information, IP address, cookies on your web browser, and the web pages that referred you to our site. Additionally, we will collect data, such as location and time zone</p>
              <p className="para">We use different methods and technologies to collect Personal Information. These include Log Data, Cookies, and Google Analytics</p>
              <p className="para">You have the option to accept or refuse cookies and know when a cookie is being sent to your device. However, if you choose to refuse our cookies, you may become ineligible to use some portions of our Service. </p>
              <h3 className="para">How We Use Personal Information</h3>
              <p className="para">We use your information in various ways to provide the Service and operate our business and commercial purposes. This includes:</p>
              <ul className="list-first">
                <li>For purposes about which we notify you and which include your consent.</li>
                <li>To operate, enhance, maintain, and provide the Service features. </li>
                <li>To perform Services requested by you, such as responding to your comments and questions. </li>
                <li>To analyze and understand the trends and preferences of our users in order to improve our Service, marketing efforts, app, and other products, and to create and modify new features and functionality. </li>
                <li>To contact you for administrative purposes, e.g., customer service, technical notices for updates, security alerts, information regarding our policies.</li>
                <li>To send promotional materials, offers, messages related to the Service and partners, vendors, and advertisers’ activities whom we work with. </li>
                <li>To address a breach of policies or terms, threats of harm, and fraud. </li>
                <li>To develop and provide advertisement, direct marketing, communications, content, and information about our offers, promotions, rewards, events, and services. </li>
                <li>To track your entries, submissions, and status in any promotions or other activities, including verifying your eligibility and delivering prizes in connection with your entries.</li>
                <li>To conduct research, including surveys and groups. </li>
              </ul>

              <h3 className="para">Third-Party Integrations</h3>
              <p className="para">We may employ third-party companies and personnel for the following reasons:</p>
              <ul className="list-second">
                <li>To aid in our Service.</li>
                <li>To provide the Service on our behalf.</li>
                <li>To perform Service-related services.</li>
                <li>To assist us in analyzing how our Service is used.</li>
              </ul>

              <p className="para">Please note that third-party companies may access your Personal Information to perform the tasks we assign to them. They are obligated not to disclose or use the information for any other purpose.</p>

              <h3 className="para">Security of Personal Information</h3>
              <p className="para">We prioritize your priority. Therefore, we always strive to use commercially acceptable means of protecting it. However, please remember that no transmission mode over the internet or the entire electronic storage is 100% secure and reliable. Thus, we cannot guarantee fool-proof security, nor will we be responsible if a security breach happens out of our managerial control. </p>

              <h3 className="para">Links to Other Sites</h3>
              <p className="para">This site and Service may contain links to other sites. You will be directed to the site you click on, but please note that the external sites are not managed or operated by us. We strongly recommend reviewing the sites’ Privacy Policy when you visit. We have no control whatsoever and assume no responsibility for the content, privacy policies, or practices of any third-party site or services you may find and click via our site.</p>

              <h3 className="para">Children Under the Age of 13</h3>
              <p className="para">We do not knowingly collect or use data from children under 13. Furthermore, our site is not intended for use by minors. In case we discover that a child under 13 has provided us with Personal Information, we immediately delete the information from our servers. By using our site, you agree that you are of the legal age to be eligible for using this site. If you are a parent or guardian, and you are aware that your child has given us Personal Information, please contact us so that we can initiate the necessary actions.</p>

              <h3 className="para">Changes to the Privacy Policy</h3>
              <p className="para">We may update our Privacy Policy from time to time and without any prior notice. Therefore, it is your responsibility to review this page frequently and periodically to observe any changes we have made. We will notify you of any changes by posting the new Privacy Policy on this page. However, we are under no obligation to do so. The changes are effective immediately after they are posted on this page. So, if you are using this site after our Privacy Policy is updated, it constitutes your acceptance of the changes.</p>

              <h3 className="para">Contact Us</h3>
              <p className="para">If you have any questions or suggestions about our Privacy Policy, please contact us at (216) 965-3010 or send us your query at <strong>info@pixmeadrink.com</strong>.</p>

              </div>
          </Container>
        </div>
   
    </Container>
  );
}

export default PrivacyPolicy;
