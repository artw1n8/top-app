import { Button } from '@/components/Button/Button';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Tag } from '@/components/Tag/Tag';

export default function Home() {
  return (
    <div className="">
      <Htag tag="h1">tag</Htag>
      <Button apperance="primary" arrow="right">button</Button>
      <Button apperance="ghost" arrow="right">button</Button>
      <P size="small">shajfhdsjkfhka</P>
      <P>shajfhdsgfdgdfgdshsfhfhka</P>
      <P size="big">shajfhdsjkfhgsfhsdfgfdshka</P>

      <Tag size="small">fds</Tag>
      <Tag size='small'>Ghost</Tag>
      <Tag size='medium' color='red'>Red</Tag>
      <Tag size='medium' color='green'>Green</Tag>
      <Tag size='small' color='primary'>Green</Tag>


    </div>
  );
}
