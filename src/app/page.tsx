import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
    const images = await getMyImages();

    return (
        <div className="flex flex-wrap gap-4">
            {images.map((image) => (
                <div key={image.id} className="w-48">
                    <img src={image.url} alt="various" />
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
