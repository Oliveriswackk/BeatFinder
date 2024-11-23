import axios from 'axios';

const openaiApi = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export default openaiApi;


//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
