import GameSavingsLoader from '../app';

test('returns game saving', async () => {
  const game = await GameSavingsLoader.load();
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

  expect(game).toBe(data);
});
