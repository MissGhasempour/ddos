export default async function CountOfAttack() {
  try {
    // const response = await fetch("https://api-ddos.tic.ir/api/count-chart");
    const response = await fetch("https://api-ddos.tic.ir/api/duration");
    const data = response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
  return <></>;
}
