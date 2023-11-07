'use client';

import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const { data } = await axios.post('/api/send');
      console.log('DATA:', data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className='bg-black min-h-screen text-gray-300 flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
        <button
          type='submit'
          className='bg-sky-600 text-white py-3 px-5 rounded-lg'
        >
          {isLoading ? 'Enviando...' : 'Enviar correo'}
        </button>
      </form>
    </main>
  );
}
