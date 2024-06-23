export default async ({ req, res, log, error }) => {

  await fetch('https://eshopdotcom.onrender.com/api/v1/ping');
  return res.json({});
};
