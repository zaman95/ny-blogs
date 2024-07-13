import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BlogsListing from './index';
import { getBlogsList } from '../../services'; // Adjust path as needed
import { BlogItem } from '../../types/BlogsListing.type'; // Adjust path as needed

// Mock the service function
jest.mock('../../services', () => ({
  getBlogsList: jest.fn(),
}));

// Mock data for testing
const mockBlogs: BlogItem[] = [
  {
    abstract: 'Test abstract',
    byline: 'Test byline',
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
    published_date: '2023-01-01',
    section: 'Test section',
    source: 'Test source',
    subsection: 'Test subsection',
    title: 'Test title',
    type: 'article',
    updated: '2023-01-01',
    url: 'https://example.com/test',
    per_facet: ['keyword1', 'keyword2'],
  },
];

describe('BlogsListing Component', () => {
  beforeEach(() => {
    // Reset the mock implementation before each test
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    render(<BlogsListing />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders blogs after data is fetched', async () => {
    // Mock the API response
    (getBlogsList as jest.Mock).mockResolvedValue({ results: mockBlogs });

    render(<BlogsListing />);

    // Wait for the loading state to resolve
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
      expect(screen.getByText('Test title')).toBeInTheDocument();
      expect(screen.getByText('Test abstract')).toBeInTheDocument();
    });
  });

  it('renders BlogDetail when a blog is selected', async () => {
    // Mock the API response
    (getBlogsList as jest.Mock).mockResolvedValue({ results: mockBlogs });

    render(<BlogsListing />);

    // Wait for the loading state to resolve
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    // Select a blog item
    const blogTitleElement = screen.getByText('Test title');
    expect(blogTitleElement).toBeInTheDocument();

    // Click on the blog to select it
    blogTitleElement.click();

    // Assert that BlogDetail component renders
    expect(screen.getByText('Test abstract')).toBeInTheDocument();
  });
});
