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

