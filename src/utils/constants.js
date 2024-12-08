export const AVATAR = 
        "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";


export const TMDB_API_TOKEN = process.env.REACT_APP_TMDB_API_TOKEN;
export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export const API_OPTIONS= {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${TMDB_API_TOKEN}`
        }
};

export const IMG_CDN_URL = 
        "https://image.tmdb.org/t/p/w200"

export const SUPPORTED_LANGUAGES = [
        { identifier : "en", name :"English"},
        { identifier : "hi", name :"Hindi"},
        { identifier : "bng", name :"Bangla"},
];

export const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;

export const SEARCH_OFFSET = 5;

export const FIREBASE_API_KEY=process.env.REACT_APP-FIREBASE_API_KEY;
export const FIREBASE_AUTH_DOMAIN=process.env.REACT_APP-FIREBASE_AUTH_DOMAIN;
export const FIREBASE_PROJECT_ID=process.env.REACT_APP-FIREBASE_PROJECT_ID;
export const FIREBASE_STORAGE_BUCKET=process.env.REACT_APP-FIREBASE_STORAGE_BUCKET;
export const FIREBASE_MESSAGING_SENDER_ID=process.env.REACT_APP-FIREBASE_MESSAGING_SENDER_ID;
export const FIREBASE_APP_ID=process.env.REACT_APP-FIREBASE_APP_ID;
export const FIREBASE_MEASUREMENT_ID=process.env.REACT_APP-FIREBASE_MEASUREMENT_ID;