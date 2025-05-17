import Dashboard from "@/components/dashboard/dashboard";

export default async function Page() {
  const response = await fetch("http://156.255.1.102:6523/task/chart");
  const data = await response.json();
  console.log(data[0]);
  return <Dashboard />;
}
