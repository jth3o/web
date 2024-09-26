'use client'

import { useRouter } from "next/navigation";
import Button from '../components/Button'

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
  router.push('/contact')
}
  return (
    <div>
      <Button label={'CONTACT PAGE'} onClick={handleClick} ></Button>
    </div>
  );
}
