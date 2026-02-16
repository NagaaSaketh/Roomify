import type { Route } from "./+types/home";
import NavBar from "../../components/NavBar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="home">
      <NavBar/>
      <h1 className="text-3xl text-indigo-300 font-extrabold">Hello there!</h1>
    </div>
  )
}
