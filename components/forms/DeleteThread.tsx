/**
 * A component that renders a delete button for a thread or comment.
 * @param threadId - The ID of the thread to delete.
 * @param currentUserId - The ID of the current user.
 * @param authorId - The ID of the author of the thread.
 * @param parentId - The ID of the parent thread if this is a comment.
 * @param isComment - A boolean indicating whether this is a comment or not.
 * @returns A delete button for the thread or comment.
 */
"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { deleteThread } from "@/lib/actions/thread.actions";

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

function DeleteThread({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();

  if (currentUserId !== authorId || pathname === "/") return null;

  return (
    <Image
      src='/assets/delete.svg'
      alt='delte'
      width={18}
      height={18}
      className='cursor-pointer object-contain'
      onClick={async () => {
        await deleteThread(JSON.parse(threadId), pathname);
        if (!parentId || !isComment) {
          router.push("/");
        }
      }}
    />
  );
}

export default DeleteThread;