export const fetchData = async function () {
  const res = await fetch(
    "https://flowrspot-api.herokuapp.com/api/v1/flowers"
  ).then((res) => res.json());
  return res;
};

// if (flowers.flowers) {
//   console.log(flowers.flowers[0]);
// }
