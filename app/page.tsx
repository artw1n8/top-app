import { Button } from '@/components/Button/Button';
import { Htag } from '@/components/Htag/Htag';


export default function Home() {
  return (
    <div className="">
      <Htag tag="h1">tag</Htag>
      <Button apperance="primary" arrow="right">button</Button>
      <Button apperance="ghost" arrow="right">button</Button>
    </div>
  );
}
