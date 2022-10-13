import React, { Component } from 'react'
import Navigation from '../components/Navigation';
function member() {

  return (



    <div className='memberform'>

      <Navigation />
      <form className='form'>
        <label className='Token_label'>
          Enter No. of Tokens
        </label>
        <input className=" inputform" type="text" name="name" />
        <div>
          <input className=" submitform" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default member;