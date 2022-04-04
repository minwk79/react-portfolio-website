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
        <div className='rounded overflow-hidden shadow-lg'>
            <img className='w-full' src={src} alt='project' />
            <div className='px-6 py-4'>
                <div className='text-primary font-bold text-xl mb-2'>{name}</div>
                <p className='text-secondary text-base'>
                {description}
                </p>
            </div>
            <div className='px-6 pt-4 pb-2'>
                {renderedTools}
            </div>
            {/*TODO: Create the external link buttons */}
            <div className='hidden mb-8'>
                <button className='primaryBtn mx-auto' disabled={git === '' ? true : false}>Git</button>
                <button className='primaryBtn mx-auto' disabled={website === '' ? true : false}>Website</button>
            </div>
        </div>
    )

}

export default ProjectCard;
