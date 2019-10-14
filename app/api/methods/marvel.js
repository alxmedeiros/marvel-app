import Api from 'app/api';
import ApiConstants from '../ApiConstants';
import md5 from 'md5';

export function fetchCaracters({params}) {

    const today = new Date();

    let ts = today.getTime();
    let hash = md5(ts + ApiConstants.PRIVATE_KEY + ApiConstants.API_KEY, 'hex');

    let query_string = `?ts=${ts}&apikey=${ApiConstants.API_KEY}&hash=${hash}`;

    const entries = Object.entries(params)

    for (const [key, value] of entries) {
        query_string += `&${key}=${value}`;
    }

    return Api(
        `/v1/public/characters${query_string}`,
        null,
        'get',
        null
    );
}

export function getCharacterDetails(characterId) {

    const today = new Date();

    let ts = today.getTime();
    let hash = md5(ts + ApiConstants.PRIVATE_KEY + ApiConstants.API_KEY, 'hex');

    let query_string = `?ts=${ts}&apikey=${ApiConstants.API_KEY}&hash=${hash}`;

    return Api(
        `/v1/public/characters/${characterId}${query_string}`,
        null,
        'get',
        null
    );
}
