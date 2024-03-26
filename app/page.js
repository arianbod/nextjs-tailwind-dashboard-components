import Image from "next/image";
import { Withdrawn } from '@/components'
export default function Home() {
  return (
    <main>
      <div className="h-screen bg-pLightGrey text-primary font-poppins grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
        <div>
          <Withdrawn />
        </div>
        <div>
          2
        </div>
        <div>
          3
        </div>
      </div>
    </main>
  );
}
