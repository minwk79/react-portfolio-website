import React from 'react';


function ProjectCard({name, tools, description, src, git='', website=''}) {  // we further need the image src, github link, website link. 


    const renderedTools = tools.map((tool) => {
        return (
        <div key={tool} className='inline'>
            <span className='inline-block bg-secondary rounded-full px-3 py-1 text-sm font-semibold text-silver mr-2 mb-2'>{tool}</span>
        </div>
        )
    })

    return (
        <div className='rounded overflow-hidden shadow-md shadow-secondary'>
            {/* <div className='group container'>
                <div className=' opacity-1 group-hover:opacity-30 duration-300'>
                    <img className='w-full' src={src} alt='project'/>
                    <div className=' opacity-1 group-hover:opacity-100 mb-8 duration-300 relative top-5'>
                        <button className='primaryBtn mx-auto' disabled={git === '' ? true : false}>Git</button>
                        <button className='primaryBtn mx-auto' disabled={website === '' ? true : false}>Website</button>
                    </div>
                </div> */}

            <div className='group container relative'>
                <img className='w-full opacity-1 group-hover:opacity-30 duration-300' src={src} alt='project'/>
                <div className='absolute top-16 left-0 right-0 mx-auto'>
                    <button className='primaryBtn mx-2 opacity-0 group-hover:opacity-100 mb-8 duration-300 relative top-5' disabled={git === '' ? true : false}>Git</button>
                    <button className='primaryBtn mx-2 opacity-0 group-hover:opacity-100 mb-8 duration-300 relative top-5' disabled={website === '' ? true : false}>Website</button>
                </div>

            </div>
            <div className='px-6 py-4'>
                <div className='text-primary font-bold text-xl mb-2'>{name}</div>
                <p className='text-secondary text-base'>
                {description}
                </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
                {renderedTools}
            </div>

        </div>
    )

}

export default ProjectCard;
