import AplicationContent from "./components/AplicationContent";
import { trpc } from "./trpc";

export default async function Home() {
  // const response = await trpc.hello.query({});

  return (
    <div>
      <AplicationContent />
    </div>
  );
}
