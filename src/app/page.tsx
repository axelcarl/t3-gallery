import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {
    const images = await getMyImages();

    return (
        <div className="flex flex-wrap justify-content gap-4">
            {images.map((image) => (
                <div key={image.id} className="w-48 h-48">
                    <Image src={image.url} style={{ objectFit: "contain" }} width={192} height={192} alt={image.name} />
                    <div>{image.name}</div>
                </div>
            ))}
        </div>
    );
}

export default function HomePage() {
    return (
        <main>
            <SignedOut>
                <div className="h-full w-full text-center text-2xl">Please sign in</div>
            </SignedOut>
            <SignedIn>
                <Images></Images>
            </SignedIn>
        </main>
    );
}
