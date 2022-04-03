import React from 'react'

function AboutCard({label, bullets}) {
    const bulletList = bullets.map((bullet) => {
        return <div key={bullet}>- {bullet}</div>;
    });


  return (
      <div className='p-4 lg:w-1/2 md:2-full'>
            <div className='flex p-8 sm:flex-row flex-col border'>
                <div className='w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-tahiti-600 text-silver flex-shrink-0'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                </div>
                <div className='flex-grow'>
                    <h2 className='secondaryText'>{label}</h2>
                    <h5 className='description'>{bulletList}</h5>
                </div>
            </div>
      </div>

  )



}

export default AboutCard



