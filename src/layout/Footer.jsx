import React from 'react';

export default function Footer() {
  return (
    <footer className='page-footer green lighten-2'>
      <div className='footer-copyright green lighten-2'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a className='grey-text text-lighten-4 right' href='#!'>
            Repository
          </a>
        </div>
      </div>
    </footer>
  );
}
