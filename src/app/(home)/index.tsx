import Image from "next/image";
import CarouselSection from "./@carousel";
import { LABELS } from "@/labels";

export default function HomePage() {
    const products = LABELS.home.herosection;
    return (
        <main>
            <div className="grid grid-cols-2 grid-rows-2 gap-8 p-4">
                <div className="row-span-2 border border-[#e5e5e5] rounded-xl border-solid">
                    <Image
                        priority
                        fetchPriority="high"
                        src={products.tshirt.imageSource}
                        width={500}
                        height={300}
                        alt={products.tshirt.name}
                    />
                </div>
                <div>
                    <Image
                        priority
                        fetchPriority="high"
                        src={products.bag.imageSource}
                        width={300}
                        height={100}
                        alt={products.bag.name}
                    />
                </div>
                <div className="col-start-2 row-start-2">
                    <Image
                        priority
                        fetchPriority="high"
                        src={products.cup.imageSource}
                        width={100}
                        height={100}
                        alt={products.cup.name}
                    />
                </div>
            </div>
            <div>
                <CarouselSection />
            </div>
        </main>
    );
}
