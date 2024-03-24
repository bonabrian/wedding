import { findBySlug } from '@/actions/guests'
import Invitation from '@/components/invitation'
import { BASE_URL, fullURL } from '@/data/site'

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}) => {
  let imageUrl = `${BASE_URL}/api/og`
  const guest = await findBySlug(params.slug)

  if (guest) {
    imageUrl += `?guest=${guest.name.replaceAll('&', '@')}`
  }

  return {
    metadataBase: fullURL(),
    title: 'Undangan Pernikahan Bona & Silvia',
    description: 'Pernikahan Bona & Silvia',
    openGraph: {
      title: 'Undangan Pernikahan Bona & Silvia',
      description: 'Pernikahan Bona & Silvia',
      images: imageUrl,
      url: '/',
      type: 'website',
    },
  }
}

const GuestPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug === 'guest' ? undefined : params.slug
  return <Invitation slug={slug} />
}

export default GuestPage
