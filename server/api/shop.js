export default defineEventHandler(async (event) => {
  //   // handle query params
  //   const { name } = useQuery(event);

  //   //handle post data
  //   const { age } = await useBody(event);

  // api call with private key
  const { currencyKey } = useRuntimeConfig();
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_aLPAD3sQkvBrDIW6z1ZeYZbM1nebcTCetBlfAkvv"
  );
  return data;
});
