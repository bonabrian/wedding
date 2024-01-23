import Invitation from '@/components/invitation'

const GuestPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug === 'guest' ? undefined : params.slug
  return <Invitation slug={slug} />
}

export default GuestPage
