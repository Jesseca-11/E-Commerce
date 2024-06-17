import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatem
        minima nam hic reprehenderit error labore magni, voluptatum natus minus eligendi
        laudantium autem quae sapiente qui iure praesentium. Sequi eaque natus vero distinctio tenetur
        accusantium iste blanditiis nostrum numquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quos eaque sit odio delectus et non aspernatur enim,
        sint id cum corporis. Libero mollitia similique quisquam praesentium quasi at odit.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eum voluptate error tempora libero sapiente voluptas, 
        distinctio quibusdam sunt facilis quam nihil vel voluptatem est labore ipsa iste totam corrupti, qui nostrum earum dolorem quia. 
        Laudantium veniam harum neque officiis?</p>
      </div>
    </div>
  )
}

export default DescriptionBox
