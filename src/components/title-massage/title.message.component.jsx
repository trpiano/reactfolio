import React from "react";
import TypeWriter from "typewriter-effect";
import Styled from "styled-components";

import { i18n } from '../../translate/i18n';

const MyTitleMessage = Styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: #4DFF25;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
    <MyTitleMessage>
        <div className="titleMessage">
            <div className="heading">
                <div className="main text-center mb-3">
                   {i18n.t('home.titles.app')}
                    <br/>
                    <span>
                        <strong>Timóteo Reinheimer Piano</strong>
                    </span>
                </div>
                <div className="sub">
                    <TypeWriter
                    options={{
                        strings:[ i18n.t('home.writermessages.firstmessage'),
                                  i18n.t('home.writermessages.secondmessage'), 
                                  i18n.t('home.writermessages.thirtmessage')
                                ],
                        autoStart: true,
                        loop: true,
                    }}
                    />                
                </div>
            </div>
        </div>
    </MyTitleMessage>
)

export default TitleMessage;