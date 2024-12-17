import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import App from './App';
import UserList from './components/UserList';
import {createMemoryHistory} from 'history';

global.console = {error: jest.fn()}

test('renders a list of users', () => {
  const mockUserList = [
        {
          id: 1,
          name: 'User One',
          description: 'Description for User One',
          owner: {
            avatar_url: 'https://example.com/avatar1.png',
          },
        },
        {
          id: 2,
          name: 'User Two',
          owner: {
            avatar_url: 'https://example.com/avatar2.png',
          },
        },
      ];
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <UserList  userList={mockUserList} />
    </Router>
    );
      // Check if each user's name and avatar are displayed
    expect(screen.getByText(mockUserList[0].name)).toBeInTheDocument();
});

test('displays the description when available', () => {
  const mockUserList = [
        {
          id: 1,
          name: 'User One',
          description: 'Description for User One',
          owner: {
            avatar_url: 'https://example.com/avatar1.png',
          },
        },
        {
          id: 2,
          name: 'User Two',
          owner: {
            avatar_url: 'https://example.com/avatar2.png',
          },
        },
  ];
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <UserList  userList={mockUserList} />
    </Router>
    );
    expect(screen.getByText(mockUserList[0].description)).toBeInTheDocument();
});

test("should render anchor with href to details page", () => {
  const mockUserList = [
    {
      id: 1,
      name: 'User One',
      description: 'Description for User One',
      owner: {
        avatar_url: 'https://example.com/avatar1.png',
      },
    },
    {
      id: 2,
      name: 'User Two',
      owner: {
        avatar_url: 'https://example.com/avatar2.png',
      },
    },
  ];
  const history = createMemoryHistory();
  render(
    <Router location={history.location} navigator={history}>
      <UserList  userList={mockUserList} />
    </Router>
    );

    expect(screen.getAllByText(/Click to go to details/)[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link')[0].getAttribute('href')).toBe(`/details/${mockUserList[0].id}`);
});
