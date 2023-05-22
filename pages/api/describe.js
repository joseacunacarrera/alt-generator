import pipeline from '../../utils/ImageToTextPipeline'

export default async function handler(req, res) {

    // get instance of the image to text model
    const myPipeline = await pipeline.getInstance();
    const pipe = myPipeline.getPipeline();
    // Send in an image
    let out = await pipe('public/bread.jpg');
    
    let generated_text = out.at(0).generated_text;
    res.status(200).json({ generated_text })
  }