import { LABELS } from "@/labels";
import Image from "next/image";

export default function CarouselSection() {
    const products = LABELS.home.carouselSection.products;
    if (!Object.values(products).length) return null;
    const productDetails = Object.values(products);
    return (
        <section>
            <div className="flex gap-4 overflow-x-auto">
                {productDetails.map(product => {
                    return (
                        <div key={product.name}>
                            <Image
                                src={product.imageSource}
                                width={300}
                                height={150}
                                alt={product.name}
                                priority
                                fetchPriority="high"
                            />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}