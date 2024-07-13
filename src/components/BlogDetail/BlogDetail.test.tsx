import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogDetail from './index';
import { BlogItem } from '../../types/BlogsListing.type';

const mockSelectedBlog: BlogItem = {
  abstract: 'This is a test abstract.',
  byline: 'Test Byline',
  des_facet: ['facet1', 'facet2'],
  geo_facet: ['geo1', 'geo2'],
  id: 1,
  media: [
    {
      'media-metadata': [
        { url: 'https://testimage.url/1', key: 'value' },
        { url: 'https://testimage.url/2', key: 'value' },
        { url: 'https://testimage.url/3', key: 'value' },
      ],
      otherKey: 'value',
    },
  ],
  org_facet: ['org1', 'org2'],
  per_facet: ['keyword1', 'keyword2'],
  published_date: '2023-07-07',
  section: 'Test Section',
  source: 'Test Source',
  subsection: 'Test Subsection',
  title: 'Test Title',
  type: 'Test Type',
  updated: '2023-07-07',
  url: 'https://test.url',
};

describe('BlogDetail Component', () => {
  it('renders the blog title', () => {
    render(<BlogDetail selectedBlog={mockSelectedBlog} />);
    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the blog image if media is available', () => {
    render(<BlogDetail selectedBlog={mockSelectedBlog} />);
    const imageElement = screen.getByAltText('');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://testimage.url/3');
  });

  it('renders the blog abstract', () => {
    render(<BlogDetail selectedBlog={mockSelectedBlog} />);
    const abstractElement = screen.getByText(/This is a test abstract./i);
    expect(abstractElement).toBeInTheDocument();
  });

  it('renders the categories (des_facet)', () => {
    render(<BlogDetail selectedBlog={mockSelectedBlog} />);
    const facet1Element = screen.getByText(/facet1/i);
    const facet2Element = screen.getByText(/facet2/i);
    expect(facet1Element).toBeInTheDocument();
    expect(facet2Element).toBeInTheDocument();
  });

  it('renders the keywords (per_facet)', () => {
    render(<BlogDetail selectedBlog={mockSelectedBlog} />);
    const keyword1Element = screen.getByText(/keyword1/i);
    const keyword2Element = screen.getByText(/keyword2/i);
    expect(keyword1Element).toBeInTheDocument();
    expect(keyword2Element).toBeInTheDocument();
  });
});
