"use client"

import React, { useState } from 'react'

const Searchbar = () => {

  const [searchPrompt, setSearchPrompt] = useState("")

  const handleSubmit = () => { }
  return (
    <form className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>


      <input type="text" className="searchbar-input" placeholder='Digite o link do produto' />

      <button className='searchbar-btn' type='submit'>Procurar</button>

    </form>
  )
}

export default Searchbar