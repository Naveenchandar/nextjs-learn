import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 p-4">
        <div className="row-span-2 border border-[#e5e5e5] rounded-xl border-solid">
          <Image
            priority
            fetchPriority="high"
            src="/images/tshirt/t-shirt-1.avif"
            width={500}
            height={300}
            alt="T-shirt 1"
          />
        </div>
        <div>
          <Image
            priority
            fetchPriority="high"
            src="/images/bags/bag-1-dark.avif"
            width={300}
            height={100}
            alt="T-shirt 2"
          />
        </div>
        <div className="col-start-2 row-start-2">
          <Image
            priority
            fetchPriority="high"
            src="/images/cup/cup-black.avif"
            width={100}
            height={100}
            alt="T-shirt 3"
          />
        </div>
      </div>
    </main>
  );
}
