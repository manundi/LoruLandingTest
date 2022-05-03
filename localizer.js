var dictionary = {
    "_": { // when language is not supported
        "play": "PLAY",
        "sign_in": "Sign in",
        "you_assign": "Teacher assigns exercises,",
        "students_play": "students play games",
        "get_started": "Get Started",
        "Its_free": "It's free",
        "reports_as_paid": "Learning reports as a paid feature.",
        "from_teachers": "From Teachers",
        "to_teachers": "to Teachers",
        "adaptive_learning": "Adaptive learning, teacher created question sets and many more features designed by teachers.",
        "coppa_ferpa": "COPPA, FERPA and",
        "gpdr": "GPDR compliant. ",
        "safe_to_use": "Safe to use for schools around the world.",
        "read_more": "Read more...",
        "try_games": "Try Games Now!",
        "sign_up_and_create": "Sign up and create or select questions.",
        "students_answer": "Students answer the questions in fun games",
        "monitor_learning": "Monitor their  learning!",
        "join_ambassador": "Join the Global Loru Games Ambassador Program!",
        "power_of_games": "Power of games in learning",
        "we_use_cookies": "We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.",
        "cookie_policy": "cookie policy",
    },
    "en": {
        "play": "PLAY",
        "sign_in": "Sign in",
        "you_assign": "Teacher assigns exercises,",
        "students_play": "students play games",
        "get_started": "Get Started",
        "Its_free": "It's free",
        "reports_as_paid": "Learning reports as a paid feature.",
        "from_teachers": "From Teachers",
        "to_teachers": "to Teachers",
        "adaptive_learning": "Adaptive learning, teacher created question sets and many more features designed by teachers.",
        "coppa_ferpa": "COPPA, FERPA and",
        "gpdr": "GPDR compliant. ",
        "safe_to_use": "Safe to use for schools around the world.",
        "read_more": "Read more...",
        "try_games": "Try Games Now!",
        "sign_up_and_create": "Sign up and create or select questions.",
        "students_answer": "Students answer the questions in fun games",
        "monitor_learning": "Monitor their  learning!",
        "join_ambassador": "Join the Global Loru Games Ambassador Program!",
        "power_of_games": "Power of games in learning",
        "we_use_cookies": "We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.",
        "cookie_policy": "cookie policy",
        
    },
    "fi": {
        "play": "Pelaa",
        "sign_in": "Kirjaudu",
        "you_assign": "Sinä määräät tehtävät,",
        "students_play": "oppilaat pelaavat",
        "get_started": "Aloita tästä",
        "Its_free": "Käyttö on ilmaista",
        "reports_as_paid": "Vain oppimisdatan seuranta maksaa. Lisenssin datan tarkasteluun voit ostaa Edustoresta!",
        "from_teachers": "Opettajien kehittämä",
        "to_teachers": "opettajien käyttämä !",
        "adaptive_learning": "Oppilaan tasoon mukautuminen, opettajien luomat tehtävät ja monta muuta opettajien suunnittelemaa ominaisuutta.",
        "coppa_ferpa": "COPPA, FERPA ja",
        "gpdr": "GPDR yhteensopiva. ",
        "safe_to_use": "Todettu turvalliseksi Suomessa ja muualla.",
        "read_more": "Lue lisää...",
        "try_games": "Kokeile pelejä",
        "sign_up_and_create": "Kirjaudu sisään ja luo omat tehtävät, tai valitse valmiista.",
        "students_answer": "Oppilaat vastaavat kysymyksiin pelaten hauskoja pelejä.",
        "monitor_learning": "Seuraa oppimista portaalista!",
        "join_ambassador": "Hae mukaan Loru Ambassador ohjelmaan.",
        "power_of_games": "Power of games in learning",
        "we_use_cookies": "Käytämme evästeitä tarjotaksemme hyvää palvelua. Jos jatkat sivuston käyttöä, oletamme, että tämä on sinulle ok.",
        "cookie_policy": "lisätietoa",


    }
}

class HTMLLocalizer {
    constructor() {
        customElements.define('localized-text', LocalizedTextElement);
    }
}

class LocalizedTextElement extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        var key = this.hasAttribute('key') ? this.getAttribute('key') : ''; 
        var lang = this.hasAttribute('lang') ? this.getAttribute('lang') : this.getLang();
        this.innerHTML = this.translate(key, lang);
    }

    getLang() {
        var lang = (navigator.languages != undefined)?navigator.languages[0]:navigator.language;
        // Ignore country code (example: en-US -> en)
        return lang.split("-")[0];
    }
    
    translate(key, lang) {
        return (lang in dictionary)?dictionary[lang][key]:dictionary['_'][key];
    }
}
  
new HTMLLocalizer();