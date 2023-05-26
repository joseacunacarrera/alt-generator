import { Readable } from 'stream';
import FormData from 'form-data';

export default async function handler(req, res) {
  console.log(req.body)
  try {
    const response = await fetch('http://34.16.132.89:5000/describe', {
      method: 'POST',
      body: req.body,
    });
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}