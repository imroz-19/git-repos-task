const BASE_URL = 'https://api.github.com/orgs/godaddy/repos';

const fetchRepoService = () => {
  return fetch(BASE_URL);
};

export default fetchRepoService;