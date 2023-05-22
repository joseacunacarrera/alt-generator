import { pipeline, env } from '@xenova/transformers';

const createImageToTextPipeline = async () => {
    // Initialize the pipeline here
    env.cacheDir = './.cachedModel';
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
  
