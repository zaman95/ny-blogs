const APiKEY = 'Oz9EnvGGOtsvvERAi705uINEFFwPbZ2J';

export const getBlogsList = async () => {
  try {
    const data = await (
      await fetch(
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${APiKEY}`
      )
    ).json();
    return data;
  } catch (error) {
    throw new Error(`server error: ${error}`);
  }
};
