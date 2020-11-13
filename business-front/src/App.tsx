import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormikBasic from "./FormikBasic";
import {FormattedDate, FormattedMessage, IntlProvider} from 'react-intl';
import LanguageUtil from "./i18n/LanguageUtil";
import Wrapper from "./i18n/Wrapper";
/*import locale_en from 'react-intl/locale-data/en';
import locale_fa from 'react-intl/locale-data/fa';
import messages_fa from "./translations/fa.json";
import messages_en from "./translations/en.json";
const messages = {
    'de': messages_fa,
    'en': messages_en
};

//addLocaleData([...locale_en, ...locale_fa]);
*/
// const language = navigator.language.split(/[-_]/)[0];  // language without region code
export default class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(): void {
    }

    render() {
        return (
            <>
                <Wrapper/>
                <div dir={LanguageUtil.getDirection()}>
                    <IntlProvider /*locale={language}*/ locale={LanguageUtil.getLocale()}
                                                        messages={LanguageUtil.getLanguage()}>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                <FormattedMessage id="app.text"
                                                  defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {userFullName}!"
                                                  description="Welcome header on app main page"
                                                  values={{userFullName: 'Saeed'}}/>
                            </p>
                            {/*<Formik initialValues={{name: 'guest'}} onSubmit={(values, actions) => {
                    this.login();
                }}>
                    {props => (
                        <input type="text" value={props.values.name}/>
                    )
                    }
                </Formik>*/}
                            <FormikBasic/>

                            <a className="App-link" href="https://reactjs.org" target="_blank"
                               rel="noopener noreferrer">
                                <FormattedMessage id="app.learn-react-link"
                                                  defaultMessage="آموزش React"
                                                  description="Link on react page"/>
                            </a>
                        </header>
                        <FormattedDate value={new Date()} year='numeric' month='long' day='numeric' weekday='long' />
                    </IntlProvider>
                </div>
            </>
        );
    }
}