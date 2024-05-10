import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = parseInt(photoId);

  if (Number.isNaN(id)) {
    throw new Error("Not found");
  }

  const image = await getImage(id);
  return (
    <div>
      <img src={image.url} className="w-96" />
    </div>
  );
}
