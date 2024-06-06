import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets'

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const handleSubmit = async () => {
    alert('Submitted')
  }
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            className="absolute left-0 my-2 ml-3 w-5"
            alt="link-icon"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            value={article.url}
            className="url_input peer"
          />
          <button
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
            type="submit"
          >
            <p className='text-2xl pb-2'>↵</p>
          </button>
        </form>
        
        {/* Browse URL History */}
      </div>

      {/* Display results */}
    </section>
  )
}

export default Demo