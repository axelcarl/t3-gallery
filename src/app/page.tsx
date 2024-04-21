import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/8f1f6a0a-e09a-4649-aa52-af94b6edce59-r4j52.jpg",
  "https://utfs.io/f/f80c7104-afe4-4f30-9662-432b7c6098f0-tnjs0e.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
