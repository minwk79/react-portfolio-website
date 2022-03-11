import React from 'react'

function ProjectCard({name, tools, description}) {  // we further need the image src, github link, website link. 


  return (
    <div className='ui card'>
        <div className='image'>
            <img src="" alt="some project" />
        </div>
        <div className='content'>
            <div className='header'>{name}</div>
            <div className='meta'>
                <span className='date'>{tools}</span>
            </div>
            <div className='description'>
                {description}
            </div>
        </div>
        <div className='extra content'>
            <div className='ui two buttons'>
                <div className='ui basic green button'>
                    Github
                </div>
                <div className='ui basic red button'>
                    Website
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard