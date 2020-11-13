import English from './en.json';
import Persian from './fa.json';
export default class LanguageUtil {
    static getLocale(): any {
        return navigator.language;
    }
    static getLanguage(): any {
        const locale =this.getLocale();
        if (locale === "en-US") {
            return English;
        } else if(locale === "fa"){
            return Persian;
        }
        throw new Error('Locale not '+locale+' is not defined.');
    }
    static getDirection():string {
        let language = this.getLanguage();
        if(language=== English){
            return 'ltr';
        } else if(language=== Persian){
            return 'rtl';
        }
        throw new Error('Direction not ftound.')
    }
}