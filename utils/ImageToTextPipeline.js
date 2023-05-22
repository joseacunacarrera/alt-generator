import { pipeline, env } from '@xenova/transformers';
import { existsSync, mkdirSync } from 'fs';

const createImageToTextPipeline = async () => {
    // Initialize the transformers cache folder
    const folderName = './.cachedModel'
    if (!existsSync(folderName)) {
        mkdirSync(folderName);
      }
    env.cacheDir = './.cachedModel';
    // Initialize the pipeline here
    const pipe = await pipeline('image-to-text');
    
    // Return an object with a method to access the pipeline instance
    return {
      getPipeline: () => pipe,
    };
};
  
// Immediately invoke the function to create a single instance
const ImageToTextPipeline = (() => {
    let instance;

    return {
        getInstance: async () => {
        if (!instance) {
            instance = await createImageToTextPipeline();
        }
        return instance;
        },
    };
})();

export default ImageToTextPipeline;
  
