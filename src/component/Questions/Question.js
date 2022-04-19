import React from 'react';
import { Accordion } from 'react-bootstrap';

const Question = () => {
    return (
        <div className='my-5 mx-5'>
           <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
    <Accordion.Body>
     
                <strong> What is Authentication ?</strong>
                        Authentication is the process of identifying users and validating who they claim to be.One of the most common and obvious factors to authenticate identity is a password.
                        <br /><br />
                   < strong > What is Authorization ?</strong><br />
                        Authorization happens after a user identity has been successfully authenticated.It is about offering full or partial access rights to resources like database, funds, and other critical information to get the job done.
                        <br /><br />
                        
                        <strong>Difference between!</strong><br />

                        IAM administrators should understand the core of utilizing both authentication and authorization, and how one differentiates from the other.

For example, an organization will allow all its employees to access their workplace systems (that authentication!). But then, not everyone will have the right to access its gated data (that authorization!).

Implementing authentication with the right authorization techniques can protect organizations, while streamlined access will enable its workforce to be more productive.

Here is the common authentication vs authorization techniques used by CIAM solutions.

However note that technologies like JWT, SAML, OpenID Authorization, and OAuth are used in both authentication and authorizatio

    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Why are you using  firebase? What other options do you have to implement authentication?</Accordion.Header>
    <Accordion.Body>
      
                        Firebase Authentication provides backend services, easy - to - use SDKs, and ready - made UI libraries to authenticate users to your app.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.


    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What other services does `firebase` provide other than authentication?</Accordion.Header>
    <Accordion.Body>
  
                    Parse – Open Source Backend Platform,
Back4app – Parse Hosting Platform,
Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise,
Backendless – Mobile Backend and API Services Platform,
Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects,
Pubnub – Real-time APIs and Global Messaging,
Kumulos – App Performance Management,
Game Sparks – Game Backend Platform,
Hoodie – Generic backend with a client API for Offline First applications,
Appwrite – Open-Source backend for Flutter developers,
Deployd – Simple core library, with a modular API for your application,
NHost – Accelerates development and provides full control,
Amplify JS – Open-source Javascript framework,
Heroku – Platform as a service backed by Salesforce,

    </Accordion.Body>
  </Accordion.Item>
        </Accordion>
        
        <div className='my-5 mt-5'>

          <img src="" alt="" />
          
            </div>

        </div>
    );
};

export default Question;