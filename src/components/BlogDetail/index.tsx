import React from 'react';
import { blogDetailProps } from '../../types/BlogsListing.type';

export default function BlogDetail({ selectedBlog }: blogDetailProps) {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>
          <span className='link'>{selectedBlog.title}</span>
        </span>

        {selectedBlog.media?.length && selectedBlog.media[0]['media-metadata'] ? (
          <img
            className='postImg'
            src={selectedBlog.media[0]['media-metadata'][2].url}
            alt=''
          />
        ) : null}
        <p>{selectedBlog.abstract}</p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {selectedBlog.des_facet.map((des) => {
            return (
              <li key={des} className='sidebarListItem'>
                <span className='link'>{des}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>KEYWORDS</span>
        <ul className='sidebarList'>
          {selectedBlog.per_facet.map((per) => {
            return (
              <li key={per} className='sidebarListItem'>
                <span className='link'>{per}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
