/**
 * Renders the header section of a user's profile.
 * @param accountId - The ID of the user whose profile is being viewed.
 * @param authUserId - The ID of the authenticated user.
 * @param name - The name of the user.
 * @param username - The username of the user.
 * @param imgUrl - The URL of the user's profile image.
 * @param bio - The bio of the user.
 * @param type - The type of the user's account.
 * @returns A React component representing the header section of a user's profile.
 */
import Link from "next/link";
import Image from "next/image";

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
}

function ProfileHeader({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  type,
}: Props) {
  return (
    <div className='flex w-full flex-col justify-start'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='relative h-20 w-20 object-cover'>
            <Image
              src={imgUrl}
              alt='logo'
              fill
              className='rounded-full object-cover shadow-2xl'
            />
          </div>

          <div className='flex-1'>
            <h2 className='text-left text-heading3-bold text-light-1'>
              {name}
            </h2>
            <p className='text-base-medium text-gray-1'>@{username}</p>
          </div>
        </div>
        {accountId === authUserId && type !== "Community" && (
          <Link href='/profile/edit'>
            <div className='flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2'>
              <Image
                src='/assets/edit.svg'
                alt='logout'
                width={16}
                height={16}
              />

              <p className='text-light-2 max-sm:hidden'>Edit</p>
            </div>
          </Link>
        )}
      </div>

      <p className='mt-6 max-w-lg text-base-regular text-light-2'>{bio}</p>

      <div className='mt-12 h-0.5 w-full bg-dark-3' />
    </div>
  );
}

export default ProfileHeader;