import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = parseInt(photoId);

  if (Number.isNaN(id)) {
    throw new Error("Not found");
  }

  return <FullPageImageView id={id}></FullPageImageView>;
}
