import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = parseInt(photoId);

  if (Number.isNaN(id)) {
    throw new Error("Not found");
  }

  return (
    <Modal>
      <FullPageImageView id={id}></FullPageImageView>
    </Modal>
  );
}
