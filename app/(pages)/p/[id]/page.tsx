import LandingPage from './landingPage';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log('id', id);
  return <LandingPage id={id} />;
}
