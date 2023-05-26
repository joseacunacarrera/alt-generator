import Head from 'next/head'
import { useState } from'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'

export default function Home() {

  const [generatedText, setGeneratedText] = useState(' ');

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('http://34.16.132.89:5000/describe', {
        method: 'POST',
        body: formData,
      });
      let data = await response.text();
      console.log(data);
      setGeneratedText(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Alt Tag Generator</title>
        <meta name="description" content="Alt tag generator for images" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>AI Alt Tag Generator</h1>
        <p>Generate html's "alt" tag with the help of AI.</p>
        <input type='file' accept='image/*' onChange={(e) => handleImageUpload(e)}/>
        <p>tag="{generatedText}"</p>
      </main>
    </>
  )
}
