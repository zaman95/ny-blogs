import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Blogs from './index';
import { BlogItem } from '../../types/BlogsListing.type';

const mockSetSelectedBlog = jest.fn();

const mockBlogs: BlogItem[] = [
  {
    abstract: 'This is a test abstract.',
    byline: 'Test Byline',
    des_facet: ['facet1', 'facet2'],
    geo_facet: ['geo1', 'geo2'],
    id: 1,
    media: [
      {
        'media-metadata': [
          { url: 'https://testimage.url', key: 'value' },
          { url: 'https://testimage.url', key: 'value' },
          { url: 'https://testimage.url', key: 'value' },
        ],
        otherKey: 'value',
      },
    ],
    org_facet: ['org1', 'org2'],
    published_date: '2023-07-07',
    section: 'Test Section',
    source: 'Test Source',
    subsection: 'Test Subsection',
    title: 'Test Title',
    type: 'Test Type',
    updated: '2023-07-07',
    url: 'https://test.url',
  },
];

describe('Blogs Component', () => {
  it('renders the blog items', () => {
    render(<Blogs blogs={mockBlogs} setSelectedBlog={mockSetSelectedBlog} />);
    const postTitleElement = screen.getByText(/Test Title/i);
    expect(postTitleElement).toBeInTheDocument();
  });

  it('calls setSelectedBlog when a blog post is clicked', () => {
    render(<Blogs blogs={mockBlogs} setSelectedBlog={mockSetSelectedBlog} />);
    const postElement = screen.getByText(/Test Title/i);
    fireEvent.click(postElement);
    expect(mockSetSelectedBlog).toHaveBeenCalledWith(mockBlogs[0]);
  });

  it('renders the blog image if media is available', () => {
    render(<Blogs blogs={mockBlogs} setSelectedBlog={mockSetSelectedBlog} />);
    const postImageElement = screen.getByAltText('');
    expect(postImageElement).toBeInTheDocument();
    expect(postImageElement).toHaveAttribute('src', 'https://testimage.url');
  });

  it('does not render the blog image if media is not available', () => {
    const blogsWithoutMedia = [
      {
        ...mockBlogs[0],
        media: []
      },
    ];
    render(<Blogs blogs={blogsWithoutMedia} setSelectedBlog={mockSetSelectedBlog} />);
    const postImageElement = screen.queryByAltText('');
    expect(postImageElement).not.toBeInTheDocument();
  });
});
