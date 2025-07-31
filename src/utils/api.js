import axios from 'axios';

const API_URL = 'https://api.skilla.ru';
const TOKEN = 'testtoken';

export const getCallsList = async (params = {}) => {
  try {
    console.log('params', params)
    const response = await axios.post(
      `${API_URL}/mango/getList`,
      null,
      {
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
        },
        params: {
          date_start: params.dateStart,
          date_end: params.dateEnd,
          in_out: params.callType !== 'all' ?
            params.callType : undefined,
          sort_by: params.sortBy,
        }
      }
    );
    console.log('response.data.results', response.data.results)
    return response.data.results || [];
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const getCallRecord = async (recordId, partnershipId) => {
  try {
    const response = await axios.post(
      `${API_URL}/mango/getRecord`,
      null,
      {
        params: {
          record: recordId,
          partnership_id: partnershipId
        },
        headers: {
          'Authorization': `Bearer ${TOKEN}`,
          'Content-Type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
          'Content-Transfer-Encoding': 'binary',
          'Content-Disposition': 'filename="record.mp3"'
        },
        responseType: 'blob'
      }
    );
    return URL.createObjectURL(response.data);
  } catch (error) {
    console.error('Record fetch error:', error);
    return null;
  }
};