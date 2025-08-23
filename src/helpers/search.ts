export const getSearchParams = (searchParams: URLSearchParams) => {
  return Object.fromEntries(searchParams.entries());
};
