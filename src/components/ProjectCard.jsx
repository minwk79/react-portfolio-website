import React from 'react';


function ProjectCard({name, tools, description, src}) {  // we further need the image src, github link, website link. 



    return (
        <div style={{backgroundImage: `url(${src})`}} className='shadow-lg shadow-secondary group container rounded-md flex justify-center 
            items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
                <h2 className='text-2xl font-bold text-secondary tracking-wider'>{name}</h2>
                <h2 className='mb-4 text-primary text-xs'>{tools}</h2>
                <p className='description leading-relaxed'>{description}</p>
                <div className='pt-8 text-center'>
                    <button className='primaryBtn'>website</button>
                    <button className='secondaryBtn'>code</button>
                </div>
                {/* <div className='w-1/2'>
                    <img className='object-cover object-center rounded' alt='/' src={src} />
                </div> */}
            </div>
        </div>




    )


}

export default ProjectCard;
