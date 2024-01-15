/* Components */
import ZusCounter from "@/app/components/ZusCounter/ZusCounter"
import Inventory from "./components/Inventory";
import Cart from "./components/Cart";
import Statistics from "./components/Statistics";
import Orders from "./components/Order";

export default function IndexPage() {
  return <>
    <Inventory />
    <ZusCounter />
    <Cart />
    <Statistics />
    <Orders />
  </>;
}

export const metadata = {
  title: "MERN + Zustand Counter app",
};
