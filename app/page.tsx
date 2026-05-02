// 'use client';
import { Button } from '@/components/Button/Button';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Rating } from '@/components/Rating/Rating';
import { Tag } from '@/components/Tag/Tag';
// import { useState } from 'react';
import Menu from '@/components/Menu/Menu';
import { Input } from '@/components/Input/Input';
import { Textarea } from '@/components/Textarea/Textarea';



export default function Home() {
  // const [rating, setRating] = useState<number>(4);

  return (
    <div className="">
      <Htag tag="h1">hgfhfg</Htag>
      <Button apperance="primary" arrow="right" >button</Button>
      <Button apperance="ghost" arrow="right">button</Button>
      <P size="small">shajfhdsjkfhka</P>
      <P>shajfhdsgfdgdfgdshsfhfhka</P>
      <P size="big">shajfhdsjkfhgsfhsdfgfdshka</P>
      <Tag size="small">fds</Tag>
      <Tag size='small'>Ghost</Tag>
      <Tag size='medium' color='red'>Red</Tag>
      <Tag size='medium' color='green'>Green</Tag>
      <Tag size='small' color='primary'>Green</Tag>
      <Input placeholder='input'/>
      <Textarea placeholder='textarea'/>
      {/* <Rating rating={rating} isEditable setRating={setRating}/> */}
    </div>
  );
}
