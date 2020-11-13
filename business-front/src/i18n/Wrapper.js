import React, {useContext, useState} from 'react';
import Persian from './fa.json';
import English from './en.json';
import {IntlProvider} from "react-intl";

const Context = React.createContext('fa');
const local = navigator.language;
let lang;
if (local === 'en') {
    lang = English;
} else {
    if (local === 'fa') {
        lang = Persian;
    }
}
const Wrapper = (props) => {
    const [locale, setLocale] = useState(local);
    const [messages, setMessages] = useState(lang);
    const context = useContext(Context);

    function selectLanguage(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        if (newLocale === 'en') {
            setMessages(English);
        } else {
            if (newLocale === 'fa') {
                setMessages(Persian);
            }
        }
    }

    return (
        <>
            <select value={context.locale} onChange={context.selectLanguage}>
                <option value='en'>English</option>
                <option value='fa'>فارسی</option>
            </select>
            <Context.Provider value={{locale, selectLanguage}}>
                <IntlProvider messages={messages} locale={locale}>
                    {props.children}
                </IntlProvider>
            </Context.Provider>
        </>
    );
}
export default Wrapper;