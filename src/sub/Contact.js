import React from 'react';

function Contact(props) {
  return (
    <section className='sub'>
      <div>
        <h2>Contact Us</h2>
        <form>
          <p>
            <label>Name : </label>
            <input type='text' />
          </p>

          <p>
            <label>E-Mail : </label>
            <input type='text' />
          </p>

          <p>
            <label>Subject : </label>
            <input type='text' />
          </p>

          <label>Message : </label>
          <p>
            <textarea color='60' rows='15'>
            </textarea>
          </p>

          <button type='submit'>Send</button>
          <button type='reset' className='reset'>Reset</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;