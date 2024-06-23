const url = 'https://eshopdotcom.onrender.com/ping';

const CronFetch = async() =>{
  await fetch(url);
}

CronFetch();
